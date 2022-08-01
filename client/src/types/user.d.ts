interface UserState {
  isLogin: boolean;
  isShowUserModel: boolean;
  userInfo: UserInfo;
}

interface UserInfo {
  _id: Number | null;
  username: string;
  avatar: string;
}

interface User {
  username: string;
  password: string;
}
