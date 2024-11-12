import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ReportForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


/**
 * report component for the report form.
 *
 * @return {JSX.Element} The report form component
 */
const Report = ({ userId, postId }) => {
  const [reportFormData, setReportFormData] = useState({
    category: "select",
    comment: "",
    user: userId,
    post: postId, 
  });

  const { category, comment} = reportFormData;
  const [errors, setErrors] = useState({});
  const history = useHistory();


  /**
   * A function that handles the change event.
   *
   * @param {Event} e - the event object
   */

  const handleChange = (e) => {
    setReportFormData({
      ...reportFormData,
      [e.target.name]: e.target.value,
    });
  };

   /**
   * A function to handle form submission asynchronously,
   * then sends the user to the thank you page.
   *
   * @param {Event} event - the event object
   * @return {Promise<void>} a promise that resolves when the function completes
   */
   

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/report/", reportFormData);
      history.push(`/thanks`);
    } catch (err) {
       console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col>
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
    </Col>
  </Row>
  );
}

export default Report;
