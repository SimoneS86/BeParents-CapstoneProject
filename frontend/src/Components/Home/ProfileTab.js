import React, { useEffect, useState } from "react";
import { Tab, Nav, Form, Button, Container } from "react-bootstrap";
import profile from "./../../img/profile.jpg";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Reminder from "./Reminder";
import Post from "./Post";
import FollowElement from "./followElement";
import { getPostsById } from "../../redux/actions/post";
import { getRemindersById } from "../../redux/actions/reminder";
import { getFollowedByStndId, getFollowersByProId } from "../../redux/actions/followElement";

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const reminders = useSelector((state) => state.reminders);
  const posts = useSelector((state) => state.posts);
  const followElements = useSelector((state) => state.followElements);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getPostsById());
  }, []);

  useEffect(() => {
    dispatch(getRemindersById());
  }, []);

  // useEffect(() => {
  //   dispatch(getFollowedByStndId());
  // }, []);

  // useEffect(() => {
  //   dispatch(getFollowersByProId());
  // }, []);

  useEffect(() => {
    if (userData) {
      userData.profession ? dispatch(getFollowersByProId()) : dispatch(getFollowedByStndId());
    }
  }, [userData]);

  return (
    <Tab.Container activeKey={activeTab} className="tabDetail" onSelect={handleTabSelect}>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="tab1">POST</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">REMINDER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">FOLLOWER</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        {/* upload text here ========= */}

        {/* tab 1 content here ========= */}
        <Tab.Pane eventKey="tab1">
          <Form onSubmit={handleSubmit} style={{ margin: "5px 0px!important" }} className="formSearch">
            <Form.Control
              type="text"
              placeholder="POST TEXT"
              value={searchTerm}
              className="p-3 text-white border border-primary bg-transparent opacity-0.05"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary" className="p-3 bg-transparent ms-2 " type="submit">
              PUBLISH POST
            </Button>
          </Form>
          {posts && posts.content.map((post) => <Post key={post.id} post={post} />)}
        </Tab.Pane>
        {/* tab 2 content here ========= */}

        <Tab.Pane eventKey="tab2">
          <Button className=" bg-transparent ">ADD REMINDER</Button>
          {reminders.content && reminders.content.map((reminder) => <Reminder key={reminder.id} reminder={reminder} />)}
        </Tab.Pane>

        {/* tab 3 content here ========= */}
        <Tab.Pane eventKey="tab3">
          <Container className="">
            {followElements.content &&
              followElements.content.map((follow) => <FollowElement key={follow.id} follow={follow} />)}
          </Container>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default MyTabs;
