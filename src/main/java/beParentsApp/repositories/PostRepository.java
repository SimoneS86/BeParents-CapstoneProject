package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import beParentsApp.entities.Post;

public interface PostRepository extends JpaRepository<Post, UUID> {
	Page<Post> findByUserId(UUID userID, Pageable pageable);
}
