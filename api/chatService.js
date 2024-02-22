const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI(process.env.API_KEY);

// Model initialization
const modelId = 'gemini-pro';
const generationConfig = {
  stopSequences: ['red'],
  maxOutputTokens: 500,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

const model = configuration.getGenerativeModel({
  model: modelId,
  generationConfig,
});

const history = [];

const generateResponse = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return(response);
  } catch (err) {
    console.error(err);
    return (json({ message: 'サーバー内部のエラーです。' }));
  }
};

module.exports = {
  generateResponse,
  history,
};
