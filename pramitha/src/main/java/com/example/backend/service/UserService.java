package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public User findUserByEmail(String email){
        return userRepo.findUserByEmail(email);
    }

}
