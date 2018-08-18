package com.appmanager.backend.controllers.integration;


import com.appmanager.backend.BackendApplication;
import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.domain.entities.AppType;
import com.appmanager.backend.domain.entities.ContentType;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.domain.dto.ApplicationDTO;
import com.appmanager.backend.domain.dto.ApplicationWithUserDTO;
import com.appmanager.backend.domain.dto.UserDTO;
import com.appmanager.backend.services.ApplicationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
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

import java.util.Collections;

import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.lessThanOrEqualTo;
import static org.hamcrest.core.Is.is;
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
public class IAppControllerTest {

    private static final String APPLICATION_ENDPOINT = "/api/apps";

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private ModelMapper mapper;

    private UserDTO userPublisher;

    @Before
    public void setUp() throws Exception {
        userPublisher = new UserDTO(1, "user", "user@email.com", UserRole.PUBLISHER);
    }

    @Test
    @WithMockUser(value = "user@email.com", roles = "PUBLISHER")
    public void AllApplications() throws Exception {
        mockMvc.perform(
                get(APPLICATION_ENDPOINT)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful()).andDo(print())
                .andExpect(jsonPath("$[0].id").isNotEmpty())
                .andExpect(jsonPath("$[0].name").exists())
                .andExpect(jsonPath("$[0].type").exists())
                .andExpect(jsonPath("$[0].contentTypes").exists())
        ;
    }

    @Test
    @WithMockUser(value = "user@email.com", roles = "PUBLISHER")
    public void getAllApplicationsByPage() throws Exception {
        int pageSize = 2;
        int page = 0;
        mockMvc.perform(
                get(APPLICATION_ENDPOINT + "/pages?page=" + page + "&size=" + pageSize)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$.content.length()", lessThanOrEqualTo(pageSize)))
        ;
    }

    @Test
    @WithMockUser(value = "user@email.com", roles = "PUBLISHER")
    public void getApplicationById() throws Exception {
        int user_id = 1;
        mockMvc.perform(
                get(APPLICATION_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.name").exists())
                .andExpect(jsonPath("$.type").exists())
                .andExpect(jsonPath("$.contentTypes").exists())
        ;
    }


    @Test
    @WithMockUser(value = "user@email.com", roles = "PUBLISHER")
    public void addApplication() throws Exception {

        ApplicationWithUserDTO app = new ApplicationWithUserDTO(null, "app_name", AppType.IOS, Collections.singleton(ContentType.IMAGE), userPublisher);
        ObjectMapper mapper = new ObjectMapper();
        mockMvc.perform(
                post(APPLICATION_ENDPOINT)
                        .content(mapper.writeValueAsString(app))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.name").value(app.getName()))
                .andExpect(jsonPath("$.type").value(app.getType().toString()))
                .andExpect(jsonPath("$.contentTypes[0]", is(ContentType.IMAGE.toString())));

    }

    @Test
    @WithMockUser(value = "user@email.com", roles = "PUBLISHER")
    public void deleteApplication() throws Exception {
        int app_id = 2;
        mockMvc.perform(
                delete(APPLICATION_ENDPOINT + "/" + app_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
    }

    @Test
    @WithMockUser(value = "user@email.com", roles = "PUBLISHER")
    public void updateApplication() throws Exception {
        ApplicationWithUserDTO app = mapper.map(applicationService.findById(1),ApplicationWithUserDTO.class);
        app.setName("name updated");
        app.getContentTypes().add(ContentType.VIDEO);
        ObjectMapper jmapper = new ObjectMapper();
        mockMvc.perform(
                put(APPLICATION_ENDPOINT)
                        .content(jmapper.writeValueAsString(app))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(app.getId()))
                .andExpect(jsonPath("$.name").value(app.getName()))
                .andExpect(jsonPath("$.type").value(app.getType().toString()))
                .andExpect(jsonPath("$.contentTypes",
                        contains(
                                app.getContentTypes().stream().map(Enum::toString).distinct().toArray()
                        )
                        )
                );
    }
}
