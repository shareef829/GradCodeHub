import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const getPracticeQuestions = async (topic) => {
  const response = await api.get(`/practice/${topic}`);
  return response.data;
};

export const submitCode = async (questionId, code) => {
  const response = await api.post('/practice/submit', { questionId, code });
  return response.data;
};

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const createSubscription = async (planId) => {
  const response = await api.post('/subscriptions', { planId });
  return response.data;
};

export default api;