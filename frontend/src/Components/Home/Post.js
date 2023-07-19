// import React, { useState, useEffect } from "react";
// import { Button, Collapse, Container, Modal } from "react-bootstrap";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdDeleteOutline } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUserPost } from "../../redux/actions/post";
// import "./Modal-dark.css";

// const Post = ({ post }) => {
//   const [showComments, setShowComments] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false); // Stato per mostrare/nascondere il modal di conferma
//   const currentUser = useSelector((state) => state.auth.userData);
//   const dispatch = useDispatch();
//   const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);

//   useEffect(() => {
//     if (currentUser && post.user.id === currentUser.id) {
//       setIsCurrentUserPost(true);
//     }
//   }, [currentUser]);

//   const toggleComments = () => {
//     setShowComments(!showComments);
//   };

//   const handleDeletePost = () => {
//     dispatch(deleteUserPost(post.id));
//     setShowDeleteModal(false); // Chiudi il modal dopo aver cancellato il post
//   };

//   const openDeleteModal = () => {
//     setShowDeleteModal(true);
//   };

//   const closeDeleteModal = () => {
//     setShowDeleteModal(false);
//   };

//   return (
//     <Container className="userContainer mb-2">
//       <div className="row">
//         <div className="left">
//           <img
//             className="thumbnail-image"
//             style={{ width: "55px", height: "55px", borderRadius: "50%" }}
//             src={post.user.picture}
//             alt="user pic"
//           />
//           <span>
//             <h3>{`${post.user.name} ${post.user.surname}`}</h3>
//             {post.user.profession && <p>{post.user.profession}</p>}
//           </span>
//         </div>
//         <div className="right mt-2">
//           <p>{post.publicationDate}</p>
//           {/* <p>{post.lastUpdate}</p> */}
//         </div>
//       </div>
//       <Container>
//         <p>{post.content}</p>
//         <br></br>
//         <Button className=" bg-transparent mb-1 p-2 " style={{ fontSize: "12px" }}>
//           Add Comment
//         </Button>
//         <Button className="bg-transparent mb-1 p-2 " style={{ fontSize: "12px" }} onClick={toggleComments}>
//           {showComments ? "Hide Comments" : "Show Comments"}
//         </Button>
//         {isCurrentUserPost && (
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <Button
//               className="bg-transparent mt-1 mb-2"
//               style={{
//                 borderRadius: "50%",
//                 height: "40px",
//                 width: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 // marginRight: "10px",
//               }}>
//               <AiOutlineEdit style={{ fontSize: "20px" }} />
//             </Button>
//             <Button
//               className="bg-transparent mt-1 mb-2"
//               style={{
//                 borderRadius: "50%",
//                 height: "40px",
//                 width: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onClick={openDeleteModal}>
//               <MdDeleteOutline style={{ fontSize: "20px" }} />
//             </Button>
//           </div>
//         )}
//         <Collapse in={showComments}>
//           <p>
//             {post.comments.map((comment) => (
//               <Container key={comment.id} className="comment my-2">
//                 <div className="row">
//                   <div className="left">
//                     <img
//                       className="thumbnail-image"
//                       style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//                       src={comment.user.picture}
//                       alt="user pic"
//                     />
//                     <span>
//                       <h5>{`${comment.user.name} ${comment.user.surname}`}</h5>
//                       {comment.user.profession && <p>{comment.user.profession}</p>}
//                     </span>
//                   </div>
//                   <div className="right mt-2">
//                     <p>{comment.publicationDate}</p>
//                     {/* <p>{post.lastUpdate}</p> */}
//                   </div>
//                 </div>
//                 <p>{comment.content}</p>
//                 <hr />
//               </Container>
//             ))}
//           </p>
//         </Collapse>
//       </Container>
//       {/* Modal di conferma */}
//       <Modal show={showDeleteModal} onHide={closeDeleteModal} className="modal-dark">
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Are you sure you want to delete this post?</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary dark" onClick={closeDeleteModal}>
//             Cancel
//           </Button>
//           <Button variant="danger dark" onClick={handleDeletePost}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Post;

import React, { useState, useEffect } from "react";
import { Button, Collapse, Container, Modal, Form } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserPost, putUserPost } from "../../redux/actions/post";
import "./Modal-dark.css";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const currentUser = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);

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

  const handleEditPost = () => {
    if (updatedContent.trim() !== "") {
      const updatedPost = {
        publicationDate: post.publicationDate,
        content: updatedContent,
        userId: post.user.id,
      };
      console.log(updatedPost);
      dispatch(putUserPost(post.id, updatedPost));
    }
    setUpdatedContent("");
    closeEditModal();
  };

  return (
    <Container className="userContainer mb-2">
      <div className="row">
        <div className="left">
          <img
            className="thumbnail-image"
            style={{ width: "55px", height: "55px", borderRadius: "50%" }}
            src={post.user.picture}
            alt="user pic"
          />
          <span>
            <h3>{`${post.user.name} ${post.user.surname}`}</h3>
            {post.user.profession && <p>{post.user.profession}</p>}
          </span>
        </div>
        <div className="right mt-2">
          <p>{post.publicationDate}</p>
          {/* <p>{post.lastUpdate}</p> */}
        </div>
      </div>
      <Container>
        <p>{post.content}</p>
        <br></br>
        <Button className="bg-transparent mb-1 p-2" style={{ fontSize: "12px" }}>
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
            {post.comments.map((comment) => (
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
                      <h5>{`${comment.user.name} ${comment.user.surname}`}</h5>
                      {comment.user.profession && <p>{comment.user.profession}</p>}
                    </span>
                  </div>
                  <div className="right mt-2">
                    <p>{comment.publicationDate}</p>
                    {/* <p>{post.lastUpdate}</p> */}
                  </div>
                </div>
                <p>{comment.content}</p>
                <hr />
              </Container>
            ))}
          </p>
        </Collapse>
      </Container>

      {/* Modal di conferma eliminazione */}
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

      {/* Modal di modifica */}
      <Modal show={showEditModal} onHide={closeEditModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
    </Container>
  );
};

export default Post;
