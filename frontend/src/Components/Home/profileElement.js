// import { Button, Container } from "react-bootstrap";
// import profile from "./../../img/profile.jpg";
// import { SlUserFollow } from "react-icons/sl";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdDeleteOutline } from "react-icons/md";

// const profileElement = ({ profileElem }) => {
//   return (
//     <Container className="userContainer">
//       <div className="row">
//         <div className="left">
//           <img
//             className="thumbnail-image"
//             style={{ width: "55px", height: "55px", borderRadius: "50%" }}
//             src={profile}
//             alt="user pic"
//           />
//           <span>
//             <h3>{`${profileElem.name} ${profileElem.surname}`}</h3>
//             {profileElem.profession && <p>{profileElem.profession}</p>}
//             {profileElem.registrationNumber && <p>{profileElem.registrationNumber}</p>}
//           </span>
//         </div>
//       </div>
//       <Container>
//         {profileElem.description && <p>{profileElem.description}</p>}
//         <br></br>
//         <div
//           style={{
//             margin: "0px",
//             display: "flex",
//             alignItems: "center",
//           }}>
//           <Button
//             className=" bg-transparent "
//             style={{
//               borderRadius: "50%",
//               height: "50px",
//               width: "50px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}>
//             <SlUserFollow style={{ fontSize: "20px" }} />
//           </Button>
//           <Button
//             className=" bg-transparent "
//             style={{
//               borderRadius: "50%",
//               height: "50px",
//               width: "50px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}>
//             <AiOutlineEdit style={{ fontSize: "20px" }} />
//           </Button>
//           <Button
//             className=" bg-transparent "
//             style={{
//               borderRadius: "50%",
//               height: "50px",
//               width: "50px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}>
//             <MdDeleteOutline style={{ fontSize: "20px" }} />
//           </Button>
//         </div>
//       </Container>
//     </Container>
//   );
// };
// export default profileElement;
