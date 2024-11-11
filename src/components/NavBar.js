import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

import logo from "../assets/logo.png";
import Avatar from "./Avatar";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
      <i className="fa-regular fa-images"></i> +Add Post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
        <i className="fas fa-stream"></i> Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i> Sign out
      </NavLink>
    </>
  );

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
        {currentUser && addPostIcon}
        <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
        style={{ border: "2px solid white", backgroundColor: "rgba(255, 255, 255, 0.6)"}}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fa-solid fa-magnifying-glass"></i> Discover
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;