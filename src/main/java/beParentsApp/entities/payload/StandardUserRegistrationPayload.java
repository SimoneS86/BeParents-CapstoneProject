package beParentsApp.entities.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class StandardUserRegistrationPayload {
	@NotNull(message = "The name is required")
	@Size(min = 3, max = 30, message = "Name must be between 3 and 30 characters")
	private String name;

	@NotNull(message = "The surname is required")
	private String surname;

	@Email(message = "Please provide a valid email address")
	private String email;

	@NotNull(message = "The password is required")
	private String password;

	public StandardUserRegistrationPayload(String name, String surname, String email, String password) {
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.password = password;
	}

}
