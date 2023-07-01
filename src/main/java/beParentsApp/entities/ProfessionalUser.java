package beParentsApp.entities;

import java.util.List;

import beParentsApp.utils.Profession;
import beParentsApp.utils.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@Entity
@Table(name = "professionalUser")
public class ProfessionalUser extends User {
	@Enumerated(EnumType.STRING)
	private Profession profession;
	private String registrationNumber;
	private String description;
	private List<StandardUser> followers;

	public ProfessionalUser(String name, String surname, String email, String password, Profession profession,
			String registrationNumber, String description) {
		super(name, surname, email, password);
		this.profession = profession;
		this.registrationNumber = registrationNumber;
		this.description = description;
//		this.followers = new ArrayList<>();
		setRole(Role.PROFESSIONAL);
	}

//	public void followUser(StandardUser standardUser) {
//		if (!followers.contains(standardUser)) {
//			followers.add(standardUser);
//			standardUser.getFollowed().add(this);
//		}
//	}
}