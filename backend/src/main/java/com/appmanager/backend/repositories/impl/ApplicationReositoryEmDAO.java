package com.appmanager.backend.repositories.impl;

import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.repositories.AppService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Repository
@Qualifier("em")
public class ApplicationReositoryEmDAO implements AppService {

    @PersistenceContext
    private EntityManager em;

    public List<App> findAll() {
        TypedQuery<App> q = em.createQuery("select a from App a", App.class);
        return q.getResultList();
    }

    @Override
    public Optional<App> findById(Integer id) {
        TypedQuery<App> q = em.createQuery("select a from App a where a.id=:id", App.class);
        q.setParameter("id", id);
        return Optional.of(q.getSingleResult());
    }

    public App save(App application) {
        em.persist(application);
        return application;
    }

    @Override
    public List<App> saveAll(List<App> application) {
        return null;
    }

    @Override
    public App delete(App application) {
        em.remove(application);
        return application;
    }

}
