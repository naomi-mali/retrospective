import jwtDecode from "jwt-decode"; // Importing the jwtDecode library to decode JWT tokens
import { axiosReq } from "../api/axiosDefaults"; // Importing the axios request utility for making API calls

/**
 * Fetches more data from the given resource URL and updates the resource state.
 *
 * @param {object} resource - The current resource object containing 'next' URL and results
 * @param {function} setResource - The function to update the state with new data
 */
export const fetchMoreData = async (resource, setResource) => {
  try {
    // Sending a GET request to fetch more data from the 'next' URL of the resource
    const { data } = await axiosReq.get(resource.next);
    
    // Updating the resource state by merging the new data with the previous data
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next, // Updating the 'next' URL for pagination
      results: data.results.reduce((acc, cur) => {
        // Reducing the new results to ensure no duplicates by checking the 'id'
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc // If the result already exists, return the accumulator as is
          : [...acc, cur]; // Otherwise, add the new result to the accumulator
      }, prevResource.results), // Merging new results with the previous ones
    }));
  } catch (err) {
    // Error handling (currently no action in case of failure)
  }
};

/**
 * Updates the profile after following a profile, including adjusting follower and following counts.
 *
 * @param {object} profile - The current profile to be updated
 * @param {object} clickedProfile - The profile that was clicked (followed)
 * @param {number} following_id - The ID of the following profile
 * @return {object} The updated profile object
 */
export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // If the profile clicked is the same as the profile, update its followers count
      // and set the following id
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id, // Set the following ID to the clicked profile's ID
      }
    : profile.is_owner
    ? // If the profile is owned by the logged-in user, update its following count
      { ...profile, following_count: profile.following_count + 1 }
    : // If the profile is neither the clicked profile nor the logged-in user's profile,
      // return the profile unchanged
      profile;
};

/**
 * Updates the profile after unfollowing a profile, including adjusting follower and following counts.
 *
 * @param {object} profile - The current profile to be updated
 * @param {object} clickedProfile - The profile that was clicked (unfollowed)
 * @return {object} The updated profile object
 */
export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // If the profile clicked is the same as the profile, update its followers count
      // and set the following id to null
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null, // Reset the following id to null
      }
    : profile.is_owner
    ? // If the profile is owned by the logged-in user, update its following count
      { ...profile, following_count: profile.following_count - 1 }
    : // If the profile is neither the clicked profile nor the logged-in user's profile,
      // return the profile unchanged
      profile;
};

/**
 * Sets the timestamp for the refresh token in local storage.
 *
 * @param {object} data - The data containing the refresh token to be decoded
 */
export const setTokenTimestamp = (data) => {
  // Decoding the refresh token to extract the expiration timestamp
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  // Storing the refresh token timestamp in local storage for later use
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

/**
 * Checks if the refresh token needs to be refreshed by verifying if a timestamp exists in local storage.
 *
 * @return {boolean} Returns true if a refresh token timestamp exists, false otherwise
 */
export const shouldRefreshToken = () => {
  // If the 'refreshTokenTimestamp' exists in local storage, return true
  return !!localStorage.getItem("refreshTokenTimestamp");
};

/**
 * Removes the refresh token timestamp from local storage.
 */
export const removeTokenTimestamp = () => {
  // Removing the refresh token timestamp from local storage
  localStorage.removeItem("refreshTokenTimestamp");
};
