const jwt = require('jsonwebtoken');
const expiresIn = 5;
const tokenName = 'token';
const secret = 'secret';

const auth = {
  sign: (ctx, userInfo) => {
    const token = jwt.sign(userInfo, secret, { expiresIn });
    ctx.set('Authorization', `Bearer ${token}`);
    ctx.cookies.set(tokenName, token, {
      maxAge: expiresIn,
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
    return token;
  },

  verify: async (ctx, decodedToken, token) => {
    console.log(token);
    if (!token) {
      return true;
    }
    try {
      const ret = jwt.verify(token, secret);
      console.log(ret);
      return ret.username.length <= 0;
    } catch (err) {
      return true;
    }
  },
};

export default auth;
