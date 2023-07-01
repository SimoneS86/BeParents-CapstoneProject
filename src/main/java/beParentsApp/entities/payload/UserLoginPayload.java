package beParentsApp.entities.payload;

import lombok.Data;

@Data
public class UserLoginPayload {
	String email;
	String password;
}