package beParentsApp.entities;

import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class Reminder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private LocalDate date;
	private String content;
	private boolean notificationTriggered;
	private boolean completed;
	@ManyToOne
	@JsonBackReference
	private User user;

	public Reminder(LocalDate date, String content, User user) {
		this.date = date;
		this.content = content;
		this.notificationTriggered = false;
		this.completed = false;
		this.user = user;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public void checkNotificationTrigger(LocalDate currentDate) {
		if (date.equals(currentDate)) {
			notificationTriggered = true;
			// Esegui azioni aggiuntive quando la notifica viene triggerata
			// Ad esempio, invio di notifiche all'utente.
		}
	}
}
