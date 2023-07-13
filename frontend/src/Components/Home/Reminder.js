import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const Reminder = ({ reminder }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <Container className="userContainer mt-2 mb-2">
      <div className="row" style={{ marginBottom: "0px" }}>
        <div className="left">
          <span>
            <p>{reminder.date}</p>
          </span>
        </div>
        <div className="right">
          <Form>
            <Form.Check
              style={{ color: "red" }}
              type="checkbox"
              id="myCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </Form>
        </div>
      </div>
      <Container>
        <p>{reminder.content}</p>
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
  );
};
export default Reminder;
