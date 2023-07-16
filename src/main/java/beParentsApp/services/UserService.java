package beParentsApp.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import beParentsApp.entities.Post;
import beParentsApp.entities.Reminder;
import beParentsApp.entities.User;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.PostRepository;
import beParentsApp.repositories.ReminderRepository;
import beParentsApp.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository usersRepo;

	@Autowired
	private PostRepository postRepo;

	@Autowired
	private ReminderRepository reminderRepo;

	public Page<User> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return usersRepo.findAll(pageable);
	}

//	public Page<Post> findPostsByUserId(UUID userId, int page, int size, String sortBy) {
//		if (size < 0)
//			size = 0;
//		if (size > 100)
//			size = 100;
//
//		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending().and(Sort.by("lastUpdate")));
//
//		return postRepo.findByUserId(userId, pageable);
//	}

	public Page<Post> findPostsByUserId(UUID userId, int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending().and(Sort.by("lastUpdate")));

		Page<Post> resultPage = postRepo.findByUserId(userId, pageable);

		List<Post> content = new ArrayList<>(resultPage.getContent());
		content.sort(Comparator.comparing(Post::getLastUpdate).reversed());

		return new PageImpl<>(content, pageable, resultPage.getTotalElements());
	}

	public Page<Reminder> findRemindersByUserId(UUID userId, int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return reminderRepo.findByUserId(userId, pageable);
	}

	public Page<Reminder> findRemindersByUserIdAndDate(UUID userId, LocalDate date, int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		if (date != null) {
			return reminderRepo.findByUserIdAndDate(userId, date, pageable);
		} else {
			LocalDate currentDate = LocalDate.now();
			return reminderRepo.findByUserIdAndDate(userId, currentDate, pageable);
		}
	}

	public User findById(UUID id) throws NotFoundException {
		return usersRepo.findById(id).orElseThrow(() -> new NotFoundException("User Notfound"));
	}

	public User findByEmail(String email) throws NotFoundException {
		return usersRepo.findByEmail(email).orElseThrow(() -> new NotFoundException("User NotFound"));
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		User user = this.findById(id);

		usersRepo.delete(user);
	}
}
