import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../redux/actions/profileElement";
import { Button, Container } from "react-bootstrap";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const VisitedProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profileElements = useSelector((state) => state.profileElements);
  const loggedInUser = useSelector((state) => state.auth.userData);

  useEffect(() => {
    // Effettua la chiamata API per ottenere i dati dell'utente visitato
    dispatch(getUserById(userId));
  }, [userId]);

  if (!profileElements) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="userContainer">
      <div className="row">
        <div className="left">
          <img
            className="thumbnail-image"
            style={{ width: "95px", height: "95px", borderRadius: "50%" }}
            src={profileElements.picture}
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
          {!loggedInUser.profession && profileElements.profession && (
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
          )}
          {/* <Button
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
          </Button> */}
        </div>
      </Container>
    </Container>
  );
};

export default VisitedProfile;
