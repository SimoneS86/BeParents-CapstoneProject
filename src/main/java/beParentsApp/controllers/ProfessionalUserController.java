package beParentsApp.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import beParentsApp.entities.ProfessionalUser;
import beParentsApp.entities.payload.ProfessionalUserRegistrationPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.services.ProfessionalUserService;

@RestController
@RequestMapping("/professionalUsers")
public class ProfessionalUserController {
	@Autowired
	private ProfessionalUserService professionalUsersService;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public ProfessionalUser saveUser(@RequestBody @Validated ProfessionalUserRegistrationPayload body) {
		return professionalUsersService.create(body);
	}

	@GetMapping("")
	public Page<ProfessionalUser> getUsers(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return professionalUsersService.findAll(page, size, sortBy);
	}

	@GetMapping("/{userId}")
	public ProfessionalUser getUser(@PathVariable UUID userId) throws Exception {
		return professionalUsersService.findById(userId);
	}

	@PutMapping("/{userId}")
	public ProfessionalUser updateUser(@PathVariable UUID userId, @RequestBody ProfessionalUserRegistrationPayload body)
			throws Exception {
		return professionalUsersService.findByIdAndUpdate(userId, body);
	}

	@DeleteMapping("/{userId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable UUID userId) throws NotFoundException {
		professionalUsersService.findByIdAndDelete(userId);
	}
}