import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../redux/actions/profileElement";
import { getFollowedByStndId, followUser, unFollowUser } from "../../redux/actions/followElement";
import { Button, Container } from "react-bootstrap";
import { SlUserFollow, SlUserUnfollow } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const VisitedProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profileElements = useSelector((state) => state.profileElements);
  const loggedInUser = useSelector((state) => state.auth.userData);
  const followedUsers = useSelector((state) => state.followElements.content);
  const hasProfession = !loggedInUser.profession;
  const isFollowed = followedUsers.some((user) => user.id === userId);

  const showFollowButton = hasProfession && !isFollowed && profileElements.profession;
  const showUnfollowButton = hasProfession && isFollowed && profileElements.profession;

  useEffect(() => {
    // Effettua la chiamata API per ottenere i dati dell'utente visitato
    dispatch(getUserById(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(getFollowedByStndId(loggedInUser.id));
  }, []);

  // const handleFollowClick = () => {
  //   // Chiama la funzione di azione followUser e passa l'userId del profilo visitato
  //   dispatch(followUser(userId)); // Assicurati di avere l'userId disponibile nella struttura del tuo oggetto profileElements
  // };
  // const handleUnFollowClick = () => {
  //   // Chiama la funzione di azione followUser e passa l'userId del profilo visitato
  //   dispatch(unFollowUser(userId)); // Assicurati di avere l'userId disponibile nella struttura del tuo oggetto profileElements
  // };
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
          {showFollowButton && (
            <Button
              className="bg-transparent"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => dispatch(followUser(userId))}>
              <SlUserFollow style={{ fontSize: "20px" }} />
            </Button>
          )}

          {showUnfollowButton && (
            <Button
              className="bg-transparent"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => dispatch(unFollowUser(userId))}>
              {/* Icona per indicare la rimozione della relazione di "following" */}
              <SlUserUnfollow style={{ fontSize: "20px" }} />
            </Button>
          )}
        </div>
      </Container>
    </Container>
  );
  // return (
  //   <Container className="userContainer">
  //     <div className="row">
  //       <div className="left">
  //         <img
  //           className="thumbnail-image"
  //           style={{ width: "95px", height: "95px", borderRadius: "50%" }}
  //           src={profileElements.picture}
  //           alt="user pic"
  //         />
  //         <span>
  //           <h3>{`${profileElements.name} ${profileElements.surname}`}</h3>
  //           {profileElements.profession && <p>{profileElements.profession}</p>}
  //           {profileElements.registrationNumber && <p>{profileElements.registrationNumber}</p>}
  //         </span>
  //       </div>
  //     </div>
  //     <Container>
  //       {profileElements.description && <p>{profileElements.description}</p>}
  //       <br></br>
  //       <div
  //         style={{
  //           margin: "0px",
  //           display: "flex",
  //           alignItems: "center",
  //         }}>
  //         {!loggedInUser.profession && profileElements.profession && (
  //           <Button
  //             className=" bg-transparent "
  //             style={{
  //               borderRadius: "50%",
  //               height: "50px",
  //               width: "50px",
  //               display: "flex",
  //               alignItems: "center",
  //               justifyContent: "center",
  //             }}
  //             onClick={handleFollowClick}>
  //             <SlUserFollow style={{ fontSize: "20px" }} />
  //           </Button>
  //         )}
  //       </div>
  //     </Container>
  //   </Container>
  // );
};

export default VisitedProfile;
