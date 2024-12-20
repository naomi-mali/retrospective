import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/*
Multi-purpose component to display a spinner, an image, or a message.
Dependent on the 'spinner', 'src', and 'message' props passed into it.
*/

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {/* Render spinner if 'spinner' prop is true */}
      {spinner && <Spinner animation="border" />}
      
      {/* Display image if 'src' prop is provided */}
      {src && <img src={src} alt={message} />}
      
      {/* Show message if 'message' prop is passed */}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
