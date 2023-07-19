package beParentsApp.entities.payload;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PostPayload {
	@NotNull(message = "The date is required")
	private LocalDateTime publicationDate;

	@NotNull(message = "The content is required")
	private String content;

	@NotNull(message = "The userId is required")
	UUID userId;

	public PostPayload(LocalDateTime publicationDate, String content, UUID userId) {
		super();
		this.publicationDate = publicationDate;
		this.content = content;
		this.userId = userId;
	}
}
