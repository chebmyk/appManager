package com.appmanager.backend.services.impl.security.checkers;

import com.appmanager.backend.domain.entities.Security;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.services.impl.security.AuthServiceImpl;
import com.appmanager.backend.services.impl.security.Permission;
import com.appmanager.backend.services.impl.security.RolePermission;
import com.appmanager.backend.services.impl.security.UserAction;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
public class CredentialsChecker implements PermissionChecker<Security> {

    private AuthServiceImpl authService;

    private String targetType;

    public CredentialsChecker(AuthServiceImpl authService) {
        this.targetType = Security.class.getSimpleName();
        this.authService = authService;
    }

    public String getTargetType() {
        return targetType;
    }

    @Override
    public boolean checkPermission(Security target, String userName, GrantedAuthority auth, Object permission) {
        Permission perm = new RolePermission(UserAction.valueOf((String) permission), target.getClass().getSimpleName());
        if (authService.checkPermission(auth.getAuthority().replace("ROLE_", ""), perm)) {
            //aditional security permission
            if ("ROLE_PUBLISHER".equals(auth.getAuthority())) {
                return (target.getUser().getEmail().equals(userName));
            } else if ("ROLE_ADOPS".equals(auth.getAuthority())) {
                return (target.getUser().getRole().equals(UserRole.PUBLISHER) || (target.getUser().getRole().equals(UserRole.ADOPS) && target.getUser().getEmail().equals(userName)));
            }
            return true;
        }
        return false;
    }

    @Override
    public boolean checkPermissionById(Serializable targetId, String userName, GrantedAuthority auth, Object permission) {
        return false;
    }
}
