package com.MyBlog.Service;

import com.MyBlog.Entity.User;
import com.MyBlog.Repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public void save (User user){
        userRepository.save(user);
    }
}
