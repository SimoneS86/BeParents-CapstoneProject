package beParentsApp.repositories;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import beParentsApp.entities.Reminder;;

public interface ReminderRepository extends JpaRepository<Reminder, UUID> {

	@Query(value = "SELECT * FROM reminders WHERE date = :date", nativeQuery = true)
	Page<Reminder> findRemindersByDate(LocalDate date, Pageable pageable);
}
