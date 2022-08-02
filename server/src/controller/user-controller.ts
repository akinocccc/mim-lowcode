import { isNil } from 'lodash';
import auth from 'src/middleware/auth';
import hash from 'src/utils/hash';
import randomAvatar from 'src/utils/randomAvatar';
const { sign } = require('jsonwebtoken');
import UserService from '../service/user-service';

class UserController {
  private service: UserService = new UserService();

  register = async (ctx: any) => {
    const { username, password } = ctx.request.body;
    const user = await this.service.getUserInfo(username);
    if (!isNil(user)) {
      ctx.body = {
        code: -1,
        msg: '用户已存在',
      };
      return;
    }
    const avatar = randomAvatar();
    const userInfo = await this.service.addUser(username, hash(password), avatar);
    ctx.body = {
      code: 0,
      data: {
        ...userInfo,
      },
      msg: '注册成功',
    };
  };

  login = async (ctx: any) => {
    const user = ctx.request.body;
    console.log(user);
    const ret = await this.service.getUserInfo(user.username);
    if (isNil(ret) === false && hash(user.password) === ret.password) {
      const { _id, username, avatar } = ret;
      const token = auth.sign(ctx, { _id, username, avatar });
      ctx.body = {
        code: 0,
        msg: '登录成功',
        data: {
          _id,
          username,
          avatar,
        },
        token,
      };
    } else {
      ctx.body = {
        code: -1,
        msg: '用户名或密码错误',
      };
    }
  };
}

export default new UserController();
