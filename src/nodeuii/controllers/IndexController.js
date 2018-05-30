const indexController = {
	indexAction() {
		return (ctx, next) => {
			ctx.body= 'hello worldtest';
		}
	}
}

export default indexController