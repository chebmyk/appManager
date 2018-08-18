package com.appmanager.backend.services.impl.security;

public enum UserAction {
    CREATE("CREATE"),
    READ("READ"),
    UPDATE("UPDATE"),
    DELETE("DELETE");

    UserAction(String value) {
        this.value = value;
    }
    private String value;

    public String getValue() {
        return value;
    }
}

