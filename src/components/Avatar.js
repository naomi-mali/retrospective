import React from "react";
import styles from "../styles/Avatar.module.css";

/*
Component to display an avatar image with optional text.
Renders the image based on the 'src' prop and allows customization of height.
If provided, displays text next to the image.
*/

const Avatar = ({ src, height = 50, text }) => {
  return (
    <span>
      {/* Render avatar image with customizable height and fixed width */}
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      
      {/* Render optional text next to the avatar */}
      {text}
    </span>
  );
};

export default Avatar;
