interface IUserState {
  token: string;
  isShowUserModal: boolean;
  userInfo: IUserInfo;
}

interface IUserInfo {
  _id: Number | null;
  username: string;
  avatar: string;
}

interface IUser {
  username: string;
  password: string;
}
