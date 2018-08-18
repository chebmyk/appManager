package com.appmanager.backend.controllers;

import com.appmanager.backend.domain.dto.SecurityDTO;
import com.appmanager.backend.domain.entities.Security;
import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.domain.dto.UserDTO;
import com.appmanager.backend.services.UserService;
import com.appmanager.backend.services.impl.security.AuthServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
public class UserControllerTest {

    private static final String USER_ENDPOINT = "/api/users";

    @Mock
    private UserService userService;

    @Spy
    private ModelMapper mapper;

    @InjectMocks
    private UserController userController;

    private MockMvc mockMvc;

    private  User user;
    private  UserDTO userDto;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(userController)
                .setCustomArgumentResolvers(new PageableHandlerMethodArgumentResolver())
                .build();

        user = new User();
        user.setId(1);
        user.setName("admin");
        user.setEmail("admin@email.com");
        user.setRole(UserRole.ADMIN);

        userDto = mapper.map(user, UserDTO.class);
    }

    @Test
    public void when_getAllUsers_then_statusOK() throws Exception {
        when(userService.findAll()).thenReturn(Collections.singletonList(user));
        mockMvc.perform(
                get(USER_ENDPOINT)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
        verify(userService, times(1)).findAll();
    }

    @Test
    public void when_Users_byPage_Then_statusOK() throws Exception {
        int page = 0;
        int size = 1;
        Page<User> result = new PageImpl<>(Collections.singletonList(user));
        when(userService.findAll(any(Pageable.class))).thenReturn(result);
        mockMvc.perform(
                get(USER_ENDPOINT + "/pages?page=" + page + "&size=" + size)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
        verify(userService, times(1)).findAll(PageRequest.of(page, size));
    }

    @Test
    public void when_UserById_Then_statusOK() throws Exception {
        int user_id = 1;
        when(userService.findById(any(Integer.class))).thenReturn(user);
        mockMvc.perform(
                get(USER_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(userService, times(1)).findById(user_id);
    }

    @Test
    public void when_UserById_Then_NotFound() throws Exception {
        when(userService.findById(any(Integer.class))).thenThrow(ResourceNotFoundException.class);
        int user_id = 1;
        mockMvc.perform(
                get(USER_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isNotFound());
        verify(userService, times(1)).findById(user_id);
    }

    @Test
    public void when_UserWithApplications_then_statusOK() throws Exception {
        int user_id = 1;
        when(userService.findById(any(Integer.class))).thenReturn(user);
        mockMvc.perform(
                get(USER_ENDPOINT + "/" + user_id + "/applications")
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(userService, times(1)).findById(user_id);
    }

    @Test
    public void addUser_isOK() throws Exception {
        Security credentials = new Security();
        credentials.setUser(user);
        credentials.setPassword("pwd");
        SecurityDTO credentialsDto = mapper.map(credentials, SecurityDTO.class);
        when(userService.save(any(Security.class))).thenReturn(user);
        ObjectMapper objectMapper = new ObjectMapper();
        mockMvc.perform(
                post(USER_ENDPOINT)
                        .content(objectMapper.writeValueAsString(credentialsDto))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(userService, times(1)).save(any(Security.class));
    }

    @Test
    public void deleteUser_isOK() throws Exception {
        int user_id =1;
        mockMvc.perform(
                delete(USER_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(userService, times(1)).delete(user_id);
    }

    @Test
    public void updateUser_isOK() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        when(userService.update(any(User.class))).thenReturn(user);
        mockMvc.perform(
                put(USER_ENDPOINT)
                        .content(objectMapper.writeValueAsString(userDto))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(userService, times(1)).update(any(User.class));
    }
}