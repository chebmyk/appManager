package com.appmanager.backend.services.impl.security;

import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.domain.dto.UserDTO;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.EnumMap;
import java.util.Set;

public class CustomUserDetails extends User {

    public CustomUserDetails(String username, String password, Collection<? extends GrantedAuthority> authorities, UserDTO userDetails, Set<RolePermission> accessMatrix) {
        super(username, password, authorities);
        this.userDetails = userDetails;
        this.accessMatrix = accessMatrix;
    }

    private UserDTO userDetails;
    private Set<RolePermission> accessMatrix;

    public UserDTO getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserDTO userDetails) {
        this.userDetails = userDetails;
    }

    public Set<RolePermission> getAccessMatrix() {
        return accessMatrix;
    }

    public void setAccessMatrix(Set<RolePermission> accessMatrix) {
        this.accessMatrix = accessMatrix;
    }
}
