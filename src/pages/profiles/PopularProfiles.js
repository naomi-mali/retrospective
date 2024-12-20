import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

/**
 * PopularProfiles component displays a list of popular profiles for users to follow.
 * It adjusts its layout depending on whether it is being rendered on a mobile device or not.
 *
 * @param {boolean} mobile - Determines if the component is rendered in mobile view.
 *
 * @returns {JSX.Element} A container showing popular profiles or a loading spinner.
 */
const PopularProfiles = ({ mobile }) => {
  // Access popular profile data from the ProfileDataContext
  const { popularProfiles } = useProfileData();

  return (
    <Container
      style={{ maxWidth: "470px" }}
      className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"}`}
    >
      {/* Check if there are popular profiles to display */}
      {popularProfiles.results.length ? (
        <>
          {/* Header text for the section */}
          <p style={{ color: "black", fontSize: "1.2em" }}>Who to follow</p>
          {/* Render profiles differently for mobile and non-mobile views */}
          {mobile ? (
            <div className="d-flex justify-content-around">
              {/* Display the first four profiles in a horizontal layout for mobile */}
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            // Display all profiles in a vertical list for non-mobile view
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        // Show a loading spinner if no profiles are loaded yet
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
