package beParentsApp.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import beParentsApp.entities.StandardUser;

@Repository
public interface StandardUserRepository extends JpaRepository<StandardUser, UUID> {

	Optional<StandardUser> findByEmail(String email);

}