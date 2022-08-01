const secret = '一段秘钥';
/**
jwt 加解码中间件
passthrough确保传入下一个中间件
可以使用ctx.state.jwtdata代替ctx.state.user获得解码数据， 默认是user
*/
const jwt = require('koa-jwt')({ secret, passthrough: true, key: 'jwtdata' });
export default jwt;
