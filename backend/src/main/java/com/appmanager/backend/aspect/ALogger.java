package com.appmanager.backend.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class ALogger {

    @Before("(@annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping))" +
            "&& args(obj))")
    void beforeModifyLog(JoinPoint jpoint, Object obj) {
        log.info("Calling "  + jpoint.getTarget().getClass().getSimpleName() + "." + jpoint.getSignature().getName() + ": params " + obj.toString());
    }

    @Before("(@annotation(org.springframework.web.bind.annotation.DeleteMapping))" +
            "&& args(id))")
    void beforeDeleteLog(JoinPoint jpoint, Integer id) {
        log.info("Calling " + jpoint.getTarget().getClass().getSimpleName() + "." + jpoint.getSignature().getName() + ": id=" + id);
    }
}
