package beParentsApp.services;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import beParentsApp.entities.User;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository usersRepo;

	public Page<User> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return usersRepo.findAll(pageable);
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
