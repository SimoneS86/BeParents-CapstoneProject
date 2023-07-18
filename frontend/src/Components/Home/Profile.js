import { Button, Container } from "react-bootstrap";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import MyTabs from "./ProfileTab";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserById } from "../../redux/actions/profileElement";

const Profile = () => {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserById());
  // }, []);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [picture, setPicture] = useState("");
  const [profession, setProfession] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (user) {
      setName(user ? user.name : "");
      setSurname(user ? user.surname : "");
      setPicture(user ? user.picture : "");
      setProfession(user ? user.profession : "");
      setRegistrationNumber(user ? user.registrationNumber : "");
      setDescription(user ? user.description : "");
    }
  }, [user]);

  return (
    <div>
      <Container className="userContainer">
        <div className="row">
          <div className="left">
            <img
              className="thumbnail-image"
              style={{ width: "55px", height: "55px", borderRadius: "50%" }}
              src={picture}
              alt="user pic"
            />
            <span>
              <h3>{`${name} ${surname}`}</h3>
              {profession && <p>{profession}</p>}
              {registrationNumber && <p>{registrationNumber}</p>}
            </span>
          </div>
        </div>
        <Container>
          {description && <p>{description}</p>}
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
