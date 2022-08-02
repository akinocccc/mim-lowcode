export default {
  SET_IS_LOGIN(state: IUserState, isLogin: boolean) {
    localStorage.setItem('isLogin', isLogin.toString());
    state.isLogin = isLogin;
  },
  SET_IS_SHOW_USER_MODEL(state: IUserState, isShowUserModel: boolean) {
    localStorage.setItem('isShowUserModel', isShowUserModel.toString());
    state.isShowUserModel = isShowUserModel;
  },
  SET_USER_INFO(state: IUserState, userInfo: IUserInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    state.userInfo = { ...userInfo };
  },
};
