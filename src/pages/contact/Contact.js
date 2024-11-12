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

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    content: "",
  });
  const { fname, lname, email, content } = contactFormData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosReq.post("/feedback/", contactFormData);
      history.push("/thanks");
    } catch (err) {
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

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default Contact;
