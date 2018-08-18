package com.appmanager.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;

@RestController
public class StaticController {
    @GetMapping({
            "/users/**",
            "/apps/**",
            "/login/**"
    })
    public void performRedirect(HttpServletResponse resp) throws IOException {
        resp.sendRedirect("/");
    }

    @GetMapping("api/auth")
    public Principal auth(Principal user) {
        return user;
    }
}
