import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

import logo from "../assets/logo.png";
import Avatar from "./Avatar";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/NavBar.module.css";
import { removeTokenTimestamp } from "../utils/utils";

/*
NavBar component that handles navigation for authenticated and unauthenticated users.
Displays different navigation options and user-specific actions based on login status.
*/

const NavBar = () => {
  // Get the current user and the function to set the user context
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  /*
  Function to handle user sign out.
  - Calls logout API to invalidate session.
  - Removes user token timestamp.
  - Clears the current user context.
  */
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null); // Clear user context
      removeTokenTimestamp(); // Remove token timestamp
    } catch (err) {
      // Error handling can be implemented here (e.g., logging the error)
      // console.log(err);
    }
  };

  // Navigation icon and link to create a new post
  const addPostIcon = (
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
      <i className="fa-regular fa-images"></i> +Add Post
    </NavLink>
  );

  // Navigation links for logged-in users
  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
        <i className="fas fa-stream"></i> Feed
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
        <i className="fas fa-heart"></i> Liked
      </NavLink>
      {/* User's profile link with avatar */}
      <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
      {/* Sign out link */}
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i> Sign out
      </NavLink>
    </>
  );

  // Navigation links for logged-out users (sign in/sign up)
  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
        <i className="fas fa-user-plus"></i> Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        {/* Logo and Home link */}
        <NavLink to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              height="75"
              width="85"
              style={{ filter: "drop-shadow(0px 0px 10px white)" }}
            />
          </Navbar.Brand>
        </NavLink>

        {/* Display "Add Post" link only if the user is logged in */}
        {currentUser && addPostIcon}

        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
          style={{ border: "2px solid white", backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        />
        
        {/* Navbar collapse section with navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {/* Discover link */}
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/discover">
              <i className="fa-solid fa-magnifying-glass"></i> Discover
            </NavLink>
            {/* Display logged-in or logged-out icons based on user state */}
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
