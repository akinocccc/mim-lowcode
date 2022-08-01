import { User } from 'src/utils/db';

export default class UserService {
  getUserInfo = async (username: string) => {
    return await User.findOne({ username });
  };
  addUser = async (username: string, password: string, avatar: string) => {
    const ret = await User.create({ username, password, avatar });
    console.log(ret);
    return {
      _id: ret._id,
      username: ret.username,
      avatar: ret.avatar,
    };
  };
}
