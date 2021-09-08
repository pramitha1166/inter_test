package com.example.backend.service;

import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.model.Products;
import com.example.backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public Products saveProduct(Products product) {
        return productRepo.save(product);
    }

    public Products findProductById(int id) {
        return productRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not found"));
    }

    public List<Products> listAllProducts() {
        return productRepo.findAll();
    }

}
