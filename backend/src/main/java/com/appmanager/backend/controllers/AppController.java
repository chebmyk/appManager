package com.appmanager.backend.controllers;

import com.appmanager.backend.domain.dto.ApplicationWithUserDTO;
import com.appmanager.backend.domain.entities.App;
import com.appmanager.backend.services.ApplicationService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/apps")
@Slf4j
public class AppController {

    private ApplicationService applicationService;
    private ModelMapper mapper;

    @Autowired
    public AppController(ApplicationService applicationService, ModelMapper mapper) {
        this.applicationService = applicationService;
        this.mapper = mapper;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllApplications() {
        Collection<ApplicationWithUserDTO> result = applicationService.findAll()
                .stream()
                .map(app -> mapper.map(app, ApplicationWithUserDTO.class))
                .collect(Collectors.toList());
            return ResponseEntity.ok(result);
    }

    @GetMapping(value = "/pages", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllApplications(Pageable pageRequest) {
        Page<ApplicationWithUserDTO> result = applicationService.findAll(pageRequest).map(app ->mapper.map(app,ApplicationWithUserDTO.class));
        return ResponseEntity.ok(result);
    }


    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAppById(@PathVariable Integer id) {
       return ResponseEntity.ok(mapper.map(applicationService.findById(id),ApplicationWithUserDTO.class));
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addApplication(@RequestBody ApplicationWithUserDTO application) {
        App appEntity = mapper.map(application, App.class);
        return ResponseEntity.ok(mapper.map(applicationService.save(appEntity), ApplicationWithUserDTO.class) );
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteApplication(@PathVariable Integer id) {
        applicationService.delete(id);
        return ResponseEntity.ok("{\"result\": \"Application with id[" + id + "] was successfully removed\"}");
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateApplication(@RequestBody ApplicationWithUserDTO application) {
        App appEntity = mapper.map(application, App.class);
        return ResponseEntity.ok(mapper.map(applicationService.update(appEntity), ApplicationWithUserDTO.class));
    }
}
