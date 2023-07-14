package beParentsApp.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import beParentsApp.entities.StandardUser;
import beParentsApp.entities.payload.StandardUserRegistrationPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.services.StandardUserService;

@RestController
@RequestMapping("/api/standardUser")
public class StandardUserController {
	@Autowired
	private StandardUserService standardUsersService;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public StandardUser saveUser(@RequestBody @Validated StandardUserRegistrationPayload body) {
		return standardUsersService.create(body);
	}

	@GetMapping("")
	public Page<StandardUser> getUsers(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return standardUsersService.findAll(page, size, sortBy);
	}

	@GetMapping("/{userId}")
	public StandardUser getUser(@PathVariable UUID userId) throws Exception {
		return standardUsersService.findById(userId);
	}

	@GetMapping("/{standardUserId}/followed")
	public ResponseEntity<Page<ProfessionalUser>> getFollowedUsers(@PathVariable UUID standardUserId,
			@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "id") String sortBy) {
		Page<ProfessionalUser> followedUsers = standardUsersService.getFollowedUsers(standardUserId, page, size,
				sortBy);
		return ResponseEntity.ok(followedUsers);
	}

	@PutMapping("/{userId}")
	public StandardUser updateUser(@PathVariable UUID userId, @RequestBody StandardUserRegistrationPayload body)
			throws Exception {
		return standardUsersService.findByIdAndUpdate(userId, body);
	}

	@DeleteMapping("/{userId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable UUID userId) throws NotFoundException {
		standardUsersService.findByIdAndDelete(userId);
	}

	@PostMapping("/{standardUserId}/follow/{professionalUserId}")
	public ResponseEntity<Void> followProfessionalUser(@PathVariable UUID standardUserId,
			@PathVariable UUID professionalUserId) {
		standardUsersService.followProfessionalUser(standardUserId, professionalUserId);
		return ResponseEntity.ok().build();
	}
}
