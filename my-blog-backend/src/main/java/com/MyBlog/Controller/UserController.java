package com.MyBlog.Controller;

import com.MyBlog.Entity.User;
import com.MyBlog.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    public UserController(UserService userService){
       this.userService = userService;
    }

    @PostMapping("/users")
    public ResponseEntity<?> saveUser(@Valid @RequestBody User user){
       userService.save(user);
       return ResponseEntity.ok("User created");
    }
}
