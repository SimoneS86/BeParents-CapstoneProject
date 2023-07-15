import profile from "./../../img/profile.jpg";
import { Button, Container } from "react-bootstrap";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import MyTabs from "./ProfileTab";
import ProfileElement from "./profileElement";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsById } from "../../redux/actions/post";
import { getRemindersById } from "../../redux/actions/reminder";
import { getFollowedByStndId, getFollowersByProId } from "../../redux/actions/followElement";
import { getUserById } from "../../redux/actions/profileElement";

const Profile = () => {
  const profileElements = useSelector((state) => state.profileElements);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPostsById());
  // }, []);

  // useEffect(() => {
  //   dispatch(getRemindersById());
  // }, []);

  // useEffect(() => {
  //   dispatch(getFollowedByStndId());
  // }, []);

  // useEffect(() => {
  //   dispatch(getFollowersByProId());
  // }, []);

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  return (
    <div>
      <Container className="userContainer">
        <div className="row">
          <div className="left">
            <img
              className="thumbnail-image"
              style={{ width: "55px", height: "55px", borderRadius: "50%" }}
              src={profile}
              alt="user pic"
            />
            <span>
              <h3>{`${profileElements.name} ${profileElements.surname}`}</h3>
              {profileElements.profession && <p>{profileElements.profession}</p>}
              {profileElements.registrationNumber && <p>{profileElements.registrationNumber}</p>}
            </span>
          </div>
        </div>
        <Container>
          {profileElements.description && <p>{profileElements.description}</p>}
          <br></br>
          <div
            style={{
              margin: "0px",
              display: "flex",
              alignItems: "center",
            }}>
            <Button
              className=" bg-transparent "
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <SlUserFollow style={{ fontSize: "20px" }} />
            </Button>
            <Button
              className=" bg-transparent "
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <AiOutlineEdit style={{ fontSize: "20px" }} />
            </Button>
            <Button
              className=" bg-transparent "
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <MdDeleteOutline style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </Container>
      </Container>
      <br></br>
      <br></br>
      <Container className="userContainer">
        <MyTabs />
      </Container>
    </div>
  );
};

export default Profile;
