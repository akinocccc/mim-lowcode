export default {
  SET_TOKEN(state: IUserState, token: string) {
    localStorage.setItem('token', token);
    state.token = token;
  },
  SET_IS_SHOW_USER_MODAL(state: IUserState, isShowUserModal: boolean) {
    localStorage.setItem('isShowUserModal', isShowUserModal.toString());
    state.isShowUserModal = isShowUserModal;
  },
  SET_USER_INFO(state: IUserState, userInfo: IUserInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    state.userInfo = { ...userInfo };
  },
};
