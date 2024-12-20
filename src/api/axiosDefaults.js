import axios from "axios";

// Set default configurations for axios
axios.defaults.baseURL = "https://api-retrospective-3d1e13d99a31.herokuapp.com/"; // Base URL for API requests
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"; // Set default Content-Type for POST requests to handle file uploads
axios.defaults.withCredentials = true; // Allow cookies and credentials to be sent with requests

/*
Create two instances of axios with default settings:
- axiosReq: Used for making requests that may require authentication or need to send data (like files).
- axiosRes: Used for requests that only receive data, potentially for simpler GET requests.
*/

export const axiosReq = axios.create();
export const axiosRes = axios.create();
