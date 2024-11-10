import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import PopularProfiles from "./PopularProfiles";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

const ProfilePage = () => {
  const { profile_id } = useParams();
  const [profile, setProfile] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${profile_id}/`);
        setProfile(data);
        setHasLoaded(true);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [profile_id]);

  if (!profile) return <Asset spinner />;

  const mainProfile = (
    <Row noGutters className="px-3 text-center">
      <Col lg={3} className="text-lg-left">
        <Image className={styles.ProfileImage} roundedCircle src={profile.image} />
      </Col>
      <Col lg={6}>
        <h3 className="m-2">{profile.owner}</h3>
        <Row className="justify-content-center no-gutters">
          <Col xs={3} className="my-2">
            <div>{profile.posts_count}</div>
            <div>posts</div>
          </Col>
          <hr></hr>
          <Col xs={3} className="my-2">
            <div>{profile.followers_count}</div>
            <div>followers</div>
          </Col>
          <hr></hr>
          <Col xs={3} className="my-2">
            <div>{profile.following_count}</div>
            <div>following</div>
          </Col>
        </Row>
      </Col>
      <Col 
      lg={8} 
      style={{position: "absolute", top: 25, right: 15, zIndex: 1,}}
      className="text-lg-right"
      >
        {currentUser && !is_owner && (
          <>
            <Button
              className={`${btnStyles.Button} ${profile.following_id ? btnStyles.BlackOutline : btnStyles.Black}`}
              onClick={() => {}}
            >
              {profile.following_id ? "Unfollow" : "Follow"}
            </Button>
            <NavLink exact to="/chat">
              <Button className={`${btnStyles.Button} ${btnStyles.BlackOutline} ml-2`}>
                Message
              </Button>
            </NavLink>
          </>
        )}
      </Col>
      {profile.content && <Col className="p-3">{profile.content}</Col>}
    </Row>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
};

export default ProfilePage;
