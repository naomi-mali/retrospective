import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comment";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * PostPage component that handles displaying a single post with its comments.
 * It also includes functionality for users to create and view comments on the post.
 *
 * @returns {JSX.Element} A page displaying a post, comments, and a form to add a comment.
 */
function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;

  /**
   * useEffect hook to fetch the post and comments when the component mounts
   * It runs every time the `id` parameter in the URL changes.
   */
  useEffect(() => {
    const handleMount = async () => {
      try {
        // Fetch the post and comments in parallel
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        // Handle errors here if needed
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Display popular profiles in mobile view */}
        <PopularProfiles mobile />
        {/* Display the Post component for the fetched post */}
        <Post {...post.results[0]} setPosts={setPost} postPage />

        <Container className={appStyles.Content}>
          {/* Show the comment creation form if the user is logged in */}
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments" // If there are no comments, just display a message
          ) : null}

          {/* Render the comments section with infinite scroll */}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))} 
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>
              No comments... yet.{" "}
              {/* Display a login link if the user is not logged in */}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to comment!</Tooltip>}
              >
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                  Log in
                </span>
              </OverlayTrigger>{" "}
              to be able to comment.
            </span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* Display popular profiles in larger view */}
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostPage;
