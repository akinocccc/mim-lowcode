export default {
  isLogin: localStorage.getItem('isLogin') === 'true',
  isShowUserModel: localStorage.getItem('isShowUserModel') === 'true',
  userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
};
