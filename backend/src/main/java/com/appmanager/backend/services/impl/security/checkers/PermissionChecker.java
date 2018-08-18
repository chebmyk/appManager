package com.appmanager.backend.services.impl.security.checkers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;

public interface PermissionChecker<T> {

    String getTargetType();

    boolean checkPermission(T target, String userName, GrantedAuthority auth, Object permission);

    boolean checkPermissionById(Serializable targetId, String userName, GrantedAuthority auth, Object permission);
}
