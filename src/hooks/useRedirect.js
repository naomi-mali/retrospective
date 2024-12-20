import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/"); // Attempt to refresh the token
        // If the user is logged in, redirect to the homepage
        if (userAuthStatus === "loggedIn") {
          history.push("/"); 
        }
      } catch (err) {
        // If the user is not logged in (token refresh fails), redirect to the login page
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount(); // Trigger the effect on mount
  }, [history, userAuthStatus]); // Re-run the effect when history or userAuthStatus changes
};
