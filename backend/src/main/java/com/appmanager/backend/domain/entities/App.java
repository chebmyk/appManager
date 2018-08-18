package com.appmanager.backend.domain.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "Application")
@Data
@NamedEntityGraph(name = "applicationWithTypeGraph", attributeNodes = {
        @NamedAttributeNode(value = "contentTypes"),
        @NamedAttributeNode(value = "user")
})
public class App {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private String name;
    @Enumerated(EnumType.STRING)
    private AppType type;
    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<ContentType> contentTypes;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof App)) return false;
        if (!super.equals(o)) return false;

        App app = (App) o;

        if (name != null ? !name.equals(app.name) : app.name != null) return false;
        return type == app.type;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (type != null ? type.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "App{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type=" + type +
                ", contentTypes=" + contentTypes +
                '}';
    }
}
