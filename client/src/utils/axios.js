import axios from 'axios';


const customFetch = axios.create({
  baseURL:ProcessingInstruction.env.REACT_APP_API_URL,
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
