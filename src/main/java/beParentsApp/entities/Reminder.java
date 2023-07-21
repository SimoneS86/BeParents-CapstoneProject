package beParentsApp.entities;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "reminders")
public class Reminder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private LocalDate date;
	private String content;
	private boolean completed;
	@ManyToOne
	private User user;

	public Reminder(LocalDate date, String content, User user) {
		this.date = date;
		this.content = content;
		this.completed = false;
		this.user = user;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

}
