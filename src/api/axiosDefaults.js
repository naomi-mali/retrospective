import axios from "axios";

axios.defaults.baseURL = "https://api-retrospective-3d1e13d99a31.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;