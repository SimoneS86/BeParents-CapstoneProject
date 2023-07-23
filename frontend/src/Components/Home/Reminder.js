import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Modal, Form } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { deleteReminder, putReminder } from "../../redux/actions/reminder";

const Reminder = ({ reminder }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedDate, setEditedDate] = useState(reminder.date);
  const [editedContent, setEditedContent] = useState(reminder.content);

  const dispatch = useDispatch();

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleDeletePost = () => {
    dispatch(deleteReminder(reminder.id));
    closeDeleteModal();
  };

  const handleEditReminder = () => {
    const editedReminder = {
      date: editedDate,
      content: editedContent,
      userId: reminder.user.id,
    };
    dispatch(putReminder(reminder.id, editedReminder));
    closeEditModal();
  };

  return (
    <Container className="userContainer mt-2 mb-2">
      <div className="row" style={{ marginBottom: "0px" }}>
        <div className="left">
          <span>
            <h4 className="text-white">{reminder.date}</h4>
          </span>
        </div>
        <div className="right" style={{ display: "flex", justifyContent: "flex-end", flex: "1" }}>
          <div
            style={{
              margin: "0px",
              display: "flex",
              alignItems: "center",
            }}>
            <Button
              className="bg-transparent"
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={openEditModal}>
              <AiOutlineEdit style={{ fontSize: "20px" }} />
            </Button>
            <Button
              className="bg-transparent"
              style={{
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={openDeleteModal}>
              <MdDeleteOutline style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <p>{reminder.content}</p>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={closeDeleteModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this post?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger dark" onClick={handleDeletePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Reminder Modal */}
      <Modal show={showEditModal} onHide={closeEditModal} className="modal-dark">
        <Modal.Header closeButton>
          <Modal.Title>Edit Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter reminder text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary dark" onClick={closeEditModal}>
            Cancel
          </Button>
          <Button variant="primary dark" onClick={handleEditReminder}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Reminder;
