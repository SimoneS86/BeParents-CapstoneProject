import { Button, Container, Modal } from "react-bootstrap";
import { SlUserFollow } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import MyTabs from "./ProfileTab";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUser } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  // Funzione per mostrare il modale di conferma eliminazione
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  // Funzione per chiudere il modale di conferma eliminazione
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // Funzione per gestire la conferma di eliminazione dell'utente
  const handleDeleteUser = () => {
    // Chiamare qui l'azione deleteUser per eliminare l'utente
    dispatch(deleteUser(user.id));
    navigate("/signup");
  };

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
              <SlUserFollow style={{ fontSize: "20px" }} />
            </Button> */}
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
              }}
              onClick={handleShowDeleteModal}>
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

      {/* Modale di conferma eliminazione */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Conferma Eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler eliminare il tuo profilo? Questa azione è irreversibile.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Elimina
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
