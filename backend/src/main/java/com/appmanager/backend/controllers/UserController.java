package com.appmanager.backend.controllers;

import com.appmanager.backend.domain.dto.SecurityDTO;
import com.appmanager.backend.domain.dto.UserDTO;
import com.appmanager.backend.domain.dto.UserWithAppsDTO;
import com.appmanager.backend.domain.entities.Security;
import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/users")
@Slf4j
public class UserController {

    private UserService userService;
    private ModelMapper mapper;

    @Autowired
    public UserController(UserService userService, ModelMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllUsers() {
        Collection<UserDTO> result = userService.findAll().stream().map(usr -> mapper.map(usr, UserDTO.class)).collect(Collectors.toList());
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/pages", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllUsersByPage(Pageable pageRequest) {
        Page<UserDTO> result = userService.findAll(pageRequest).map(usr -> mapper.map(usr, UserDTO.class));
        return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getUserById(@PathVariable Integer id) {
        return ResponseEntity.ok(mapper.map(userService.findById(id), UserDTO.class));
    }

    //todo review is it required?
    @GetMapping(value = "/{id}/applications", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getUserWithApplications(@PathVariable Integer id) {
        return ResponseEntity.ok(mapper.map(userService.findById(id), UserWithAppsDTO.class));
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addUser(@RequestBody SecurityDTO credentials) {
        log.info("Going to add user " + credentials.getUser().getName());
        Security credentialsEntity = mapper.map(credentials, Security.class);
        return ResponseEntity.ok(mapper.map(userService.save(credentialsEntity), UserDTO.class));
    }

    @PostMapping(value = "/batch", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addUsers(@RequestBody List<UserDTO> users) {
        log.info("Going to add users count: " + users.size());
        return ResponseEntity.ok(userService.saveAll(users.stream().map(usr -> mapper.map(usr, User.class)).collect(Collectors.toList())));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteUser(@PathVariable int id) {
        log.info("Going to delete user with id " + id);
        userService.delete(id);
        return ResponseEntity.ok("{\"result\": \"User with id[" + id + "] was successfully removed\"}");
    }

    @PostMapping
    public ResponseEntity deleteUsers(@RequestBody int[] userIds) {
        log.info("Going to delete users with ids " + userIds);
        try {
            Collection deleteList = Arrays.asList(userIds);
            userService.bulkDelete(deleteList);
            return ResponseEntity.ok("{\"result\": \"Users with ids[" + userIds + "] was successfully removed\"}");
        } catch (EmptyResultDataAccessException ex) {
            return ResponseEntity.noContent().build();
        }
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateUser(@RequestBody UserDTO user) {
        log.info("Going to update user " + user.getName());
        User userEntity = mapper.map(user, User.class);
        return ResponseEntity.ok(mapper.map(userService.update(userEntity), UserDTO.class));
    }

    @PutMapping(value = "/{id}/password", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity resetPassword(@PathVariable int id, @RequestBody SecurityDTO credentials) {
        log.info("Going to update password for user " + credentials.getUser().getName());
        userService.savePassword(mapper.map(credentials, Security.class));
        return ResponseEntity.ok().build();
    }

    @PutMapping (value = "/{id}/password/check", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity checkPassword(@PathVariable int id, @RequestBody SecurityDTO credentials) {
        log.info("Going to check password for user " + credentials.getUser().getName());
        boolean isMatch = userService.checkPassword(mapper.map(credentials, Security.class));
        return isMatch ? ResponseEntity.ok().build(): ResponseEntity.notFound().build();
    }
}
