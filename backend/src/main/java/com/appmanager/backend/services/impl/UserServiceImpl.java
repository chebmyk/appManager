package com.appmanager.backend.services.impl;

import com.appmanager.backend.domain.entities.Security;
import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.repositories.UserRepository;
import com.appmanager.backend.services.UserService;
import com.appmanager.backend.services.impl.security.AuthServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PostFilter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final ModelMapper mapper;
    private UserRepository repository;
    private AuthServiceImpl authService;

    @Autowired
    public UserServiceImpl(UserRepository repository, ModelMapper mapper, AuthServiceImpl authService) {
        this.mapper = mapper;
        this.repository = repository;
        this.authService = authService;
    }

    @Override
    @PostFilter("hasPermission(filterObject, 'READ')")
    public Collection<User> findAll() {
        return repository.findAll();
    }

    @Override
    //@PostAuthorize("hasPermission(returnObject., 'READ')") //todo refactor move security logic to repository
    public Page<User> findAll(Pageable pageReqest) {
        return repository.findAll(pageReqest);
    }

    @Override
    @PostAuthorize("hasPermission(returnObject,'READ')")
    public User findById(Integer userId) {
        Optional<User> user = repository.findById(userId);
        return user.orElseThrow(ResourceNotFoundException::new);
    }

    @Override
    @Transactional
    @PreAuthorize("hasPermission(#credentials.user,'CREATE')")
    public User save(Security credentials) {
        User usr = repository.save(mapper.map(credentials.getUser(), User.class));
        log.info("User [" + credentials.getUser().getName() + "] was successfully saved");
        credentials.setUser(usr);
        savePassword(credentials);
        return usr;
    }

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<User> saveAll(List<User> users) {
        List<User> savedUsers = repository.saveAll(users);
        log.info("Users count [" + savedUsers.size() + "] were successfully saved");
        return savedUsers;
    }

    @Override
    @PreAuthorize("hasPermission(#id,'User','DELETE')")
    @Transactional
    public void delete(int id) {
        repository.deleteById(id);
        authService.deletePasswordsByUserId(id);
    }

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void bulkDelete(Collection userIds) {
        repository.batchDeleteById(userIds);
    }

    @Override
    @PreAuthorize("hasPermission(#user,'UPDATE')")
    public User update(User user) {
        User usr = repository.save(user);
        log.info("User id [" + usr.getId() + "] was successfully updated");
        return usr;
    }

    @Override
    @PreAuthorize("hasPermission(#credentials, 'UPDATE')")
    public void savePassword(Security credentials) {
        authService.savePassword(credentials);
    }

    @Override
    @PreAuthorize("isAuthenticated()")
    public boolean checkPassword(Security credentials) {
        return authService.checkPassword(credentials);
    }
}
