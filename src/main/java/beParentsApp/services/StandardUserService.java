package beParentsApp.services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import beParentsApp.entities.ProfessionalUser;
import beParentsApp.entities.StandardUser;
import beParentsApp.entities.payload.StandardUserRegistrationPayload;
import beParentsApp.exceptions.BadRequestException;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.ProfessionalUserRepository;
import beParentsApp.repositories.StandardUserRepository;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StandardUserService {

	@Autowired
	StandardUserRepository standardUserRepo;

	@Autowired
	ProfessionalUserRepository professionalUserRepo;

	@Autowired
	private PasswordEncoder bcrypt;

	public StandardUser create(StandardUserRegistrationPayload surp) {
		standardUserRepo.findByEmail(surp.getEmail()).ifPresent(standardUser -> {
			throw new BadRequestException("Email " + standardUser.getEmail() + " already exist!");
		});
		StandardUser newStandardUser = new StandardUser(surp.getName(), surp.getSurname(), surp.getEmail(),
				surp.getPassword());
		return standardUserRepo.save(newStandardUser);
	}

	public Page<StandardUser> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return standardUserRepo.findAll(pageable);
	}

	public Page<ProfessionalUser> getFollowedUsers(UUID standardUserId, int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		StandardUser standardUser = standardUserRepo.findById(standardUserId)
				.orElseThrow(() -> new NotFoundException("StandardUser not found"));

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return professionalUserRepo.findByFollowers(standardUser, pageable);
	}

	public StandardUser findById(UUID id) throws NotFoundException {
		return standardUserRepo.findById(id).orElseThrow(() -> new NotFoundException("standardUserNotfound"));
	}

	public StandardUser findByEmail(String email) throws NotFoundException {
		return standardUserRepo.findByEmail(email).orElseThrow(() -> new NotFoundException("Email non trovata"));
	}

	public StandardUser findByIdAndUpdate(UUID id, StandardUserRegistrationPayload surp) throws NotFoundException {

		surp.setPassword(bcrypt.encode(surp.getPassword()));
		StandardUser standardUserFound = this.findById(id);

		standardUserFound.setId(id);
		standardUserFound.setName(surp.getName());
		standardUserFound.setSurname(surp.getSurname());
		standardUserFound.setEmail(surp.getEmail());
		standardUserFound.setPassword(surp.getPassword());

		return standardUserRepo.save(standardUserFound);
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		StandardUser standardUser = this.findById(id);

		standardUserRepo.delete(standardUser);
	}

	@Transactional
	public ProfessionalUser followProfessionalUser(UUID standardUserId, UUID professionalUserId) {
		StandardUser standardUser = standardUserRepo.findById(standardUserId)
				.orElseThrow(() -> new NotFoundException("StandardUser not found"));

		ProfessionalUser professionalUser = professionalUserRepo.findById(professionalUserId)
				.orElseThrow(() -> new NotFoundException("ProfessionalUser not found"));
		// Verifica se l'utente standard sta già seguendo il professionista
		if (!standardUser.getFollowed().contains(professionalUser)) {
			standardUser.getFollowed().add(professionalUser);
			professionalUser.getFollowers().add(standardUser);
		}

		standardUserRepo.save(standardUser);
		return professionalUserRepo.save(professionalUser);
	}

	@Transactional
	public void unFollowProfessionalUser(UUID standardUserId, UUID professionalUserId) {
		StandardUser standardUser = standardUserRepo.findById(standardUserId)
				.orElseThrow(() -> new NotFoundException("StandardUser not found"));

		ProfessionalUser professionalUser = professionalUserRepo.findById(professionalUserId)
				.orElseThrow(() -> new NotFoundException("ProfessionalUser not found"));
		// Verifica se l'utente standard sta già seguendo il professionista
		if (standardUser.getFollowed().contains(professionalUser)) {
			standardUser.getFollowed().remove(professionalUser);
			professionalUser.getFollowers().remove(standardUser);
		}

		standardUserRepo.save(standardUser);
		professionalUserRepo.save(professionalUser);
	}
}