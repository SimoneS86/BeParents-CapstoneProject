import { Button, Container } from "react-bootstrap";
import profile from "./../../img/profile.jpg";

const Post = ({ post }) => {
  return (
    <Container className="userContainer mb-2">
      <div className="row">
        <div className="left">
          <img
            className="thumbnail-image"
            style={{ width: "55px", height: "55px", borderRadius: "50%" }}
            src={profile}
            alt="user pic"
          />
          <span>
            <h3>{`${post.user.name} ${post.user.surname}`}</h3>
            {post.user.profession && <p>{post.user.profession}</p>}
          </span>
        </div>
        <div className="right">
          <h3>{post.pubblicationDate}</h3>
          <p>{post.lastUpdate}</p>
        </div>
      </div>
      <Container>
        <p>{post.content}</p>
        <br></br>
        <Button className=" bg-transparent mb-1 ">Adds Comments</Button>
        <Button className=" bg-transparent mb-1">Show Comments</Button>
      </Container>
    </Container>
  );
};
export default Post;
