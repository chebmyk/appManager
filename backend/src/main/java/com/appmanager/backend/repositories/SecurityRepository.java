package com.appmanager.backend.repositories;

import com.appmanager.backend.domain.entities.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Integer> {

    @Query("select s from Security s where s.id = (select max(s2.id) from Security s2 where s2.user.email=:email)")
    Optional<Security> findByEmail (@Param("email") String email);

    @Modifying
    @Query("delete from Security s where s.user.id = :userId")
    void deleteByUserId(@Param("userId") int userId);
}
