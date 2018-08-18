package com.appmanager.backend.repositories.impl;

import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.repositories.AppService;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Repository
@Qualifier("hiber")
public class ApplicationRepositorySessionDAO implements AppService {

    private SessionFactory sessionFactory;


    public ApplicationRepositorySessionDAO(EntityManagerFactory entityManagerFactory) {
        sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
    }

    @Override
    public List<App> findAll() {
        Session session = sessionFactory.getCurrentSession();
        TypedQuery<App> q = session.createQuery("select a from App a", App.class);
        return q.getResultList();
    }

    @Override
    public Optional<App> findById(Integer id) {
        Session session = sessionFactory.getCurrentSession();
        TypedQuery<App> q = session.createQuery("select a from App a where a.id = :id", App.class);
        q.setParameter("id", id);
        return Optional.of(q.getSingleResult());
    }

    @Override
    public App save(App application) {
        return (App) sessionFactory.getCurrentSession().save(application);
    }

    @Override
    public List<App> saveAll(List<App> applications) {
        return applications;
    }

    @Override
    public App delete(App application) {
        sessionFactory.getCurrentSession().delete(application);
        return application;
    }
}
