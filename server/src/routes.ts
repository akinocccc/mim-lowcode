import userController from './controller/user-controller';

export default [
  {
    path: '/register',
    method: 'post',
    action: userController.register,
  },
  {
    path: '/login',
    method: 'post',
    action: userController.login,
  },
  {
    path: '/test',
    method: 'get',
    action: (ctx) => (ctx.body = {}),
  },
];
