export default {
  token: localStorage.getItem('token') || '',
  isShowUserModal: localStorage.getItem('isShowUserModal') === 'true',
  userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
};
