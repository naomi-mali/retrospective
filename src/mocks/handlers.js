import { rest } from "msw";

const baseURL = "https://api-retrospective-3d1e13d99a31.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 16,
        username: "Nathan",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 16,
        profile_image: "https://res.cloudinary.com/dbaadqgfp/image/upload/v1/media/images/pexels-brenoanp-442535-1136575_k7w2wv"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];