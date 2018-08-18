package com.appmanager.backend.services.impl.security;

public interface Permission {
    default boolean isAllowed(Object target) {
        return this.equals(target);
    }
}
