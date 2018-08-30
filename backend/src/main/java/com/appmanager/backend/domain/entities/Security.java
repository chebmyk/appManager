package com.appmanager.backend.domain.entities;

import com.appmanager.backend.domain.entities.mapped.Auditors;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@EqualsAndHashCode
@EntityListeners(AuditingEntityListener.class)
public class Security extends Auditors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String password;
    @OneToOne
    private User user;

}
