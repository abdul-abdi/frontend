import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  delete api.defaults.headers.common['Authorization'];
};

export const trainModel = () => api.post('/train');
export const makePrediction = (features: number[]) => api.post('/predict', { features });
export const getCourses = () => api.get('/courses');
export const updateCourseProgress = (courseId: string, progress: number) => api.post(`/courses/${courseId}/progress`, { progress });