import _ from 'lodash';
import path from 'path';

let config = {
	"viewDir": ''
}

// todo  对代码进行清洗

const init = (app)=> {
	if(process.env.NODE_ENV == "development") {
		const localConfig = {
			port: 8081
		}
		config = _.extend(config, localConfig)
	}
	if(process.env.NODE_ENV == "production") {
		const proConfig = {
			port: 8081
		}
		config = _.extend(config, proConfig)
	}

	return config;
}

export default app => init(app);
