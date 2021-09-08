package com.example.backend.controller;

import com.example.backend.dto.ProductDTO;
import com.example.backend.model.Products;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveProduct(
            @RequestBody @Autowired ProductDTO productDTO
            ) {
        try {
            Products product = new Products();
            product.setName(productDTO.getName());
            product.setPrice(productDTO.getPrice());
            product.setQuantity(productDTO.getQuantity());
            product.setStatus(productDTO.getStatus());

            Products savedProduct = productService.saveProduct(product);

            Map<String, Object> response = new HashMap<>();
            response.put("result", savedProduct);

            return new ResponseEntity<>(response, HttpStatus.CREATED);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllProducts() {
        try {

            Map<String, Object> response = new HashMap<>();

            List<Products> productList = productService.listAllProducts();
            response.put("result", productList);

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/single")
    public ResponseEntity<Map<String, Object>> getProductById(
            @RequestParam int product_id
    ) {
        try{
            Map<String, Object> response = new HashMap<>();

            Products product = productService.findProductById(product_id);

            if(product==null) {
                response.put("result", new ArrayList<>());
            }else {
                response.put("result", product);
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
