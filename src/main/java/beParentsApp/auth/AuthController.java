package beParentsApp.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import beParentsApp.auth.payload.AuthenticationSuccessfullPayload;
import beParentsApp.entities.ProfessionalUser;
import beParentsApp.entities.StandardUser;
import beParentsApp.entities.User;
import beParentsApp.entities.payload.ProfessionalUserRegistrationPayload;
import beParentsApp.entities.payload.StandardUserRegistrationPayload;
import beParentsApp.entities.payload.UserLoginPayload;
import beParentsApp.exceptions.NotFoundException;
import beParentsApp.exceptions.UnauthorizedException;
import beParentsApp.services.ProfessionalUserService;
import beParentsApp.services.StandardUserService;
import beParentsApp.services.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	UserService userService;
	@Autowired
	StandardUserService standardUserService;

	@Autowired
	ProfessionalUserService professionalUserService;

	@Autowired
	private PasswordEncoder bcrypt;

	@PostMapping("/register/standardUser")
	public ResponseEntity<StandardUser> register(@RequestBody @Validated StandardUserRegistrationPayload body) {
		body.setPassword(bcrypt.encode(body.getPassword()));
		StandardUser standardUser = standardUserService.create(body);
		standardUser.setPassword(body.getPassword());
		return new ResponseEntity<StandardUser>(standardUser, HttpStatus.CREATED);
	}

	@PostMapping("/register/professionalUser")
	public ResponseEntity<ProfessionalUser> register(@RequestBody @Validated ProfessionalUserRegistrationPayload body) {
		body.setPassword(bcrypt.encode(body.getPassword()));
		ProfessionalUser professionalUser = professionalUserService.create(body);
		professionalUser.setPassword(body.getPassword());
		return new ResponseEntity<ProfessionalUser>(professionalUser, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<AuthenticationSuccessfullPayload> login(@RequestBody UserLoginPayload body)
			throws NotFoundException {

		User user = userService.findByEmail(body.getEmail());
		System.out.println("********************** " + user.getEmail() + "*********************");

		String plainPW = body.getPassword();
		String hashedPW = user.getPassword();

		if (!bcrypt.matches(plainPW, hashedPW))
			throw new UnauthorizedException("Credenziali non valide");

		String token = JWTTools.createToken(user);
		return new ResponseEntity<>(new AuthenticationSuccessfullPayload(token), HttpStatus.OK);
	}

}