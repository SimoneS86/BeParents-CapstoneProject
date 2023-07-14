import profile from "./../../img/profile.jpg";
import { Button } from "react-bootstrap";

const FollowElement = ({ follow }) => {
  return (
    <div className="row userContainer">
      <div className="left">
        <img
          className="thumbnail-image"
          style={{ width: "55px", height: "55px", borderRadius: "50%" }}
          src={profile}
          alt="user pic"
        />
        <span>
          <h3>{`${follow.name} ${follow.surname}`}</h3>
          {follow.profession && <p>{follow.profession}</p>}
        </span>
      </div>
      <div className="right">
        <Button className=" bg-transparent ">UNFOLLOW</Button>
      </div>
    </div>
  );
};
export default FollowElement;
