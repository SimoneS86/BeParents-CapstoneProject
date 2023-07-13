import React, { useState } from "react";
import { Tab, Nav, Form, Button, Container } from "react-bootstrap";
import profile from "./../../img/profile.png";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <Tab.Container
      activeKey={activeTab}
      className="tabDetail"
      onSelect={handleTabSelect}
    >
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="tab1">POST TEXT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">TAB REMINDER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">TAB FOLLOWER</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        {/* upload text here ========= */}

        {/* tab 1 content here ========= */}
        <Tab.Pane eventKey="tab1">
          <Form
            onSubmit={handleSubmit}
            style={{ margin: "5px 0px!important" }}
            className="formSearch"
          >
            <Form.Control
              type="text"
              placeholder="POST TEXT"
              value={searchTerm}
              className="p-3 text-white border border-primary bg-transparent opacity-0.05"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="primary"
              className="p-3 bg-transparent "
              type="submit"
            >
              PUBLISH POST
            </Button>
          </Form>
          {/* post container here ========= */}

          <Container className="userContainer mt-5">
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
                </span>
              </div>
              <div className="right">
                <h3>Publication Date</h3>
                <p>Last Update</p>
              </div>
            </div>
            <Container>
              <p>
                loremLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passage.
              </p>
              <br></br>
              <div
                style={{
                  margin: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button className=" bg-transparent ">Add Comments</Button>
                <Button className=" bg-transparent ">Show Comments</Button>

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
          <Container className="userContainer mt-5">
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
                </span>
              </div>
              <div className="right">
                <h3>Publication Date</h3>
                <p>Last Update</p>
              </div>
            </div>
            <Container>
              <p>
                loremLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passage.
              </p>
              <br></br>
              <div
                style={{
                  margin: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button className=" bg-transparent ">Add Comments</Button>
                <Button className=" bg-transparent ">Show Comments</Button>

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
          <Container className="userContainer mt-5">
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
                </span>
              </div>
              <div className="right">
                <h3>Publication Date</h3>
                <p>Last Update</p>
              </div>
            </div>
            <Container>
              <p>
                loremLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passage.
              </p>
              <br></br>
              <div
                style={{
                  margin: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button className=" bg-transparent ">Add Comments</Button>
                <Button className=" bg-transparent ">Show Comments</Button>

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
        </Tab.Pane>
        {/* tab 2 content here ========= */}

        <Tab.Pane eventKey="tab2">
          <Button className=" bg-transparent ">ADD REMINDER</Button>
          <Container className="userContainer mt-5">
            <div className="row" style={{ marginBottom: "0px!important" }}>
              <div className="left">
                <span>
                  <p>12/12/2023</p>
                </span>
              </div>
              <div className="right">
                <Form>
                  <Form.Check
                    style={{ color: "red!important" }}
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </Form>
              </div>
            </div>
            <Container>
              <p>
                loremLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passage.
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
          <Container className="userContainer mt-5">
            <div className="row" style={{ marginBottom: "0px!important" }}>
              <div className="left">
                <span>
                  <p>12/12/2023</p>
                </span>
              </div>
              <div className="right">
                <Form>
                  <Form.Check
                    style={{ color: "red!important" }}
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </Form>
              </div>
            </div>
            <Container>
              <p>
                loremLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passage.
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
          <Container className="userContainer mt-5">
            <div className="row" style={{ marginBottom: "0px!important" }}>
              <div className="left">
                <span>
                  <p>12/12/2023</p>
                </span>
              </div>
              <div className="right">
                <Form>
                  <Form.Check
                    style={{ color: "red!important" }}
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </Form>
              </div>
            </div>
            <Container>
              <p>
                loremLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passage.
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
        </Tab.Pane>

        {/* tab 3 content here ========= */}
        <Tab.Pane eventKey="tab3">
          <Container className="">
            <div className="row userContainer">
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
                </span>
              </div>
              <div className="right">
                <Button className=" bg-transparent ">UNFOLLOW</Button>
              </div>
            </div>
            <div className="row userContainer">
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
                </span>
              </div>
              <div className="right">
                <Button className=" bg-transparent ">UNFOLLOW</Button>
              </div>
            </div>
            <div className="row userContainer">
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
                </span>
              </div>
              <div className="right">
                <Button className=" bg-transparent ">UNFOLLOW</Button>
              </div>
            </div>
            <div className="row userContainer">
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
                </span>
              </div>
              <div className="right">
                <Button className=" bg-transparent ">UNFOLLOW</Button>
              </div>
            </div>
          </Container>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default MyTabs;
