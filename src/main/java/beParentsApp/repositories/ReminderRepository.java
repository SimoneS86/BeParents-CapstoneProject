package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import beParentsApp.entities.Reminder;

public interface ReminderRepository extends JpaRepository<Reminder, UUID> {

}
