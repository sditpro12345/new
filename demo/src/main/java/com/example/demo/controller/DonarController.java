package com.example.demo.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Donar;
import com.example.demo.service.DonarService;



@RestController
@RequestMapping("/donars")
public class DonarController {

    @Autowired
    private DonarService donarService;

    @GetMapping("/getall")
    public List<Donar> getAllDonar() {
        return donarService.getAllDonars();
    }
       @PostMapping("/register")
    public String registerDonor(@RequestBody Donar donor) {
         if (donor.getName() == null || donor.getBloodType() == null || donor.getContactInfo() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Missing required fields");
        }
        donarService.saveDonar(donor);
         return "sucess";
    }
   
 }

