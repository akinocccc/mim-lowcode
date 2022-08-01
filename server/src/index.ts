const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
import path = require('path');
import { PORT } from './config';
import jwt from './middleware/auth';
import AppRoutes from './routes';

const app = new Koa();
const router = new Router();

//路由
AppRoutes.forEach((route) => router[route.method]('/api' + route.path, route.action));

app.use(
  jwt.unless({
    path: [/^\/api\/login/, /^\/public/],
  }),
);
app.use(koaStatic(path.join(__dirname, '..', '/public')));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
