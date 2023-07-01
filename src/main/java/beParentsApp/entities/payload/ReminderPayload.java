package beParentsApp.entities.payload;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReminderPayload {
	@NotNull(message = "The date is required")
	private LocalDate date;

	@NotNull(message = "The content is required")
	private String content;

	@NotNull(message = "The userId is required")
	UUID userId;

	public ReminderPayload(LocalDate date, String content, UUID userId) {
		super();
		this.date = date;
		this.content = content;
		this.userId = userId;
	}
}