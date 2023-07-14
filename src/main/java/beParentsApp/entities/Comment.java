package beParentsApp.entities;

import java.time.LocalDateTime;
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

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private String content;
	private LocalDateTime publicationDate;

	@ManyToOne
//	@JsonBackReference
	private User user;

	@ManyToOne
	@JsonBackReference
	private Post post;

	public Comment(LocalDateTime publicationDate, String content, User user, Post post) {
		this.publicationDate = publicationDate;
		this.content = content;
		this.user = user;
		this.post = post;

	}
}
