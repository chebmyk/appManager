package com.appmanager.backend.domain.dto;

import com.appmanager.backend.domain.entities.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

import javax.validation.constraints.Email;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO {

    private Integer id;
    @NonNull
    private String name;
    @Email
    private String email;
    private UserRole role;


    public UserDTO(Integer id, String name, String email, UserRole role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserDTO)) return false;
        UserDTO userDTO = (UserDTO) o;
        return Objects.equals(name, userDTO.name) &&
                Objects.equals(email, userDTO.email) &&
                role == userDTO.role;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, email, role);
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", role=" + role  +
                '}';
    }
}
