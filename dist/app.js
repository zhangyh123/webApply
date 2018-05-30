'use strict';

var _Koa = require('Koa');

var _Koa2 = _interopRequireDefault(_Koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 配置文件不需要指定到最终的文件
const app = new _Koa2.default();
const config = (0, _config2.default)(app);

_controllerInit2.default.getAllRouters(app, _koaSimpleRouter2.default);

app.listen(config.port, () => {
	console.log(`listening on  ${config.port}`);
});