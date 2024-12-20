import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams, useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

/**
 * Renders the Profile Page component displaying user details and their posts.
 *
 * @return {JSX.Element} The rendered Profile Page component.
 */
function ProfilePage() {
  // State to manage whether data has loaded and to store profile posts
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  // Destructure the first profile result for display
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  // Fetch profile data and posts when the component mounts or the ID changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/posts/?owner__profile=${id}`),
        ]);
        // Update profile and posts state
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        // Handle errors (e.g., log errors)
      }
    };
    fetchData();
  }, [id, setProfileData]);

  // Main profile information component
  const mainProfile = (
    <>
      {/* Edit dropdown for profile owner */}
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-7 text-center">
        {/* Profile image */}
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        {/* Username and stats */}
        <Col lg={6}>
          <h3 className="m-8">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            {/* Posts count */}
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div style={{ padding: "0 10px" }}>posts</div>
            </Col>
            {/* Followers count */}
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div style={{ padding: "0 10px" }}>followers</div>
            </Col>
            {/* Following count */}
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div style={{ padding: "0 10px" }}>following</div>
            </Col>
          </Row>
        </Col>
        {/* Follow/unfollow buttons */}
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {/* Profile content and bio */}
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
        {profile?.bio && (
          <Col lg={12} className="p-3">
            <div className={styles.BioContainer}>{profile.bio}</div>
          </Col>
        )}
      </Row>
    </>
  );

  // Main posts component
  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={
            <div className={styles.PhotoAlbumContainer}>
              <div className={styles.PhotoAlbum}>
                {profilePosts.results.map((post) => (
                  <div
                    key={post.id}
                    className={styles.PhotoContainer}
                    onClick={() => history.push(`/posts/${post.id}`)}
                  >
                    <Image
                      src={post.image}
                      alt="post"
                      className={styles.PostImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          }
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  // Render the profile page layout
  return (
    <Row>
      {/* Mobile popular profiles */}
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
      {/* Desktop popular profiles */}
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
