import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

/**
 * Component for editing comments.
 *
 * @param {Object} props - Object containing id, content, setShowEditForm, and setComments
 * @return {JSX.Element} A form for editing comments
 */
function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;
  
  // Local state to store the form content, initialized with the current comment content
  const [formContent, setFormContent] = useState(content);

  /**
   * A function to handle the change event.
   *
   * @param {Event} event - the event object
   */
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  /**
   * A function that handles form submission asynchronously.
   *
   * @param {Event} event - the event triggering the form submission
   * @return {Promise} a Promise that resolves after handling the form submission
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send the updated content to the backend to save the changes
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });

      // Update the comments state to reflect the modified content
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(), // Update the comment content
                updated_at: "now", // Set the updated timestamp (for demo purposes)
              }
            : comment;
        }),
      }));

      // Close the edit form after successful submission
      setShowEditForm(false);
    } catch (err) {
      // Handle errors (currently no action taken)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        {/* Textarea for editing the comment content */}
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        {/* Cancel button that closes the edit form without saving changes */}
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </button>
        {/* Save button, disabled if the content is empty or only whitespace */}
        <button
          className={styles.Button}
          disabled={!formContent.trim()}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
