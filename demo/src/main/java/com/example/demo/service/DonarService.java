package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Donar;
import com.example.demo.repository.DonarRepository;

@Service
public class DonarService {
   @Autowired
    private DonarRepository donarRepository;

    public List<Donar> getAllDonars() {
        return donarRepository.findAll();
    }

    public String saveDonar(Donar donar) {
      donarRepository.save(donar);
      return "String";
    }
}
