package beParentsApp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.web.servlet.MockMvc;

import beParentsApp.entities.StandardUser;
import beParentsApp.entities.payload.StandardUserRegistrationPayload;
import beParentsApp.repositories.StandardUserRepository;
import beParentsApp.repositories.UserRepository;
import beParentsApp.services.StandardUserService;

@SpringBootTest
@AutoConfigureMockMvc
class CapstoneProjectBeParentsApplicationTests {
	private String serviceUrl = "http://localhost:3001/";

	@Autowired
	private MockMvc mockMvc;

	@Mock
	private UserRepository userRepo;

	@Mock
	private StandardUserRepository standardUserRepo;

	@InjectMocks
	private StandardUserService standardUserService;

	@Test
	public void testReadAllProfessionalUser() {
		// Mocking the repository
		Pageable pageable = PageRequest.of(0, 10, Sort.by("sortBy"));
		List<StandardUser> standardUser = new ArrayList<>();
		standardUser.add(new StandardUser("Aldo", "Baglio", "aldobaglio@gmail.com", "1234"));
		Page<StandardUser> page = new PageImpl<>(standardUser, pageable, 1);

		when(standardUserRepo.findAll(pageable)).thenReturn(page);

		// Calling the service method
		Page<StandardUser> result = standardUserService.findAll(0, 10, "sortBy");

		// Assertions
		assertNotNull(result);
		assertEquals(1, result.getTotalElements());
		// Additional assertions based on your expected data
	}

	@Test
	public void testCreateStandardUser() {
		// Mocking the repository
		StandardUserRegistrationPayload payload = new StandardUserRegistrationPayload();
		payload.setName("Test");
		payload.setSurname("User");
		payload.setEmail("testuser@example.com");
		payload.setPassword("password");
		when(standardUserRepo.save(Mockito.any(StandardUser.class))).thenReturn(new StandardUser());

		// Calling the service method
		StandardUser result = standardUserService.create(payload);

		// Assertions
		assertNotNull(result);
		// Additional assertions based on your expected data
	}

}
