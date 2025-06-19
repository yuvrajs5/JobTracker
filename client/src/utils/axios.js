import axios from 'axios';

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://jobtracker-qpij.onrender.com/api/v1'
    : 'http://localhost:4000/api/v1';

const customFetch = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // If using cookies/session
});

customFetch.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('sUnauthorized! Redirect or logout logic here.');
    }
    return Promise.reject(error);
  }
);

export default customFetch;
