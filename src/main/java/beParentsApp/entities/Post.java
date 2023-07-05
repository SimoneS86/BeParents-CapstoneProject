package beParentsApp.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private String content;
	private LocalDateTime publicationDate;
	private LocalDateTime lastUpdate;
	@ManyToOne
	private User user;
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<Comment> comments;

	public Post(LocalDateTime publicationDate, String content, User user) {
		this.publicationDate = publicationDate;
		this.lastUpdate = LocalDateTime.now();
		this.content = content;
		this.comments = new ArrayList<>();
		this.user = user;
	}

//	public void addUserComment(LocalDateTime publicationDate, String content, User user) {
//		Comment comment = new Comment(publicationDate, content, user, this);
//		comments.add(comment);
//	}
}
