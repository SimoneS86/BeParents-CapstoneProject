package beParentsApp.entities;

import java.util.List;

import beParentsApp.utils.Role;
import jakarta.persistence.Entity;
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
@Table(name = "standardUser")
public class StandardUser extends User {
	@ManyToMany
	private List<ProfessionalUser> followed;

	public StandardUser(String name, String surname, String email, String password) {
		super(name, surname, email, password);
//		this.followed = new ArrayList<>();
		setRole(Role.STANDARD);
	}

}
