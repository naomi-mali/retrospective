import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import PopularProfiles from "../profiles/PopularProfiles";

/**
 * PostsPage component that handles displaying a list of posts.
 * It includes search functionality, infinite scroll, and displays popular profiles in the sidebar.
 * 
 * @param {string} message - The message to display if no posts are found.
 * @param {string} filter - The filter to apply when fetching posts (default is an empty string).
 * 
 * @returns {JSX.Element} A page displaying a list of posts, search functionality, and popular profiles.
 */
function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] }); // State for storing fetched posts
  const [hasLoaded, setHasLoaded] = useState(false); // State to track if posts have loaded
  const { pathname } = useLocation(); // Get the current location (URL) for triggering refetch

  const [query, setQuery] = useState(""); // State for storing the search query

  /**
   * useEffect hook to fetch posts when the component mounts or when query, filter, or pathname changes.
   * It fetches posts with the applied search query and filter and updates the state.
   */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data); // Set the fetched posts data
        setHasLoaded(true); // Indicate that the posts have loaded
      } catch (err) {
        // Error handling (optional to log error here)
      }
    };

    setHasLoaded(false); // Reset loading state before fetching
    const timer = setTimeout(() => {
      fetchPosts(); // Fetch posts after a short delay to debounce input
    }, 1000);

    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts or query changes
    };
  }, [filter, query, pathname]); // Trigger effect when filter, query, or pathname changes

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Display popular profiles in mobile view */}
        <PopularProfiles mobile />
        {/* Search icon displayed next to the search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        
        {/* Search bar for filtering posts */}
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()} // Prevent form submission
        >
          <Form.Control
            value={query} // Controlled input for search query
            onChange={(event) => setQuery(event.target.value)} // Update query state on input change
            type="text"
            className="mr-sm-2"
            placeholder="Search posts" // Placeholder text for the search bar
          />
        </Form>

        {/* Conditional rendering based on the loading state and fetched posts */}
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              // Infinite scroll component to display posts and load more
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length} // Number of posts currently displayed
                loader={<Asset spinner />} // Display spinner while loading more posts
                hasMore={!!posts.next} // Check if there are more posts to load
                next={() => fetchMoreData(posts, setPosts)} // Fetch more posts on scroll
              />
            ) : (
              // If no posts are found, show a message and an image
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          // Show a loading spinner while posts are being fetched
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* Display popular profiles in larger screen view */}
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
