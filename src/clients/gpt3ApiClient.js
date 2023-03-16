// Import Axios library
const axios = require('axios');

// Define external API client object
const gpt3ApiClient = {
  async gpt3fetchTest() {
    // Define request data
    const requestData = {
      model: 'text-davinci-003',
      prompt: 'What can you say about a guy named Diego Maye?',
      max_tokens: 100,
      temperature: 0
    };
    
    // Define request headers
    const requestHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    };
    
    // Make POST request to OpenAI GPT-3 API
    const response = await axios.post('https://api.openai.com/v1/completions', requestData, {
      headers: requestHeaders
    });
    
    // Return data from response
    return response.data;
  }
};

// Export GPT-3 API client object
module.exports = gpt3ApiClient;
