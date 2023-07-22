import React, { useState, useEffect } from "react";
import { Button, Collapse, Container, Modal, Form } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserPost,
  deleteUserComment,
  putUserPost,
  putUserComment,
  postUserComment,
} from "../../redux/actions/post";
import "./Modal-dark.css";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [newComment, setNewComment] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const currentUser = useSelector((state) => state.auth.userData);
  const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [showEditCommentModal, setShowEditCommentModal] = useState(false);
  const [commentToEdit, setCommentToEdit] = useState(null);
  const [updatedComment, setUpdatedComment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && post.user.id === currentUser.id) {
      setIsCurrentUserPost(true);
    }
  }, [currentUser]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleDeletePost = () => {
    dispatch(deleteUserPost(post.id));
    setShowDeleteModal(false);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const openCommentModal = () => {
    setShowCommentModal(true);
  };

  const closeCommentModal = () => {
    setShowCommentModal(false);
  };

  const handleEditPost = () => {
    if (updatedContent.trim() !== "") {
      const updatedPost = {
        publicationDate: post.publicationDate,
        content: updatedContent,
        userId: post.user.id,
      };
      dispatch(putUserPost(post.id, updatedPost));
    }
    setUpdatedContent("");
    closeEditModal();
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const commentPayload = {
        publicationDate: new Date().toISOString(),
        content: newComment,
        userId: currentUser.id,
        postId: post.id,
      };
      dispatch(postUserComment(currentUser, commentPayload));
      setNewComment("");
      closeCommentModal();
    }
  };

  const openDeleteCommentModal = (commentId) => {
    setCommentToDelete(commentId);
    setShowDeleteCommentModal(true);
  };

  const closeDeleteCommentModal = () => {
    setCommentToDelete(null);
    setShowDeleteCommentModal(false);
  };

  const handleDeleteComment = () => {
    if (commentToDelete) {
      dispatch(deleteUserComment(commentToDelete));
      closeDeleteCommentModal();
    }
  };

  const openEditCommentModal = (commentId) => {
    const comment = post.comments.find((comment) => comment.id === commentId);
    setCommentToEdit(commentId);
    setUpdatedComment(comment?.content || "");
    setShowEditCommentModal(true);
  };

  const closeEditCommentModal = () => {
    setCommentToEdit(null);
    setUpdatedComment("");
    setShowEditCommentModal(false);
  };

  const handleEditComment = () => {
    if (commentToEdit && updatedComment.trim() !== "") {
      const updatedCommentPayload = {
        publicationDate: new Date().toISOString(),
        content: updatedComment,
        userId: currentUser.id,
        postId: post.id,
      };
      dispatch(putUserComment(commentToEdit, updatedCommentPayload));
      closeEditCommentModal();
    }
  };

  return (
    <Container className="userContainer mb-2">
      <div className="row">
        <div className="left">
          <Link to={`/visitedProfile/${post.user.id}`}>
            <img
              className="thumbnail-image"
              style={{ width: "55px", height: "55px", borderRadius: "50%" }}
              src={post.user.picture}
              alt="user pic"
            />
          </Link>
          <span>
            <h3>{`${post.user.name} ${post.user.surname}`}</h3>
            {post.user.profession && <p>{post.user.profession}</p>}
          </span>
        </div>
        <div className="right mt-2">
          <p>{post.publicationDate.length > 20 ? post.publicationDate.slice(0, 19) : post.publicationDate}</p>
          {/* <p>{post.lastUpdate}</p> */}
        </div>
      </div>
      <Container>
        <p>{post.content}</p>
        <br />
        <Button className="bg-transparent mb-1 p-2" style={{ fontSize: "12px" }} onClick={openCommentModal}>
          Add Comment
        </Button>
        <Button className="bg-transparent mb-1 p-2" style={{ fontSize: "12px" }} onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {isCurrentUserPost && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              className="bg-transparent mt-1 mb-2"
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={openEditModal}>
              <AiOutlineEdit style={{ fontSize: "20px" }} />
            </Button>
            <Button
              className="bg-transparent mt-1 mb-2"
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={openDeleteModal}>
              <MdDeleteOutline style={{ fontSize: "20px" }} />
            </Button>
          </div>
        )}
        <Collapse in={showComments}>
          <p>
            {post.comments?.map((comment) => (
              <Container key={comment.id} className="comment my-2">
                <div className="row">
                  <div className="left">
                    <img
                      className="thumbnail-image"
                      style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                      src={comment.user.picture}
                      alt="user pic"
                    />
                    <span>
                      <h6>{`${comment.user.name} ${comment.user.surname}`}</h6>
                      {comment.user.profession && <p>{comment.user.profession}</p>}
                    </span>
                  </div>
                  <div className="right mt-2">
                    <p>
                      {comment.publicationDate.length > 20
                        ? comment.publicationDate.slice(0, 19)
                        : comment.publicationDate}
                    </p>
                    {/* <p>{post.lastUpdate}</p> */}
                  </div>
                </div>
                <p>{comment.content}</p>
                {comment.user.id === currentUser.id && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      className="bg-transparent mt-1 mb-2 "
                      style={{
                        borderRadius: "50%",
                        height: "30px",
                        width: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => openEditCommentModal(comment.id)}>
                      <AiOutlineEdit style={{ fontSize: "20px" }} />
                    </Button>
                    <Button
                      className="bg-transparent mt-1 mb-2 "
                      style={{
                        borderRadius: "50%",
                        height: "30px",
                        width: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => openDeleteCommentModal(comment.id)}>
                      <MdDeleteOutline style={{ fontSize: "20px" }} />
                    </Button>
                  </div>
                )}
                <hr />
              </Container>
            ))}
          </p>
        </Collapse>
      </Container>

      {/* Modal di conferma eliminazione post */}
      <Modal show={showDeleteModal} onHide={closeDeleteModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this post?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger dark" onClick={handleDeletePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal di modifica post */}
      <Modal show={showEditModal} onHide={closeEditModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeEditModal}>
            Cancel
          </Button>
          <Button variant="primary dark" onClick={handleEditPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal di inserimento commento */}
      <Modal show={showCommentModal} onHide={closeCommentModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={3} value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeCommentModal}>
            Cancel
          </Button>
          <Button variant="primary dark" onClick={handleCommentSubmit}>
            Add Comment
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal di conferma eliminazione commento */}
      <Modal show={showDeleteCommentModal} onHide={closeDeleteCommentModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this comment?</p>
          {/* Mostra il contenuto del commento da eliminare */}
          {commentToDelete && <p>{post.comments.find((comment) => comment.id === commentToDelete)?.content}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeDeleteCommentModal}>
            Cancel
          </Button>
          <Button variant="danger dark" onClick={handleDeleteComment}>
            Delete Comment
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal di modifica commento */}
      <Modal show={showEditCommentModal} onHide={closeEditCommentModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            rows={3}
            value={updatedComment}
            onChange={(e) => setUpdatedComment(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeEditCommentModal}>
            Cancel
          </Button>
          <Button variant="primary dark" onClick={handleEditComment}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Post;
