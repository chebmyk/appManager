package com.appmanager.backend.repositories;

import com.appmanager.backend.domain.entities.App;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ApplicationRepository extends JpaRepository<App,Integer> {

    @EntityGraph(value = "applicationWithTypeGraph")
    List<App> findAll();

    @Query("select a from App a where a.user.id = :userId")
    List<App> findAllByUserId(@Param("userId") Integer userId);

    @Override
    @EntityGraph(value = "applicationWithTypeGraph")
    Page<App> findAll(Pageable pageable);

    @EntityGraph( value = "applicationWithTypeGraph")
    Optional<App> findById(Integer id);
}
