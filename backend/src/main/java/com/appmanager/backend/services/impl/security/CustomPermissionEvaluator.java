package com.appmanager.backend.services.impl.security;

import com.appmanager.backend.services.impl.security.checkers.PermissionChecker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class CustomPermissionEvaluator implements PermissionEvaluator {

    private Map<String, PermissionChecker> permCheckers;

    @Autowired
    public CustomPermissionEvaluator(List<PermissionChecker> checkers) {
        this.permCheckers = checkers.stream().collect(Collectors.toMap(PermissionChecker::getTargetType, c -> c));
    }

    @Override
    public boolean hasPermission(Authentication authentication, Object target, Object permission) {
        if (authentication.isAuthenticated()) {
            PermissionChecker checker = permCheckers.get(target.getClass().getSimpleName());
            if (checker != null) {
                for (GrantedAuthority auth : authentication.getAuthorities()) {
                    if (checker.checkPermission(target, authentication.getName(), auth, permission)) {
                        return true;
                    }
                }
            }
        }
        return false;
        //throw new AccessDeniedException("Access denied: User is not permit to " + permission + "  " + target.getClass().getSimpleName());
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission) {
        if (authentication.isAuthenticated()) {
            PermissionChecker checker = permCheckers.get(targetType);
            if (checker != null) {
                for (GrantedAuthority auth : authentication.getAuthorities()) {
                    if (checker.checkPermissionById(targetId, authentication.getName(), auth, permission)) {
                        return true;
                    }
                }
            }
        }
        return false;
        //throw new AccessDeniedException("Access denied: User is not permit to " + permission + "  " + targetId);
    }
}
