package com.appmanager.backend.services;

public interface MailService {

    void send(String to, String subject, String template);
}
