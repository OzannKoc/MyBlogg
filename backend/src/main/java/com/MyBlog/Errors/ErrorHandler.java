package com.MyBlog.Errors;

import javafx.beans.binding.IntegerBinding;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@RestController
public class ErrorHandler implements ErrorController {
    @Autowired
    private ErrorAttributes errorAttributes;
    @RequestMapping("/error")
    public ApiError errorHandler (WebRequest webRequest){
       Map<String, Object> errorAtt = errorAttributes.getErrorAttributes(webRequest,true);
       int status = (Integer)errorAtt.get("status");
       String message = (String) errorAtt.get("message");
       String  path = (String)errorAtt.get("path");
        ApiError apiError = new ApiError(message,status,path);
       if(errorAtt.containsKey("errors")){
           List<FieldError> fieldErrorList = (List<FieldError>) errorAtt.get("errors");
           Map<String ,String> validationErrors = new HashMap<>();
           for (FieldError field:fieldErrorList) {
               validationErrors.put(field.getField(),field.getDefaultMessage());


           }
           apiError.setValidationErrors(validationErrors);
       }

        return apiError;
    }
    @Override
    public String getErrorPath() {
        return "/error";
    }
}
