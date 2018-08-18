package com.appmanager.backend.services.impl.security.checkers;

import com.appmanager.backend.domain.dto.ApplicationWithUserDTO;
import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.services.ApplicationService;
import com.appmanager.backend.services.impl.security.AuthServiceImpl;
import com.appmanager.backend.services.impl.security.Permission;
import com.appmanager.backend.services.impl.security.RolePermission;
import com.appmanager.backend.services.impl.security.UserAction;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
public class ApplicationPermissionChecker implements PermissionChecker<App> {

    private ApplicationService applicationService;
    private AuthServiceImpl authService;

    private String targetType;

    public ApplicationPermissionChecker(ApplicationService applicationService, AuthServiceImpl authService) {
        this.targetType = App.class.getSimpleName();
        this.authService = authService;
        this.applicationService = applicationService;
    }

    public String getTargetType() {
        return targetType;
    }

    @Override
    public boolean checkPermission(App target, String userName, GrantedAuthority auth, Object permission) {
        Permission perm = new RolePermission(UserAction.valueOf((String) permission), target.getClass().getSimpleName());
        if (authService.checkPermission(auth.getAuthority().replace("ROLE_", ""), perm)) {
            //aditional security permission
            //Publisher can see only own applications
            if ("ROLE_PUBLISHER".equals(auth.getAuthority())){
                return (target.getUser().getEmail().equals(userName));
            }
            return true;
        }
        return false;
    }

    @Override
    public boolean checkPermissionById(Serializable targetId, String userName, GrantedAuthority auth, Object permission) {
        App app = applicationService.findById((Integer) targetId);
        return checkPermission(app, userName, auth, permission);
    }
}
