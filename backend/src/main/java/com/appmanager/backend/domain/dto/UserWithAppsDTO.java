package com.appmanager.backend.domain.dto;

import com.appmanager.backend.domain.entities.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
public class UserWithAppsDTO extends UserDTO {

    private Set<ApplicationDTO> applications;

    public UserWithAppsDTO(Integer id, String name, String email, UserRole role, Set<ApplicationDTO> applications) {
        super(id, name, email, role);
        this.applications = applications;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserWithAppsDTO)) return false;
        if (!super.equals(o)) return false;

        UserWithAppsDTO that = (UserWithAppsDTO) o;

        return applications != null ? applications.equals(that.applications) : that.applications == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (applications != null ? applications.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "UserWithAppsDTO{" +
                "applications=" + applications +
                "} " + super.toString();
    }
}
