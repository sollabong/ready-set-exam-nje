import api from './api';

export const Endpoints = {
  getSubjects: () => api.get('/get-subjects.php'),
  
  getTasks: (subjectId) => api.get(`/get-tasks.php?subject_id=${subjectId}`),
  
  login: (credentials) => api.post('/login.php', credentials),
  register: (userData) => api.post('/register.php', userData),

  updateProgress: (data) => api.post('/update-progress.php', data),
  getProgress: (userId) => api.get(`/get-progress.php?user_id=${userId}`),
};