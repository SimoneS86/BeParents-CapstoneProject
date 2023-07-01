package beParentsApp.entities.payload;

import beParentsApp.utils.Profession;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ProfessionalUserRegistrationPayload {
	@NotNull(message = "The name is required")
	@Size(min = 3, max = 30, message = "Name must be between 3 and 30 characters")
	private String name;

	@NotNull(message = "The surname is required")
	private String surname;

	@Email(message = "Please provide a valid email address")
	private String email;

	@NotNull(message = "The password is required")
	private String password;

	@NotNull(message = "The profession is required")
	private Profession profession;

	@NotNull(message = "The registration number is required")
	private String registrationNumber;

	@NotNull(message = "The description is required")
	private String description;

	public ProfessionalUserRegistrationPayload(String name, String surname, String email, String password,
			Profession profession, String registrationNumber, String description) {
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.password = password;
		this.profession = profession;
		this.registrationNumber = registrationNumber;
		this.description = description;
	}
}