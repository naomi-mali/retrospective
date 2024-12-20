import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;

  // Local state for comment content
  const [content, setContent] = useState("");

    /**
   * Handle change in textarea (content input)
   * @param {object} event - The event object from the textarea input
   */

  // Handle change in textarea (content input)
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  // Handle form submission (creating a new comment)
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form behavior
    try {
      // Post the new comment to the backend
      const { data } = await axiosRes.post("/comments/", {
        content,  // Comment content
        post,     // The post to which the comment belongs
      });

      // Update the comments state by adding the new comment at the top
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));

      // Update the post's comment count
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1, // Increment comment count
          },
        ],
      }));

      setContent(""); // Reset content after successful submission
    } catch (err) {
      // Handle any errors (currently no action taken)
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          {/* Avatar link to the profile page */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>

          {/* Textarea input for the comment */}
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>

      {/* Submit button, disabled if the content is empty */}
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
