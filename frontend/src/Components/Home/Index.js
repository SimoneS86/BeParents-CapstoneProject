import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import Post from "./Post";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(null);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    filterPosts();
  };

  const filterPosts = () => {
    const filtered =
      posts.content &&
      posts.content.filter((post) => {
        const searchLower = searchTerm.toLowerCase();
        const contentLower = post.content.toLowerCase();
        const nameLower = post.user.name.toLowerCase();
        const surnameLower = post.user.surname.toLowerCase();
        const professionLower = post.user.profession ? post.user.profession.toLowerCase() : "";

        return (
          contentLower.includes(searchLower) ||
          nameLower.includes(searchLower) ||
          surnameLower.includes(searchLower) ||
          professionLower.includes(searchLower)
        );
      });

    setFilteredPosts(filtered);
  };

  useEffect(() => {
    filterPosts();
  }, [searchTerm, posts.content]);

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
        <Button variant="primary" className="bg-transparent p-3 ms-2" type="submit">
          Search
        </Button>
      </Form>

      {filteredPosts && filteredPosts.length > 0 ? (
        <>
          <h2>Search Results:</h2>
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      ) : posts.content && posts.content.length > 0 ? (
        <>
          <h2>All Posts:</h2>
          {posts.content.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      ) : (
        <p>No posts found.</p>
      )}

      {/* Resto del tuo codice... */}
    </>
  );
};

export default HomePage;
