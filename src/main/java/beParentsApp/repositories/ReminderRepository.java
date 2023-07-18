package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import beParentsApp.entities.Reminder;;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, UUID> {

//	@Query("SELECT r FROM Reminder r WHERE r.date >= ?1 ORDER BY r.date ASC")
	Page<Reminder> findByUserId(UUID userID, Pageable pageable);

//	Page<Reminder> findByUserIdAndDate(UUID userId, LocalDate date, Pageable pageable);
}
