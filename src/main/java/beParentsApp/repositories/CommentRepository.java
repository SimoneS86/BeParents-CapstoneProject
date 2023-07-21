package beParentsApp.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import beParentsApp.entities.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, UUID> {

}
