package com.appmanager.backend.domain.dto;

import com.appmanager.backend.domain.entities.AppType;
import com.appmanager.backend.domain.entities.ContentType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class ApplicationWithUserDTO extends  ApplicationDTO {

    private UserDTO user;

    public ApplicationWithUserDTO(Integer id, String name, AppType type, Set<ContentType> contentTypes, UserDTO user) {
        super(id, name, type, contentTypes);
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ApplicationWithUserDTO)) return false;
        if (!super.equals(o)) return false;

        ApplicationWithUserDTO that = (ApplicationWithUserDTO) o;

        return user != null ? user.equals(that.user) : that.user == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (user != null ? user.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "ApplicationWithUserDTO{" +
                "user=" + user +
                "} " + super.toString();
    }
}
