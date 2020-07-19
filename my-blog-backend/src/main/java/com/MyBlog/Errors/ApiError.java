package com.MyBlog.Errors;

import lombok.Data;

import java.util.Date;
import java.util.Map;
@Data
public class ApiError {
    private  String message ;
    private int status ;
    private long timeStamp = new Date().getTime();
    private Map<String,String> validationErrors ;
    private String path ;
    public ApiError(String message, int status, String path){
        this.message = message;
        this.status = status;
        this.path = path;
    }
}
