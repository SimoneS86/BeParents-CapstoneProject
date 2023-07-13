import profile from "./../../img/profile.png";
import { Button, Container } from "react-bootstrap";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import MyTabs from "./ProfileTab";
const Profile = () => {
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
              <h3>Full Name here</h3>
              <p>Profession</p>
              <p>123123172412634</p>
            </span>
          </div>
        </div>
        <Container>
          <p>
            loremLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
          <br></br>
          <div
            style={{
              margin: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
            className=" bg-transparent "
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
              }}
            >
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
              }}
            >
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
