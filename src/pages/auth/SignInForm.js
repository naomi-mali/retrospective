import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser(); // Set the current user in context
  useRedirect("loggedIn"); // Redirect if the user is logged in

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({}); // For storing error messages from the server
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Make an API call to log in the user
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user); // Set the user context to the returned user data
      setTokenTimestamp(data); // Store token timestamp for managing user sessions
      history.push('/feed'); // Redirect to the feed page on successful login
    } catch (err) {
      setErrors(err.response?.data); // Capture any errors from the login attempt
    }
  };

  const handleChange = (event) => {
    // Update the sign-in data when the user types in the form fields
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={styles.Input}
                value={username}
                onChange={handleChange} // Handle input change for username
              />
            </Form.Group>
            {/* Display error messages for username if any */}
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={styles.Input}
                value={password}
                onChange={handleChange} // Handle input change for password
              />
            </Form.Group>
            {/* Display error messages for password if any */}
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit" // Submit the form to log the user in
            >
              Sign In
            </Button>
          </Form>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Container>
      </Col>

      <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}>
        {/* Display an image for the right column in larger screens */}
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/dbaadqgfp/image/upload/v1730936384/My_interest_in_photography_is_not_to_capture_an_image_I_see_or_even_have_in_my_mind_but_to_explore_the_potential_of_moments_I_can_only_qqyvn0.jpg"
          }
        />
      </Col>
    </Row>
  );
}

export default SignInForm;
