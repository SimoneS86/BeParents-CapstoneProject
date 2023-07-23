package beParentsApp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.github.javafaker.Faker;

import beParentsApp.entities.Comment;
import beParentsApp.entities.Post;
import beParentsApp.entities.ProfessionalUser;
import beParentsApp.entities.Reminder;
import beParentsApp.entities.StandardUser;
import beParentsApp.entities.payload.CommentPayload;
import beParentsApp.entities.payload.PostPayload;
import beParentsApp.entities.payload.ProfessionalUserRegistrationPayload;
import beParentsApp.entities.payload.ReminderPayload;
import beParentsApp.entities.payload.StandardUserRegistrationPayload;
import beParentsApp.repositories.UserRepository;
import beParentsApp.services.CommentService;
import beParentsApp.services.PostService;
import beParentsApp.services.ProfessionalUserService;
import beParentsApp.services.ReminderService;
import beParentsApp.services.StandardUserService;
import beParentsApp.utils.Profession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Transactional
public class PopolationDBRunner implements CommandLineRunner {
	@Autowired
	StandardUserService standardUsersService;

	@Autowired
	ProfessionalUserService professionalUsersService;

	@Autowired
	PostService postService;

	@Autowired
	CommentService commentService;

	@Autowired
	ReminderService reminderService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PasswordEncoder bcrypt;

	private boolean isDatabaseEmpty() {
		// Controlla se il database è vuoto contando gli utenti o un'altra tabella
		// significativa
		return userRepository.count() == 0;
	}

