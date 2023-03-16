// External API service module
const gpt3ApiClient = require('../clients/gpt3ApiClient');
const dataTransformation = require('./dataTransformation');

const gpt3ApiService = {
  async getInteractionWithGPT3() {
    const externalData = await gpt3ApiClient.gpt3fetchTest();
    const transformedData = dataTransformation.transformData(externalData);
    return transformedData;
  }
};

module.exports = gpt3ApiService;
