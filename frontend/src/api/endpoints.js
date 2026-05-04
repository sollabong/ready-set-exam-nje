import api from './api';

export const Endpoints = {
  getSubjects: () => api.get('/get-subjects.php'),

  getTasks: (subjectId) => api.get(`/get-tasks.php?subject_id=${subjectId}`),

  login: (credentials) => api.post('/login.php', credentials),
  register: (userData) => api.post('/register.php', userData),
  deleteUser: (userId) => {
    return api.delete('/delete-account.php', {
      data: { user_id: userId },
    });
  },
  changePassword: (userId, oldPassword, newPassword) => {
  return api.post('/update-password.php', {
    user_id: userId,
    old_password: oldPassword,
    new_password: newPassword
  });
},

  updateProgress: (data) => api.post('/update-progress.php', data),
  getProgress: (userId) => api.get(`/get-progress.php?user_id=${userId}`),

  getUserStats: (userId) => api.get(`/get-user-stats.php?user_id=${userId}`),
};
