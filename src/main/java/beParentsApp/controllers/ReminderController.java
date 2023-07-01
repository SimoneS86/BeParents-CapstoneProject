package beParentsApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import beParentsApp.entities.Reminder;
import beParentsApp.entities.payload.ReminderPayload;
import beParentsApp.services.ReminderService;

@RestController
@RequestMapping("/reminder")
public class ReminderController {
	@Autowired
	private ReminderService reminderService;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Reminder saveReminder(@RequestBody @Validated ReminderPayload rp) {
		return reminderService.create(rp);
	}

}
