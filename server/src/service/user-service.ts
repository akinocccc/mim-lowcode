import { UserModel } from 'src/utils/db';

export default class UserService {
  getUserInfo = async (username: string) => {
    return await UserModel.findOne({ username });
  };
  addUser = async (username: string, password: string, avatar: string) => {
    const ret = await UserModel.create({ username, password, avatar });
    console.log(ret);
    return {
      _id: ret._id,
      username: ret.username,
      avatar: ret.avatar,
    };
  };
}
