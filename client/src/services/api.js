import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000
});

api.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response?.data || err)
);

export const getAllMotorcycles = () => api.get('/motorcycles');
export const getMotorcycle    = (slug) => api.get(`/motorcycles/${slug}`);
export const getProfile       = () => api.get('/profile');
export const getMessages      = () => api.get('/messages');
export const postMessage      = (data) => api.post('/messages', data);

export default api;
