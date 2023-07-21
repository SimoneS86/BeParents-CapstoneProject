package beParentsApp.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import beParentsApp.entities.ProfessionalUser;
import beParentsApp.entities.StandardUser;

@Repository
public interface ProfessionalUserRepository extends JpaRepository<ProfessionalUser, UUID> {

	Optional<ProfessionalUser> findByEmail(String email);

	Page<ProfessionalUser> findByFollowers(StandardUser follower, Pageable pageable);

}