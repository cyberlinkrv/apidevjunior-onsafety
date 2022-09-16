package com.djssoftware.apidevjunior.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.djssoftware.apidevjunior.dto.PessoaDTO;
import com.djssoftware.apidevjunior.entities.Pessoa;
import com.djssoftware.apidevjunior.repositories.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository reposotory;

	@Transactional(readOnly = true)
	public List<PessoaDTO> listar() {
		List<Pessoa> list = reposotory.findAll();
		return list.stream().map(x -> new PessoaDTO(x)).collect(Collectors.toList());

	}

	@Transactional(readOnly = true)
	public PessoaDTO localizar(Long id) {
		Optional<Pessoa> obj = reposotory.findById(id);
		Pessoa entity = obj.get();
		return new PessoaDTO(entity);

	}

	@Transactional
	public PessoaDTO inserir(PessoaDTO dto) {
		Pessoa entity = new Pessoa();

		entity.setNome(dto.getNome());
		entity.setCpf(dto.getCpf());
		entity.setDataNascimento(dto.getDataNascimento());
		entity.setEmail(dto.getEmail());

		entity = reposotory.save(entity);

		return new PessoaDTO(entity);

	}

	@Transactional
	public PessoaDTO alterar(Long id, PessoaDTO dto) {
		try {

			Pessoa entity = reposotory.getReferenceById(id);

			entity.setNome(dto.getNome());
			entity.setCpf(dto.getCpf());
			entity.setDataNascimento(dto.getDataNascimento());
			entity.setEmail(dto.getEmail());

			entity = reposotory.save(entity);

			return new PessoaDTO(entity);
		} catch (EntityNotFoundException e) {
			
		}
		return null;
	}

	public void excluir(Long id) {
		try {
			reposotory.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw e;
		} catch (DataIntegrityViolationException e) {
			throw e;
		}

	}


}
