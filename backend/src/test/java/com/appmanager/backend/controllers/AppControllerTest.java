package com.appmanager.backend.controllers;

import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.domain.entities.AppType;
import com.appmanager.backend.domain.entities.User;
import com.appmanager.backend.domain.entities.UserRole;
import com.appmanager.backend.domain.dto.ApplicationWithUserDTO;
import com.appmanager.backend.domain.dto.UserDTO;
import com.appmanager.backend.services.ApplicationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.modelmapper.ModelMapper;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
public class AppControllerTest {

    private static final String APPLICATION_ENDPOINT = "/api/apps";

    @Mock
    private ApplicationService applicationService;

    @Spy
    private ModelMapper mapper;

    @InjectMocks
    private AppController appController;

    private MockMvc mockMvc;

    private App application;
    private ApplicationWithUserDTO appDto;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(appController)
                .setCustomArgumentResolvers(new PageableHandlerMethodArgumentResolver())
                .build();

        User user = new User();
        user.setId(1);
        user.setName("admin");
        user.setEmail("admin@email.com");
        user.setRole(UserRole.ADMIN);

        application = new App();
        application.setId(1);
        application.setName("app_name");
        application.setType(AppType.IOS);
        application.setContentTypes(Collections.emptySet());
        application.setUser(user);

        appDto = mapper.map(application, ApplicationWithUserDTO.class);
    }

    @Test
    public void when_AllApplications_then_OK() throws Exception {
        when(applicationService.findAll()).thenReturn(Collections.singletonList(application));
        mockMvc.perform(
                get(APPLICATION_ENDPOINT)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
        verify(applicationService, times(1)).findAll();
    }

    @Test
    public void when_Apps_byPage_Then_statusOK() throws Exception {
        int page = 0;
        int size = 2;
        Page<App> result = new PageImpl<>(Collections.singletonList(application));
        when(applicationService.findAll(any(Pageable.class))).thenReturn(result);
        mockMvc.perform(
                get(APPLICATION_ENDPOINT + "/pages?page=" + page + "&size=" + size)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
        verify(applicationService, times(1)).findAll(PageRequest.of(page, size));
    }

    @Test
    public void when_AppById_then_OK() throws Exception {
        int app_id = 1;
        when(applicationService.findById(any(Integer.class))).thenReturn(application);
        mockMvc.perform(
                get(APPLICATION_ENDPOINT + "/" + app_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().is2xxSuccessful());
        verify(applicationService, times(1)).findById(app_id);
    }

    @Test
    public void when_AppById_Then_NotFound() throws Exception {
        when(applicationService.findById(any(Integer.class))).thenThrow(ResourceNotFoundException.class);
        int user_id = 1;
        mockMvc.perform(
                get(APPLICATION_ENDPOINT + "/" + user_id)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isNotFound());
        verify(applicationService, times(1)).findById(user_id);
    }

    @Test
    public void addApplication_isOK() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        when(applicationService.save(any(App.class))).thenReturn(application);
        mockMvc.perform(
                post(APPLICATION_ENDPOINT)
                        .content(objectMapper.writeValueAsString(appDto))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(applicationService, times(1)).save(any(App.class));
    }

    @Test
    public void deleteApplication_isOK() throws Exception {
        int app_id = 1;
        mockMvc.perform(
                delete(APPLICATION_ENDPOINT + "/" + app_id)
        ).andExpect(status().isOk());
        verify(applicationService, times(1)).delete(app_id);
    }

    @Test
    public void updateApplication_isOK() throws Exception {
        ObjectMapper objectMapper= new ObjectMapper();
        when(applicationService.update(any(App.class))).thenReturn(application);
        mockMvc.perform(
                put(APPLICATION_ENDPOINT)
                        .content(objectMapper.writeValueAsString(appDto))
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk());
        verify(applicationService, times(1)).update(any(App.class));
    }

}