package com.appmanager.backend.controllers.handlers;

import com.appmanager.backend.exceptions.ErrorDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.security.access.AccessDeniedException;


@ControllerAdvice
@Slf4j
public class RestExceptionHandler {

    @ExceptionHandler(value = {EmptyResultDataAccessException.class, ResourceNotFoundException.class})
    public final ResponseEntity<ErrorDetails> notFoundException(Exception ex, WebRequest request) {
        log.error(ex.getMessage());
        ErrorDetails errorDetails = new ErrorDetails.ErrorDetailsBuilder()
                .message("Requested resource not found")
                .details(ex.getMessage())
                .path(request.getDescription(false))
                .build();
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ErrorDetails> handleAllExceptions(Exception ex, WebRequest request) {
        log.error(ex.getMessage());
        ErrorDetails errorDetails = new ErrorDetails.ErrorDetailsBuilder()
                .message("Server error")
                .details(ex.getMessage())
                .path(request.getDescription(false))
                .build();
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public final ResponseEntity<ErrorDetails> handleAccessDeniedExceptions(AccessDeniedException ex, WebRequest request) {
        log.error(ex.getMessage());
        ErrorDetails errorDetails = new ErrorDetails.ErrorDetailsBuilder()
                .message("Access Denied")
                .details(ex.getMessage())
                .path(request.getDescription(false))
                .build();
        return new ResponseEntity<>(errorDetails, HttpStatus.FORBIDDEN);
    }
}
