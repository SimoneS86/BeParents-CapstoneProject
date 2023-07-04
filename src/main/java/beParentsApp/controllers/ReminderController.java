package beParentsApp.controllers;

import java.time.LocalDate;
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

import beParentsApp.entities.Reminder;
import beParentsApp.entities.payload.ReminderPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.services.ReminderService;

@RestController
@RequestMapping("/api/reminder")
public class ReminderController {
	@Autowired
	private ReminderService reminderService;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Reminder saveReminder(@RequestBody @Validated ReminderPayload rp) {
		return reminderService.create(rp);
	}

	@GetMapping("")
	public Page<Reminder> getReminders(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return reminderService.findAll(page, size, sortBy);
	}

	@GetMapping("/{reminderId}")
	public Reminder getReminder(@PathVariable UUID reminderId) throws Exception {
		return reminderService.findById(reminderId);
	}

	@PutMapping("/{reminderId}")
	public Reminder updateReminder(@PathVariable UUID reminderId, @RequestBody ReminderPayload body) throws Exception {
		return reminderService.findByIdAndUpdate(reminderId, body);
	}

	@DeleteMapping("/{reminderId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteReminder(@PathVariable UUID reminderId) throws NotFoundException {
		reminderService.findByIdAndDelete(reminderId);
	}

	@GetMapping("/findby/date-{date}")
	public ResponseEntity<Page<Reminder>> getRemindersByDate(@PathVariable LocalDate date) {

		Page<Reminder> reminders = reminderService.findRemindersByDate(date, 0, 20, "id");
		return ResponseEntity.ok(reminders);
	}

}
