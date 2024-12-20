import React from "react";
import NotFound from "../assets/404.png";
import Image from "react-bootstrap/Image";
import Styles from "../styles/PageNotFound.module.css";

/*
PageNotFound component:
- Displays a 404 error image and a message when a user tries to access a non-existing page.
- The image and message are centered using Flexbox for proper alignment.
*/

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {/* Display the 404 error image */}
      <Image
        src={NotFound}
        alt="Page not found image"
        className={Styles.Image}
      />
      {/* Message to inform the user the page does not exist */}
      <p>Oops, looks like the page you were looking for doesn't exist!</p>
    </div>
  );
};

export default PageNotFound;
