'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
const indexController = {
	indexAction() {
		return (ctx, next) => {
			ctx.body = 'hello worldtest';
		};
	}
};

exports.default = indexController;