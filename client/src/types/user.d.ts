interface IUserState {
  isLogin: boolean;
  isShowUserModel: boolean;
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
