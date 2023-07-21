package beParentsApp.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
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

import beParentsApp.entities.Comment;
import beParentsApp.entities.payload.CommentPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.services.CommentService;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
	@Autowired
	private CommentService commentService;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Comment saveComment(@RequestBody @Validated CommentPayload cp) {
		return commentService.create(cp);
	}

	@GetMapping("")
	public Page<Comment> getComments(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return commentService.findAll(page, size, sortBy);
	}

	@GetMapping("/{commentId}")
	public Comment getComment(@PathVariable UUID commentId) throws Exception {
		return commentService.findById(commentId);
	}

	@PutMapping("/{commentId}")
	public Comment updateComment(@PathVariable UUID commentId, @RequestBody CommentPayload cp) throws Exception {
		return commentService.findByIdAndUpdate(commentId, cp);
	}

	@DeleteMapping("/{commentId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteComment(@PathVariable UUID commentId) throws NotFoundException {
		commentService.findByIdAndDelete(commentId);
	}

}
