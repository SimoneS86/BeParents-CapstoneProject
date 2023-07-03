package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import beParentsApp.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, UUID> {

}
