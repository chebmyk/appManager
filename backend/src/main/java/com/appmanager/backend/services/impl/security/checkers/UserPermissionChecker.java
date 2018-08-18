package com.appmanager.backend.services.impl.security.checkers;

import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.services.UserService;
import com.appmanager.backend.services.impl.security.AuthServiceImpl;
import com.appmanager.backend.services.impl.security.Permission;
import com.appmanager.backend.services.impl.security.RolePermission;
import com.appmanager.backend.services.impl.security.UserAction;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
public class UserPermissionChecker implements PermissionChecker<User> {

    private UserService userService;
    private AuthServiceImpl authService;

    private String targetType;

    public UserPermissionChecker(UserService userService, AuthServiceImpl authService) {
        this.targetType = User.class.getSimpleName();
        this.authService = authService;
        this.userService = userService;
    }

    public String getTargetType() {
        return targetType;
    }

    @Override
    public boolean checkPermission(User target, String userName, GrantedAuthority auth, Object permission) {
        Permission perm = new RolePermission(UserAction.valueOf((String) permission), target.getClass().getSimpleName());
        if( authService.checkPermission(auth.getAuthority().replace("ROLE_",""), perm)){
            boolean hasAccess = true;
            //aditional security permission
            switch (UserRole.valueOf(auth.getAuthority().replace("ROLE_",""))) {
                case ADMIN:
                    switch (UserAction.valueOf((String) permission)) {
                        case CREATE:
                            break;
                        case READ:
                            break;
                        case UPDATE: hasAccess = !target.getEmail().equals(userName);
                            break;
                        case DELETE: hasAccess = !target.getEmail().equals(userName);
                            break;
                    }
                    break;
                case ADOPS:
                    switch (UserAction.valueOf((String) permission)) {
                        case CREATE: hasAccess = target.getRole().equals(UserRole.PUBLISHER);
                            break;
                        case READ: hasAccess = target.getEmail().equals(userName) || target.getRole().equals(UserRole.PUBLISHER);
                            break;
                        case UPDATE: hasAccess = target.getRole().equals(UserRole.PUBLISHER) || !target.getEmail().equals(userName);
                            break;
                        case DELETE:
                            hasAccess = target.getRole().equals(UserRole.PUBLISHER) || !target.getEmail().equals(userName);
                            break;
                    }
                    break;
                case PUBLISHER:
                    switch (UserAction.valueOf((String) permission)) {
                        case CREATE:
                            break;
                        case READ: hasAccess = target.getEmail().equals(userName);
                            break;
                        case UPDATE: hasAccess = !target.getEmail().equals(userName);
                            break;
                        case DELETE: hasAccess = !target.getEmail().equals(userName);
                            break;
                    }
                    break;
            }
            return hasAccess;
        }
        return false;
    }

    @Override
    public boolean checkPermissionById(Serializable targetId, String userName, GrantedAuthority auth, Object permission) {
        User user = userService.findById((Integer) targetId);
        return checkPermission(user, userName, auth, permission);
    }
}