	@Override
	public void run(String... args) throws Exception {
		if (isDatabaseEmpty()) {
			Faker faker = new Faker(new Locale("en"));
			List<StandardUser> createdUsers = new ArrayList<>();
			List<ProfessionalUser> createdProUsers = new ArrayList<>();
			List<Post> createdPosts = new ArrayList<>();
			for (int i = 0; i < 5; i++) {
				try {
					String name = faker.name().firstName();
					String surname = faker.name().lastName();
					String email = faker.internet().emailAddress();
					String password = bcrypt.encode("1234");

					StandardUserRegistrationPayload user = new StandardUserRegistrationPayload(name, surname, email,
							password);
					StandardUser userdb = standardUsersService.create(user);
					createdUsers.add(userdb);
					log.info(user.toString());
				} catch (Exception e) {
					System.out.println(e);
				}
			}
			for (int i = 0; i < 5; i++) {
				try {
					String name = faker.name().firstName();
					String surname = faker.name().lastName();
					String email = faker.internet().emailAddress();
					String password = bcrypt.encode("1234");
					Profession profession = faker.options().option(Profession.class);
					String registrationNumber = faker.code().isbn10();
					String description = faker.lorem().paragraph();

					ProfessionalUserRegistrationPayload user = new ProfessionalUserRegistrationPayload(name, surname,
							email, password, profession, registrationNumber, description);
					ProfessionalUser userdb = professionalUsersService.create(user);
					createdProUsers.add(userdb);
					log.info(user.toString());
				} catch (Exception e) {
					System.out.println(e);
				}
			}
			for (StandardUser user : createdUsers) {
				for (int i = 0; i < 2; i++) {
					try {
						LocalDateTime publicationDate = faker.date().past(30, java.util.concurrent.TimeUnit.DAYS)
								.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
						String content = faker.lorem().paragraph();
						UUID userId = user.getId();
						PostPayload post = new PostPayload(publicationDate, content, userId);
						// Salviamo il post utilizzando il servizio appropriato
						Post postdb = postService.create(post);
						createdPosts.add(postdb);
						// Stampiamo il post appena creato a console!
						System.out.println("Post created: " + post.toString());
					} catch (Exception e) {
						System.out.println(e);
					}
				}
			}
			for (StandardUser user : createdUsers) {
				for (int i = 0; i < 2; i++) {
					try {
						LocalDate date = faker.date().future(30, java.util.concurrent.TimeUnit.DAYS).toInstant()
								.atZone(ZoneId.systemDefault()).toLocalDate();
						String content = faker.lorem().sentence();
						UUID userId = user.getId();

						ReminderPayload reminder = new ReminderPayload(date, content, userId);
						// Salviamo il reminder utilizzando il servizio appropriato
						Reminder reminderDb = reminderService.create(reminder);
						System.out.println("Reminder created: " + reminderDb.toString());
					} catch (Exception e) {
						System.out.println(e);
					}
				}
			}
			for (ProfessionalUser user : createdProUsers) {
				for (int i = 0; i < 2; i++) {
					try {
						LocalDateTime publicationDate = faker.date().past(30, java.util.concurrent.TimeUnit.DAYS)
								.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
						String content = faker.lorem().paragraph();
						UUID userId = user.getId();
						PostPayload post = new PostPayload(publicationDate, content, userId);
						// Salviamo il post utilizzando il servizio appropriato
						Post postdb = postService.create(post);
						createdPosts.add(postdb);
						// Stampiamo il post appena creato a console!
						System.out.println("Post created: " + post.toString());
					} catch (Exception e) {
						System.out.println(e);
					}
				}
			}
			for (ProfessionalUser user : createdProUsers) {
				for (int i = 0; i < 2; i++) {
					try {
						LocalDate date = faker.date().future(30, java.util.concurrent.TimeUnit.DAYS).toInstant()
								.atZone(ZoneId.systemDefault()).toLocalDate();
						String content = faker.lorem().sentence();
						UUID userId = user.getId();

						ReminderPayload reminder = new ReminderPayload(date, content, userId);
						// Salviamo il reminder utilizzando il servizio appropriato
						Reminder reminderDb = reminderService.create(reminder);
						System.out.println("Reminder created: " + reminderDb.toString());
					} catch (Exception e) {
						System.out.println(e);
					}
				}
			}

			for (Post post : createdPosts) {
				try {
					// Generiamo il primo commento da uno StandardUser
					int randomIndex1 = new Random().nextInt(createdUsers.size());
					StandardUser standardUser = createdUsers.get(randomIndex1);
					LocalDateTime publicationDate1 = faker.date().past(30, java.util.concurrent.TimeUnit.DAYS)
							.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
					String content1 = faker.lorem().paragraph();
					UUID userId1 = standardUser.getId();
					UUID postId1 = post.getId();

					CommentPayload comment1 = new CommentPayload(publicationDate1, content1, userId1, postId1);
					Comment commentDb1 = commentService.create(comment1);
					System.out.println("Comment created: " + commentDb1.toString());

					// Generiamo il secondo commento da un ProfessionalUser
					int randomIndex2 = new Random().nextInt(createdProUsers.size());
					ProfessionalUser professionalUser = createdProUsers.get(randomIndex2);
					LocalDateTime publicationDate2 = faker.date().past(30, java.util.concurrent.TimeUnit.DAYS)
							.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
					String content2 = faker.lorem().paragraph();
					UUID userId2 = professionalUser.getId();
					UUID postId2 = post.getId();

					CommentPayload comment2 = new CommentPayload(publicationDate2, content2, userId2, postId2);
					Comment commentDb2 = commentService.create(comment2);
					System.out.println("Comment created: " + commentDb2.toString());

				} catch (Exception e) {
					System.out.println(e);
				}
			}
			// ... Codice precedente ...

			for (StandardUser standardUser : createdUsers) {
				List<ProfessionalUser> remainingProUsers = new ArrayList<>(createdProUsers);
				int followingLimit = 5; // Numero massimo di following per ciascun utente standard
				for (int i = 0; i < followingLimit; i++) {
					try {
						if (remainingProUsers.isEmpty()) {
							break; // Non ci sono più utenti professionali disponibili da seguire
						}
						// Scelta casuale di un utente professionale da seguire
						int randomIndex = new Random().nextInt(remainingProUsers.size());
						ProfessionalUser professionalUser = remainingProUsers.get(randomIndex);
						remainingProUsers.remove(professionalUser); // Rimuovi l'utente professionale dalla lista per
																	// evitare ripetizioni
						standardUsersService.followProfessionalUser(standardUser.getId(), professionalUser.getId());
					} catch (Exception e) {
						System.out.println(e);
					}
				}
			}
		}
	}
}
