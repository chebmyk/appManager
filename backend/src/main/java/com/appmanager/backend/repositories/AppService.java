package com.appmanager.backend.repositories;

import com.appmanager.backend.domain.entities.App;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface AppService {

    List<App> findAll();

    Optional<App> findById(Integer id);

    @Transactional
    App save(App application);

    @Transactional
    List<App> saveAll(List<App> application);

    @Transactional
    App delete(App application);

}
