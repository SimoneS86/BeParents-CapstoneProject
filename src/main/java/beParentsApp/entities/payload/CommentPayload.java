package beParentsApp.entities.payload;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CommentPayload {
	@NotNull(message = "The date is required")
	private LocalDateTime publicationDate;

	@NotNull(message = "The content is required")
	private String content;

	@NotNull(message = "The userId is required")
	UUID userId;

	@NotNull(message = "The postId is required")
	UUID postId;

	public CommentPayload(LocalDateTime publicationDate, String content, UUID userId, UUID postId) {
		super();
		this.publicationDate = publicationDate;
		this.content = content;
		this.userId = userId;
		this.postId = postId;
	}
}
