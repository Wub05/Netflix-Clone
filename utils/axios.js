import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// // Create an Axios instance with custom configuration

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3", // Base URL for all API calls
//   headers: {
//     "Content-Type": "application/json", // Default header for all requests
//   },
//   timeout: 5000, // Timeout after 5 seconds
// });/
