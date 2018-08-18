package com.appmanager.backend.repositories;

import com.appmanager.backend.domain.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    @Override
    List<User> findAll();

    @Override
    Page<User> findAll(Pageable pageable);

    @EntityGraph( value = "userWithApplicationsWithTypeGraph")
    Optional<User> findByName(String name);

    @Query("delete from User u where u.id in ?1")
    void batchDeleteById(Collection userIds);

    @EntityGraph( value = "userWithApplicationsWithTypeGraph")
    Optional<User> findById(Integer id);
}
