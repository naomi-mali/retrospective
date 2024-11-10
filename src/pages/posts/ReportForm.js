import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults"; // Ensure axios is set up
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ReportForm.module.css";

function ReportForm({ postId }) {
  const [reportData, setReportData] = useState({
    category: "select",
    comment: "",
  });
  const { category, comment } = reportData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setReportData({
      ...reportData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object to send the report data
    const formData = new FormData();
    formData.append("post", postId);
    formData.append("category", category);
    formData.append("comment", comment);

    try {
      const response = await axiosReq.post("/reports/", formData);
      console.log("Report submitted:", response.data);
      
      // Redirect back to the post page
      history.push(`/posts/${postId}`);
    } catch (err) {
      console.error("Error submitting report:", err.response || err);
      if (err.response) {
        console.error("Error details:", err.response.data);
      }
    }
  };

  return (
    <Container className={styles["form-container"]}>
      <h4>Report Post</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value="select">Please select a category</option>
            <option value="spam">Spam</option>
            <option value="inappropriate_content">Inappropriate Content</option>
            <option value="harassment">Harassment or Bullying</option>
            <option value="hate_speech">Hate Speech</option>
            <option value="misinformation">Misinformation</option>
            <option value="copyright_violation">Copyright Violation</option>
            <option value="impersonation">Impersonation</option>
            <option value="self_harm">Self-harm or Suicide</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>

        {errors.category && (
          <Alert variant="warning">
            {errors.category}
          </Alert>
        )}

        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="comment"
            value={comment}
            onChange={handleChange}
          />
        </Form.Group>

        {errors.comment && (
          <Alert variant="warning">
            {errors.comment}
          </Alert>
        )}

        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          type="submit"
        >
          Submit Report
        </Button>
      </Form>
    </Container>
  );
}

export default ReportForm;
