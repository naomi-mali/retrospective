import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
  useRedirect("loggedIn"); // Redirect if the user is already logged in

  // Local state to handle form data (username, password1, password2)
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  // State to store errors returned from the backend
  const [errors, setErrors] = useState({});
  const history = useHistory();

  // Handles changes in input fields
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Handles form submission to register the user
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API call to register the user
      await axios.post("/dj-rest-auth/registration/", signUpData);
      // Redirect to the sign-in page after successful registration
      history.push("/signin");
    } catch (err) {
      // Store errors if the registration fails
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign Up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange} // Update username field
              />
            </Form.Group>
            {/* Display error messages for username if any */}
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange} // Update password1 field
              />
            </Form.Group>
            {/* Display error messages for password1 if any */}
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange} // Update password2 field
              />
            </Form.Group>
            {/* Display error messages for password2 if any */}
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit" // Trigger form submission
            >
              Sign up
            </Button>

            {/* Display non-field errors like password mismatch or other issues */}
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>

          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signin">
              Already have an account? <span>Sign in</span>
            </Link>
          </Container>
        </Container>
      </Col>

      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        {/* Display an image for the right column on larger screens */}
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://res.cloudinary.com/dbaadqgfp/image/upload/v1730921233/pexels-fotios-photos-2090881_m33k0g.jpg"}
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
