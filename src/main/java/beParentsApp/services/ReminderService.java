package beParentsApp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import beParentsApp.entities.Reminder;
import beParentsApp.entities.payload.ReminderPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.ReminderRepository;
import beParentsApp.repositories.UserRepository;

@Service
public class ReminderService {
	@Autowired
	ReminderRepository reminderRepo;

	@Autowired
	UserRepository userRepo;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Reminder create(ReminderPayload rp) {
		Reminder newReminder = new Reminder(rp.getDate(), rp.getContent(),
				userRepo.findById(rp.getUserId()).orElseThrow(() -> new NotFoundException("User not found")));
		return reminderRepo.save(newReminder);
	}

//	@GetMapping("/{userId}")
//	public ProfessionalUser getUser(@PathVariable UUID userId) throws Exception {
//		return professionalUsersService.findById(userId);
//	}
//	
//	@GetMapping("")
//	public Page<ProfessionalUser> getUsers(@RequestParam(defaultValue = "0") int page,
//			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
//		return professionalUsersService.findAll(page, size, sortBy);
//	}
}
