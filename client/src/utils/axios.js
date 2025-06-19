

import axios from 'axios';

const API_BASE_URL = 'https://jobtracker-qpij.onrender.com/api/v1'

const customFetch = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for sending cookies (JWT etc.)
});

// ✅ Response Interceptor (optional but useful)
customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Optional: log error or show toast here
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized! Token might be expired.');
    }
    return Promise.reject(error);
  }
);

export default customFetch;
