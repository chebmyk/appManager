package com.appmanager.backend.domain.entities.mapped;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass
public class Auditors {
    @CreatedDate
    private LocalDateTime created_date;
    @CreatedBy
    private String created_by;
    @LastModifiedDate
    private LocalDateTime modified_date;
    @LastModifiedBy
    private String modified_by;
}
