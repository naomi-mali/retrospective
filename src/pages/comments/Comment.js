import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
  // Destructuring props
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props;

  // Local state for managing edit form visibility
  const [showEditForm, setShowEditForm] = useState(false);

  // Get the current user from context
  const currentUser = useCurrentUser();

  // Check if the current user is the owner of the comment
  const is_owner = currentUser?.username === owner;

  // Handle comment deletion
  const handleDelete = async () => {
    try {
      // Delete the comment from the server
      await axiosRes.delete(`/comments/${id}/`);
      
      // Update the post's comment count after deletion
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      // Remove the deleted comment from the local state
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // Handle error (no action in this case)
    }
  };

  return (
    <>
      <hr />
      <Media>
        {/* Avatar and link to the profile */}
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          {/* Display owner and updated date */}
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>

          {/* Show the edit form if showEditForm is true, otherwise show the comment content */}
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p className={styles.CommentContent}>{content}</p>
          )}
        </Media.Body>

        {/* Show options (Edit/Delete) only if the current user is the owner and not in edit mode */}
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)} // Set to show the edit form
            handleDelete={handleDelete} // Trigger comment deletion
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
