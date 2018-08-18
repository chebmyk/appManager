package com.appmanager.backend.domain.dto;

import com.appmanager.backend.domain.entities.AppType;
import com.appmanager.backend.domain.entities.ContentType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class ApplicationDTO {

    private Integer id;
    @NonNull
    private String name;
    @NonNull
    private AppType type;
    private Set<ContentType> contentTypes;


    public ApplicationDTO(Integer id, String name, AppType type, Set<ContentType> contentTypes) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.contentTypes = contentTypes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ApplicationDTO)) return false;
        ApplicationDTO that = (ApplicationDTO) o;
        return Objects.equals(name, that.name) &&
                type == that.type &&
                Objects.equals(contentTypes, that.contentTypes);
    }

    @Override
    public int hashCode() {

        return Objects.hash(name, type, contentTypes);
    }

    @Override
    public String toString() {
        return "ApplicationDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type=" + type +
                ", contentTypes=" + contentTypes +
                '}';
    }
}
