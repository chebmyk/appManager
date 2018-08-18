package com.appmanager.backend.services;

import com.appmanager.backend.domain.dto.ApplicationWithUserDTO;
import com.appmanager.backend.domain.entities.App;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

public interface ApplicationService {

    Collection<App> findAll();

    @Transactional
    Collection<App> findAllByUserId(Integer userId);

    App findById(Integer id);

    App save(App application);

    void delete(Integer id);

    App update(App application);

    Page<App> findAll(Pageable pageRequest);
}
