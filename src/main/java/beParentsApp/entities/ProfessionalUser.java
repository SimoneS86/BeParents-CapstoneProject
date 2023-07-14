package beParentsApp.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import beParentsApp.utils.Profession;
import beParentsApp.utils.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToMany;
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
	@ManyToMany
	@JsonIgnore
	private List<StandardUser> followers = new ArrayList<>();;

	public ProfessionalUser(String name, String surname, String email, String password, Profession profession,
			String registrationNumber, String description) {
		super(name, surname, email, password);
		this.profession = profession;
		this.registrationNumber = registrationNumber;
		this.description = description;
		setRole(Role.PROFESSIONAL);
	}
}