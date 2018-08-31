package com.appmanager.backend.services.impl;

import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.repositories.ApplicationRepository;
import com.appmanager.backend.services.ApplicationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PostFilter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
@Slf4j
@Primary
public class ApplicationServiceImpl implements ApplicationService {

    private ApplicationRepository repository;

    @Autowired
    public ApplicationServiceImpl(ApplicationRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    @PostFilter("hasPermission(filterObject, 'READ')")
    public Collection<App> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional
    @PostFilter("hasPermission(filterObject, 'READ')")
    public Collection<App> findAllByUserId(Integer userId) {
        return repository.findAllByUserId(userId);
    }

    @Override
    @PostAuthorize("hasPermission(returnObject,'READ')")
    public App findById(Integer id) {
        return repository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    @Override
    @PreAuthorize("hasPermission(#application,'CREATE')")
    public App save(App application) {
        App app = repository.save(application);
        return app;
    }

    @Override
    @PreAuthorize("hasPermission(#id,'App','DELETE')")
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Override
    @PreAuthorize("hasPermission(#application,'UPDATE')")
    public App update(App application) {
        App app = repository.save(application);
        return app;
    }

    @Override
    public Page<App> findAll(Pageable pageRequest) {
        return repository.findAll(pageRequest);
    }

}
