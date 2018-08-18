package com.appmanager.backend.services.impl.security;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RolePermission implements Permission {

    private UserAction action;
    private String target;

    public RolePermission(UserAction action, String target) {
        this.action = action;
        this.target = target;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RolePermission)) return false;

        RolePermission that = (RolePermission) o;

        if (action != that.action) return false;
        return target != null ? target.equals(that.target) : that.target == null;
    }

    @Override
    public int hashCode() {
        int result = action != null ? action.hashCode() : 0;
        result = 31 * result + (target != null ? target.hashCode() : 0);
        return result;
    }
}

