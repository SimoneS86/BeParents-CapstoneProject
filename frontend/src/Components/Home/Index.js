import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import profile from "./../../img/profile.jpg";
import "./Home.css";
import { useSelector } from "react-redux";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/actions/post";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="formSearch">
        <Form.Control
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" className=" bg-transparent p-3 ms-2" type="submit">
          Search
        </Button>
      </Form>

      {posts.content && posts.content.map((post) => <Post key={post.id} post={post} />)}

      <br></br>
      <Container className="userContainer">
        {/* post 1 here ppppp======== */}
        <Container className=" post">
          <img
            className="thumbnail-image"
            style={{ width: "55px", height: "55px", borderRadius: "50%" }}
            src={profile}
            alt="user pic"
          />
          <p>
            loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </Container>
        {/* post 2 hre and se on === */}
        <Container className=" post">
          <img
            className="thumbnail-image"
            style={{ width: "55px", height: "55px", borderRadius: "50%" }}
            src={profile}
            alt="user pic"
          />
          <p>
            loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
