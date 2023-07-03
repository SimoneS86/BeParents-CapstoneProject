package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import beParentsApp.entities.Post;

public interface PostRepository extends JpaRepository<Post, UUID> {

}
