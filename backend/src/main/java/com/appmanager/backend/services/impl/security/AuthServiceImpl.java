package com.appmanager.backend.services.impl.security;

import com.appmanager.backend.domain.dto.UserDTO;
import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.domain.entities.Security;
import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.repositories.SecurityRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
@Slf4j
public class AuthServiceImpl implements UserDetailsService {

    private SecurityRepository securityRepository;
    private ModelMapper mapper;
    private EnumMap<UserRole, Set<RolePermission>> accessMatrix;
    private BCryptPasswordEncoder encoder;

    @PostConstruct
    private void initAccessMatrix() {
        accessMatrix = new EnumMap<>(UserRole.class);
        accessMatrix.put(
                UserRole.ADMIN,
                Stream.of(
                        new RolePermission(UserAction.CREATE, User.class.getSimpleName()),
                        new RolePermission(UserAction.DELETE, User.class.getSimpleName()),
                        new RolePermission(UserAction.UPDATE, User.class.getSimpleName()),
                        new RolePermission(UserAction.READ, User.class.getSimpleName()),
                        new RolePermission(UserAction.UPDATE, Security.class.getSimpleName()),
                        new RolePermission(UserAction.READ, App.class.getSimpleName())
                ).collect(Collectors.toCollection(HashSet::new))
        );
        accessMatrix.put(UserRole.ADOPS,
                Stream.of(
                        new RolePermission(UserAction.CREATE, User.class.getSimpleName()),
                        new RolePermission(UserAction.UPDATE, User.class.getSimpleName()),
                        new RolePermission(UserAction.DELETE, User.class.getSimpleName()),
                        new RolePermission(UserAction.READ, User.class.getSimpleName()),
                        new RolePermission(UserAction.UPDATE, Security.class.getSimpleName()),
                        new RolePermission(UserAction.CREATE, App.class.getSimpleName()),
                        new RolePermission(UserAction.UPDATE, App.class.getSimpleName()),
                        new RolePermission(UserAction.DELETE, App.class.getSimpleName()),
                        new RolePermission(UserAction.READ, App.class.getSimpleName())
                ).collect(Collectors.toSet())

        );
        accessMatrix.put(UserRole.PUBLISHER, Stream.of(
                new RolePermission(UserAction.CREATE, App.class.getSimpleName()),
                new RolePermission(UserAction.UPDATE, App.class.getSimpleName()),
                new RolePermission(UserAction.DELETE, App.class.getSimpleName()),
                new RolePermission(UserAction.UPDATE, Security.class.getSimpleName()),
                new RolePermission(UserAction.READ, App.class.getSimpleName()),
                new RolePermission(UserAction.READ, User.class.getSimpleName())
                )
                        .collect(Collectors.toSet())
        );
    }


    @Autowired
    public AuthServiceImpl(SecurityRepository securityRepository, ModelMapper mapper, BCryptPasswordEncoder encoder) {
        this.securityRepository = securityRepository;
        this.mapper = mapper;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        Optional<Security> credential = securityRepository.findByEmail(name);
        return credential.map(this::buildUserFromUserEntity).orElseThrow(() -> new UsernameNotFoundException("Username [" + name + "] not found"));
    }

    public void savePassword(Security security) {
        String pwd = encoder.encode(security.getPassword());
        security.setPassword(pwd);
        Security credentials = securityRepository.save(security);
        log.info("Credentials for user [" + credentials.getUser().getName() + "] was successfully saved");
    }

    public boolean checkPassword(Security security) {
        Optional<Security> credentials = securityRepository.findByEmail(security.getUser().getEmail());
        return credentials.map(
                cred -> encoder.matches(security.getPassword(), cred.getPassword())
        ).orElse(false);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public void deletePasswordsByUserId(int userId) {
        securityRepository.deleteByUserId(userId);
    }

    private CustomUserDetails buildUserFromUserEntity(Security security) {
        UserDTO userDetails = mapper.map(security.getUser(), UserDTO.class);
        Collection<GrantedAuthority> authorityCollation = getAuthorirties(security.getUser().getRole().toString());

        return new CustomUserDetails(
                security.getUser().getEmail(),
                security.getPassword(),
                authorityCollation,
                userDetails,
                this.accessMatrix.get(security.getUser().getRole())
        );
    }

    private Collection<GrantedAuthority> getAuthorirties(String... roles) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String role : roles) {
            Assert.isTrue(!role.startsWith("ROLE_"), role + " cannot start with ROLE_ (it is automatically added)");
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        }
        return authorities;
    }

    public boolean checkPermission(String role, Permission permission) {
        if (accessMatrix.containsKey(UserRole.valueOf(role))) {
            for (RolePermission role_perm : accessMatrix.get(UserRole.valueOf(role))) {
                if (role_perm.isAllowed(permission)) {
                    return true;
                }
            }
        }
        return false;
    }
}
