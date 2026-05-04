import axios from 'axios';

const API_BASE_URL = 'http://localhost/ready-set-exam-nje/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
