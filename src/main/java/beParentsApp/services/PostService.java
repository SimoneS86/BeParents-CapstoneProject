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

import beParentsApp.entities.Post;
import beParentsApp.entities.payload.PostPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.PostRepository;
import beParentsApp.repositories.UserRepository;

@Service
public class PostService {
	@Autowired
	PostRepository postRepo;

	@Autowired
	UserRepository userRepo;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Post create(PostPayload pp) {
		Post newPost = new Post(pp.getPublicationDate(), pp.getContent(),
				userRepo.findById(pp.getUserId()).orElseThrow(() -> new NotFoundException("User not found")));
		return postRepo.save(newPost);
	}

	public Page<Post> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return postRepo.findAll(pageable);
	}

	public Post findById(UUID id) throws NotFoundException {
		return postRepo.findById(id).orElseThrow(() -> new NotFoundException("Post Notfound"));
	}

	public Post findByIdAndUpdate(UUID id, PostPayload pp) throws NotFoundException {
		Post postFound = this.findById(id);

		postFound.setId(id);
		postFound.setPublicationDate(pp.getPublicationDate());
		postFound.setContent(pp.getContent());
		postFound.setUser(userRepo.findById(pp.getUserId()).orElseThrow(() -> new NotFoundException("User not found")));

		return postRepo.save(postFound);
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		Post post = this.findById(id);

		postRepo.delete(post);
	}

}
