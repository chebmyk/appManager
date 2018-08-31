package com.appmanager.backend.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class ALogger {

    @Pointcut("@annotation(org.springframework.web.bind.annotation.PostMapping) || @annotation(org.springframework.web.bind.annotation.PutMapping)")
    private void controllerModifyRequest(){}

    @Pointcut("(@annotation(org.springframework.web.bind.annotation.DeleteMapping))")
    private void controllerDeleteRequest(){}

    @Pointcut("execution(* com.appmanager.backend.services.impl.*.*(..))")
    private void serviceInterceptor(){}

    @Before("controllerModifyRequest()" + " && args(obj))")
    void beforeModifyLog(JoinPoint jpoint, Object obj) {
        log.info("Calling "  + jpoint.getTarget().getClass().getSimpleName() + "." + jpoint.getSignature().getName() + ": params " + obj.toString());
    }

    @Before("controllerDeleteRequest()" + " && args(id))")
    void beforeDeleteLog(JoinPoint jpoint, Integer id) {
        log.info("Calling " + jpoint.getTarget().getClass().getSimpleName() + "." + jpoint.getSignature().getName() + ": id=" + id);
    }

    @Around("serviceInterceptor()")
    public Object aroundAdvice(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        log.info("Calling " + proceedingJoinPoint.getTarget().getClass().getSimpleName() + "." + proceedingJoinPoint.getSignature().getName());
        Object[] args = proceedingJoinPoint.getArgs();
        if(args.length>0){
            log.info("Arguments passed: " );
            for (int i = 0; i < args.length; i++) {
                log.info("arg "+(i+1)+": "+args[i]);
            }
        }
        Object result = proceedingJoinPoint.proceed(args);
        log.info("Execution of " + proceedingJoinPoint.getTarget().getClass().getSimpleName() + "." + proceedingJoinPoint.getSignature().getName() + " successfully completed");
        return result;
    }

}
