package beParentsApp.controllers;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import beParentsApp.entities.Post;
import beParentsApp.entities.Reminder;
import beParentsApp.entities.User;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.services.UserService;

@RestController
@RequestMapping("/api/user")
@PreAuthorize("hasAuthority('ADMIN') or hasAuthority('STANDARD') or hasAuthority('PROFESSIONAL')")
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("")
	public Page<User> getUsers(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "id") String sortBy) {
		return userService.findAll(page, size, sortBy);
	}

	@GetMapping("/{userId}")
	public User getUser(@PathVariable UUID userId) throws Exception {
		return userService.findById(userId);
	}

	@GetMapping("/{userId}/posts")
	public Page<Post> getPostsByUser(@PathVariable UUID userId, @RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return userService.findPostsByUserId(userId, page, size, sortBy);
	}

	@GetMapping("/{userId}/reminders")
	public Page<Reminder> getRemindersByUser(@PathVariable UUID userId, @RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return userService.findRemindersByUserId(userId, page, size, sortBy);
	}

	@GetMapping("/{userId}/remindersByDate/")
	public Page<Reminder> getRemindersByUserAndDate(@PathVariable UUID userId,
			@RequestParam(required = false) LocalDate date, @RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		if (date == null) {
			// Se la data non viene passata, utilizza la LocalDate.now().
			date = LocalDate.now();
		}
		return userService.findRemindersByUserIdAndDate(userId, date, page, size, sortBy);
	}

	@DeleteMapping("/{userId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable UUID userId) throws NotFoundException {
		userService.findByIdAndDelete(userId);
	}

}
