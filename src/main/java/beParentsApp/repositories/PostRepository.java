package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import beParentsApp.entities.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, UUID> {
	Page<Post> findByUserId(UUID userID, Pageable pageable);

//	@Query("SELECT p FROM Post p JOIN p.user u WHERE u.role = 'PROFESSIONAL'")
//	Page<Post> findByProfessionalUser(Pageable pageable);

	@Query("SELECT p FROM Post p JOIN p.user u WHERE TYPE(u) = ProfessionalUser")
	Page<Post> findByProfessionalUser(Pageable pageable);

}
