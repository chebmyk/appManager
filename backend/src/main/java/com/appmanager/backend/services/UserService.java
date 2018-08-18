package com.appmanager.backend.services;

import com.appmanager.backend.domain.entities.Security;
import com.appmanager.backend.domain.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

public interface UserService {
    Collection<User> findAll();

    Page<User> findAll(Pageable pageReqest);

    User findById(Integer userId);

    @Transactional
    User save(Security user);

    @Transactional
    List<User> saveAll(List<User> users);

    void delete(int id);

    void bulkDelete (Collection userIds);

    User update(User user);

    void savePassword(Security credentials);

    boolean checkPassword(Security credentials);
}
