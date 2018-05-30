import Koa from 'Koa';
import router from 'koa-simple-router';
import controllerInit from './controllers/controllerInit';
import configure from './config';  // 配置文件不需要指定到最终的文件
const app = new Koa();
const config = configure(app);


controllerInit.getAllRouters(app, router);

app.listen(config.port, () => {
	console.log(`listening on  ${config.port}`)
})