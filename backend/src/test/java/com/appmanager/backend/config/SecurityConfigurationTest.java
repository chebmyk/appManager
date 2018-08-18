package com.appmanager.backend.config;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.Assert.*;

public class SecurityConfigurationTest {

    @Test
    public void getBCryptPasswordEncoder() {
        String pwd = "ops";
        BCryptPasswordEncoder bce = new BCryptPasswordEncoder();
        String crypt = bce.encode(pwd);
        System.out.println(crypt);
        assertTrue(bce.matches(pwd,crypt));
    }
}