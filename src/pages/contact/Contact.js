import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/Contact.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

/**
 * Contact form component to handle feedback submission.
 *
 * @return {JSX.Element} The contact form for users to submit feedback.
 */
function Contact() {
  // State to manage form data and errors
  const [contactFormData, setContactFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    content: "",
  });
  const { fname, lname, email, content } = contactFormData;
  const [errors, setErrors] = useState({});

  // History object for redirection
  const history = useHistory();

  /**
   * Handle input changes in the form fields.
   *
   * @param {Event} e - The event object
   */
  const handleChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle form submission and send data to the backend.
   *
   * @param {Event} event - The submit event
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      // Send data to backend and redirect to thank you page
      await axiosReq.post("/feedback/", contactFormData);
      history.push("/thanks"); // Redirect on successful submission
    } catch (err) {
      // Set validation errors if the request fails
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col>
        <Container className={`${styles.formContainer} text-center`}>
          <h1 className={`${styles.handwrittenTitle} ${appStyles.Handwritten}`}>
            Contact us
          </h1>
          <p className={styles.subText}>Let us know how we can help.</p>
          <Form onSubmit={handleSubmit}>
            {/* First Name Field */}
            <Form.Group>
              <Form.Control
                placeholder="First name"
                type="text"
                name="fname"
                value={fname}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
            {errors.fname?.map((message, idx) => (
              <Alert variant="warning" className={styles.alertMessage} key={idx}>
                {message}
              </Alert>
            ))}

            {/* Last Name Field */}
            <Form.Group>
              <Form.Control
                placeholder="Last name"
                type="text"
                name="lname"
                value={lname}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
            {errors.lname?.map((message, idx) => (
              <Alert variant="warning" className={styles.alertMessage} key={idx}>
                {message}
              </Alert>
            ))}

            {/* Email Field */}
            <Form.Group>
              <Form.Control
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className={styles.inputField}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert variant="warning" className={styles.alertMessage} key={idx}>
                {message}
              </Alert>
            ))}

            {/* Message Field */}
            <Form.Group>
              <Form.Control
                placeholder="Your message..."
                as="textarea"
                name="content"
                value={content}
                onChange={handleChange}
                rows={3}
                className={styles.inputField}
              />
            </Form.Group>
            {errors.content?.map((message, idx) => (
              <Alert variant="warning" className={styles.alertMessage} key={idx}>
                {message}
              </Alert>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              className={`${styles.submitButton} ${btnStyles.Button}`}
            >
              Submit
            </button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}

export default Contact;
