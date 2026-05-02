import api from './api';

export const Endpoints = {
  getSubjects: () => api.get('/get-subjects.php'),
  
  getTasks: (subjectId) => api.get(`/get-tasks.php?subject_id=${subjectId}`),
  
  login: (credentials) => api.post('/login.php', credentials),
};