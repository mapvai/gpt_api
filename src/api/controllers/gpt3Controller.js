const services = require('../../services/index');

const gpt3Controller = {
	async gpt3test(req, res, next){
	  try {
		const data = await services.gpt3ApiService.getInteractionWithGPT3();
		res.json(data);
	  } catch (error) {
		next(error);
	  }
	}
};

module.exports = gpt3Controller;

