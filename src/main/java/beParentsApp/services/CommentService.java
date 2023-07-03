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

import beParentsApp.entities.Comment;
import beParentsApp.entities.payload.CommentPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.repositories.CommentRepository;
import beParentsApp.repositories.PostRepository;
import beParentsApp.repositories.UserRepository;

@Service
public class CommentService {
	@Autowired
	CommentRepository commentRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	PostRepository postRepo;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Comment create(CommentPayload cp) {
		Comment newComment = new Comment(cp.getPublicationDate(), cp.getContent(),
				userRepo.findById(cp.getUserId()).orElseThrow(() -> new NotFoundException("User not found")),
				postRepo.findById(cp.getPostId()).orElseThrow(() -> new NotFoundException("Post not found")));
		return commentRepo.save(newComment);
	}

	public Page<Comment> findAll(int page, int size, String sortBy) {
		if (size < 0)
			size = 0;
		if (size > 100)
			size = 100;

		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return commentRepo.findAll(pageable);
	}

	public Comment findById(UUID id) throws NotFoundException {
		return commentRepo.findById(id).orElseThrow(() -> new NotFoundException("Comment Notfound"));
	}

	public Comment findByIdAndUpdate(UUID id, CommentPayload cp) throws NotFoundException {
		Comment commentFound = this.findById(id);

		commentFound.setId(id);
		commentFound.setPublicationDate(cp.getPublicationDate());
		commentFound.setContent(cp.getContent());
		commentFound
				.setUser(userRepo.findById(cp.getUserId()).orElseThrow(() -> new NotFoundException("User not found")));
		commentFound
				.setPost(postRepo.findById(cp.getPostId()).orElseThrow(() -> new NotFoundException("Post not found")));
		return commentRepo.save(commentFound);
	}

	public void findByIdAndDelete(UUID id) throws NotFoundException {
		Comment comment = this.findById(id);

		commentRepo.delete(comment);
	}

}
