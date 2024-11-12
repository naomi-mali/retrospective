import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/Thanks.module.css"; 
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

const Thanks = () => {
  useRedirect("LoggedOut");
  return (
    <Container className={styles.thanksContainer}>
      <h1 className={`${styles.handwrittenHeader} ${appStyles.Handwritten}`}>
        Thanks for getting in touch
      </h1>
      <p className={styles.messageText}>
        Thank you for helping us improve! Your feedback has been submitted,
        and our team will review it soon. We're glad to have you as part of our community!
      </p>
      <p className={styles.messageText}>
        Why not have a look at your{" "}
        <Link to="/feed" className={styles.linkText}>
          feed
        </Link>{" "}
        and see what other people have been posting.
      </p>
    </Container>
  );
};

export default Thanks;
