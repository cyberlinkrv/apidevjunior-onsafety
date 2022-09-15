package com.djssoftware.apidevjunior.resources;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.djssoftware.apidevjunior.entities.Pessoa;

@RestController
@RequestMapping(value = "/pessoas")
public class PessoaResource {

	@GetMapping
	public ResponseEntity<List<Pessoa>> listar() {

		List<Pessoa> list = new ArrayList<>();

		list.add(new Pessoa(1L, "Divino Joaquim", "96686405191", LocalDate.parse("1981-02-05"), "divino@teste.com.br"));
		list.add(new Pessoa(1L, "Joaquim Andrade", "96686405221", LocalDate.parse("2022-08-05"),
				"joaquim@teste.com.br"));

		return ResponseEntity.ok().body(list);
	}

}
