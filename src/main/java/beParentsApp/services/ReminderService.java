package beParentsApp.services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

	public Page<Reminder> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return reminderRepo.findAll(pageable);
	}

	public Reminder findById(UUID id) throws NotFoundException {
		return reminderRepo.findById(id).orElseThrow(() -> new NotFoundException("Reminder Notfound"));
	}

	public Reminder findByIdAndUpdate(UUID id, ReminderPayload rp) throws NotFoundException {
		Reminder reminderFound = this.findById(id);

		reminderFound.setId(id);
		reminderFound.setDate(rp.getDate());
		reminderFound.setContent(rp.getContent());
		reminderFound
				.setUser(userRepo.findById(rp.getUserId()).orElseThrow(() -> new NotFoundException("User not found")));

		return reminderRepo.save(reminderFound);
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		Reminder reminder = this.findById(id);

		reminderRepo.delete(reminder);
	}

//	 FILTRI AGGIUNTIVI
//	public Page<Reminder> findRemindersByDate(LocalDate date, int page, int size, String sortBy) {
//		if (date != null) {
//			User user = userRepo.findById(userId).orElseThrow(() -> new NotFoundException("User not found"));
//			Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
//			return reminderRepo.findRemindersByDateAndUser(date, userId, pageable);
//		} else {
//			return Page.empty();
//		}
//	}
}
