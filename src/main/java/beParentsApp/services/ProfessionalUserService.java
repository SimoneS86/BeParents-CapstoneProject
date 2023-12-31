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
import beParentsApp.entities.payload.ProfessionalUserRegistrationPayload;
import beParentsApp.exceptions.BadRequestException;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.ProfessionalUserRepository;
import beParentsApp.repositories.StandardUserRepository;

@Service
public class ProfessionalUserService {

	@Autowired
	ProfessionalUserRepository professionalUserRepo;

	@Autowired
	StandardUserRepository standardUserRepo;

	@Autowired
	private PasswordEncoder bcrypt;

	public ProfessionalUser create(ProfessionalUserRegistrationPayload purp) {
		professionalUserRepo.findByEmail(purp.getEmail()).ifPresent(professionalUser -> {
			throw new BadRequestException("Email " + professionalUser.getEmail() + " already exist!");
		});
		ProfessionalUser newProfessionalUser = new ProfessionalUser(purp.getName(), purp.getSurname(), purp.getEmail(),
				purp.getPassword(), purp.getProfession(), purp.getRegistrationNumber(), purp.getDescription());
		return professionalUserRepo.save(newProfessionalUser);
	}

	public Page<ProfessionalUser> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return professionalUserRepo.findAll(pageable);
	}

	public Page<StandardUser> getFollowersUsers(UUID professionalUserId, int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		ProfessionalUser professionalUser = professionalUserRepo.findById(professionalUserId)
				.orElseThrow(() -> new NotFoundException("ProfessionalUser not found"));

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return standardUserRepo.findByFollowed(professionalUser, pageable);
	}

	public ProfessionalUser findById(UUID id) throws NotFoundException {
		return professionalUserRepo.findById(id).orElseThrow(() -> new NotFoundException("professionalUserNotfound"));
	}

	public ProfessionalUser findByEmail(String email) throws NotFoundException {
		return professionalUserRepo.findByEmail(email).orElseThrow(() -> new NotFoundException("Email NotFound"));
	}

	public ProfessionalUser findByIdAndUpdate(UUID id, ProfessionalUserRegistrationPayload purp)
			throws NotFoundException {
		professionalUserRepo.findByEmail(purp.getEmail()).ifPresent(professionalUser -> {
			throw new BadRequestException("Email " + professionalUser.getEmail() + " already exist!");
		});

		purp.setPassword(bcrypt.encode(purp.getPassword()));
		ProfessionalUser professionalUserFound = this.findById(id);

		professionalUserFound.setId(id);
		professionalUserFound.setName(purp.getName());
		professionalUserFound.setSurname(purp.getSurname());
		professionalUserFound.setEmail(purp.getEmail());
		professionalUserFound.setPassword(purp.getPassword());
		professionalUserFound.setProfession(purp.getProfession());
		professionalUserFound.setRegistrationNumber(purp.getRegistrationNumber());
		professionalUserFound.setDescription(purp.getDescription());

		return professionalUserRepo.save(professionalUserFound);
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		ProfessionalUser professionalUser = this.findById(id);

		professionalUserRepo.delete(professionalUser);
	}

	@Transactional
	public void unFollowStandardUser(UUID standardUserId, UUID professionalUserId) {
		ProfessionalUser professionalUser = professionalUserRepo.findById(professionalUserId)
				.orElseThrow(() -> new NotFoundException("ProfessionalUser not found"));
		StandardUser standardUser = standardUserRepo.findById(standardUserId)
				.orElseThrow(() -> new NotFoundException("StandardUser not found"));

		// Verifica se l'utente standard sta già seguendo il professionista
		if (professionalUser.getFollowers().contains(standardUser)) {
			professionalUser.getFollowers().remove(standardUser);
			standardUser.getFollowed().remove(professionalUser);
		}

		standardUserRepo.save(standardUser);
		professionalUserRepo.save(professionalUser);
	}

}