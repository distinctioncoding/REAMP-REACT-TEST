import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5181/api",
    headers: {
      'Content-Type': 'application/json'
    }
  });

  apiClient.interceptors.request.use(
    (config) => {
      const user = localStorage.getItem('user');
      const token = user ? JSON.parse(user).token : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      const isLoginEndpoint = error.config?.url?.includes('/login');
      if (error.response?.status === 401 && !isLoginEndpoint) {
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  export default apiClient;
