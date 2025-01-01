import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const authService = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('accessToken', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('accessToken');
    }
  },

  setRefreshToken: (token) => {
    if (token) {
      localStorage.setItem('refreshToken', token);
    } else {
      localStorage.removeItem('refreshToken');
    }
  },

  register: async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    const { accessToken, refreshToken } = response.data.data;
    authService.setAuthToken(accessToken);
    authService.setRefreshToken(refreshToken);
    return response.data;
  },

  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const { accessToken, refreshToken } = response.data.data;
    authService.setAuthToken(accessToken);
    authService.setRefreshToken(refreshToken);
    return response.data;
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } finally {
      authService.setAuthToken(null);
      authService.setRefreshToken(null);
    }
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }

    const response = await axios.post(`${API_URL}/auth/refresh-token`, {
      refreshToken,
    });
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.data;
    authService.setAuthToken(newAccessToken);
    authService.setRefreshToken(newRefreshToken);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await axios.get(`${API_URL}/auth/me`);
    return response.data;
  },

  setupAxiosInterceptors: () => {
    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            await authService.refreshToken();
            return axios(originalRequest);
          } catch (refreshError) {
            authService.setAuthToken(null);
            authService.setRefreshToken(null);
            throw refreshError;
          }
        }

        return Promise.reject(error);
      }
    );
  },

  initialize: () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      authService.setAuthToken(token);
    }
    authService.setupAxiosInterceptors();
  },
};

export default authService; 