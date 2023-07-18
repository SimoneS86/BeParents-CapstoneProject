import React, { useState, useEffect } from "react";
import { Button, Collapse, Container } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserPost } from "../../redux/actions/post";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
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

  //const isCurrentUserPost = post.user.id === currentUserId;

  const handleDeletePost = () => {
    dispatch(deleteUserPost(post.id));
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
        <Button className=" bg-transparent mb-1 p-2 " style={{ fontSize: "12px" }}>
          Add Comment
        </Button>
        <Button className="bg-transparent mb-1 p-2 " style={{ fontSize: "12px" }} onClick={toggleComments}>
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
                // marginRight: "10px",
              }}>
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
              onClick={handleDeletePost}>
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
    </Container>
  );
};

export default Post;
