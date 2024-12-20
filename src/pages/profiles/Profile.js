import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Button from "react-bootstrap/Button";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

/**
 * Profile component displays a user's profile details, including their avatar and username.
 * It also provides follow/unfollow functionality for logged-in users who do not own the profile.
 *
 * @param {boolean} props.mobile - Determines the layout (mobile or desktop).
 *
 * @returns {JSX.Element} The rendered Profile component.
 */
const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  // Get the current logged-in user
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  // Access follow/unfollow handlers from ProfileDataContext
  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      {/* Avatar with link to the profile's detailed page */}
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>

      {/* Display the username with a strong tag for emphasis */}
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>

      {/* Follow/unfollow button logic */}
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {/* Only show follow/unfollow buttons for non-mobile views, when a user is logged in, and if they do not own the profile */}
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            // Unfollow button
            <Button
              className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </Button>
          ) : (
            // Follow button
            <Button
              className={`${btnStyles.Button} ${btnStyles.Black}`}
              onClick={() => handleFollow(profile)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
