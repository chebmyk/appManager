package com.appmanager.backend.controllers.integration;

import com.appmanager.backend.BackendApplication;
import com.appmanager.backend.domain.dto.SecurityDTO;
import com.appmanager.backend.domain.dto.UserDTO;
import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.lessThanOrEqualTo;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(
        classes = BackendApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:test_application.properties")
public class IUserControllerTest {

    private static final String USER_ENDPOINT = "/api/users";

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper mapper;

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void AllUsers() throws Exception {
        mockMvc.perform(
                get(USER_ENDPOINT)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful()).andDo(print())
                .andExpect(jsonPath("$[0].id").isNotEmpty())
                .andExpect(jsonPath("$[0].name").exists())
                .andExpect(jsonPath("$[0].email").exists())
                .andExpect(jsonPath("$[0].role").exists())
        ;
    }

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void getAllUsersByPage() throws Exception {
        int pageSize = 2;
        int page = 0;
        mockMvc.perform(
                get(USER_ENDPOINT + "/pages?page=" + page + "&size=" + pageSize)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$.content.length()", lessThanOrEqualTo(pageSize)))
        ;
    }

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void getUserById() throws Exception {
        int user_id = 1;
        mockMvc.perform(
                get(USER_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.name").exists())
                .andExpect(jsonPath("$.email").exists())
                .andExpect(jsonPath("$.role").exists())
        ;
    }

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void getUserWithApplications() throws Exception {
        int user_id = 1;
        mockMvc.perform(
                get(USER_ENDPOINT + "/" + user_id + "/applications")
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.name").exists())
                .andExpect(jsonPath("$.email").exists())
                .andExpect(jsonPath("$.role").exists())
                .andExpect(jsonPath("$.applications").exists())
        ;
    }

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void addUser() throws Exception {
        UserDTO user = new UserDTO(null, "admin22", "admin22@email.com", UserRole.ADMIN);
        SecurityDTO credentials = new SecurityDTO(user, "pwd");
        ObjectMapper mapper = new ObjectMapper();
        mockMvc.perform(
                post(USER_ENDPOINT)
                        .content(mapper.writeValueAsString(credentials))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.name").value(user.getName()))
                .andExpect(jsonPath("$.email").value(user.getEmail()))
                .andExpect(jsonPath("$.role").value(user.getRole().toString()));

    }

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void deleteUser() throws Exception {
        int user_id = 2;
        mockMvc.perform(
                delete(USER_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
    }

    @Test
    @WithMockUser(value = "admin@email.com", roles = "ADMIN")
    public void updateUser() throws Exception {
        User user = userService.findById(2);
        UserDTO userDto = mapper.map(user, UserDTO.class);
        userDto.setName("user_updted");
        ObjectMapper mapper = new ObjectMapper();
        mockMvc.perform(
                put(USER_ENDPOINT)
                        .content(mapper.writeValueAsString(userDto))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(userDto.getId()))
                .andExpect(jsonPath("$.name").value(userDto.getName()))
                .andExpect(jsonPath("$.email").value(userDto.getEmail()))
                .andExpect(jsonPath("$.role").value(userDto.getRole().toString()));

    }

}