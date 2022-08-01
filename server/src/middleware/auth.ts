const jwt = require('jsonwebtoken');
const expiresIn = 60 * 60 * 24;
const tokenName = 'token';
const secret = 'secret';

const auth = {
  sign: (ctx, userInfo) => {
    const token = jwt.sign(userInfo, secret, { expiresIn });
    ctx.cookies.set(tokenName, token, {
      maxAge: expiresIn,
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
  },

  verify: (ctx) => {
    const token = ctx.cookies.get(tokenName);
    if (!token) {
      return null;
    }
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      return null;
    }
  },
};

export default auth;
