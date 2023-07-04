package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import beParentsApp.entities.Reminder;;

public interface ReminderRepository extends JpaRepository<Reminder, UUID> {

//	@Query(value = "SELECT * FROM reminders WHERE date = :date AND user_id = :userId", nativeQuery = true)
//	Page<Reminder> findRemindersByDateAndUser(LocalDate date, UUID userId, Pageable pageable);

	Page<Reminder> findByUserId(UUID userID, Pageable pageable);
}
