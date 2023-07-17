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

import beParentsApp.entities.Post;
import beParentsApp.entities.payload.PostPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.services.PostService;

@RestController
@RequestMapping("/api/post")
public class PostController {
	@Autowired
	private PostService postService;

	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Post savePost(@RequestBody @Validated PostPayload pp) {
		return postService.create(pp);
	}

	@GetMapping("")
	public Page<Post> getPosts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "40") int size,
			@RequestParam(defaultValue = "id") String sortBy) {
		return postService.findAll(page, size, sortBy);
	}

	@GetMapping("/professionalUser")
	public Page<Post> getByProfessionalUser(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "id") String sortBy) {
		return postService.findByProfessionalUser(page, size, sortBy);
	}

	@GetMapping("/{postId}")
	public Post getPost(@PathVariable UUID postId) throws Exception {
		return postService.findById(postId);
	}

	@PutMapping("/{postId}")
	public Post updatePost(@PathVariable UUID postId, @RequestBody PostPayload pp) throws Exception {
		return postService.findByIdAndUpdate(postId, pp);
	}

	@DeleteMapping("/{postId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletePost(@PathVariable UUID postId) throws NotFoundException {
		postService.findByIdAndDelete(postId);
	}

}
