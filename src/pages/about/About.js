import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../../styles/About.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../styles/About.module.css";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

/**
 * Returns the About component with user-specific content and conditional rendering based on the currentUser state.
 *
 * @returns {JSX.Element} The About component JSX
 */
const About = () => {
  const currentUser = useCurrentUser(); // Get current user data from context

  return (
    <div className={styles.Background}> {/* Background styling */}
      <Card className={`text-center p-3 shadow-lg mt-5 ${styles.cardBackground}`} style={{ width: "40rem" }}>
        <Card.Body>
          <h6 className={`${appStyles.Handwritten} ${styles.Heading1}`}>Retrospective</h6> {/* Main heading for the section */}
          <Card.Text className={`${styles.Heading3}`}>
            Reflect on life's meaningful moments, share your highlights,
            and connect with others in a community that cherishes life and celebrates everyday wonders.
          </Card.Text>
          
          {/* Conditional rendering based on whether the user is logged in */}
          {currentUser ? (
            // If the user is logged in, show the "Send us a Message" button
            <Link to="/contact-us">
              <Button className={btnStyles.Button} variant="primary">
                Send us a Message
              </Button>
            </Link>
           ) : (
            // If the user is not logged in, show "Sign Up" and "Sign In" buttons
            <>
              <Link to="/signup">
                <Button className={btnStyles.Secondary} variant="primary" style={{ marginRight: '12px' }}>
                  Sign Up
                </Button>
              </Link>
              <Link to="/signin">
                <Button className={btnStyles.Secondary} variant="primary">
                  Sign In
                </Button>
              </Link>
              
              {/* Additional message for users not logged in */}
              <h6 className={`${styles.Heading2}`}>
                Got a question or feedback? We’re here to help – 
                <Link to="/contact-us" className={`pt-3 ${styles.Link}`}>reach out! </Link>
              </h6>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
