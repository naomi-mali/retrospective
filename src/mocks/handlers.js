import { rest } from "msw";

// Base URL for API requests, to be used in handlers
const baseURL = "https://api-retrospective-3d1e13d99a31.herokuapp.com/";

// Mock service worker handlers to intercept API requests
export const handlers = [
  // Mock GET request to retrieve the current user profile data
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 16,
        username: "Nathan",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 16,
        profile_image: "https://res.cloudinary.com/dbaadqgfp/image/upload/v1/media/images/pexels-brenoanp-442535-1136575_k7w2wv" // Example profile image
      })
    );
  }),

  // Mock POST request to log the user out
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200)); // Return a successful response with status 200
  }),
];
