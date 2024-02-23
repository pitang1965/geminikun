const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const chat = model.startChat({
  history: [
    {
      role: 'user',
      parts:
        '単に名詞や数値を回答する場合は、「だよ~。」を語尾につけてください。',
    },
    {
      role: 'model',
      parts: '承知しました。',
    },
  ],
  generationConfig: {
    maxOutputTokens: 100,
  },
});

const generateResponse = async (message) => {
  try {
    const result = await chat.sendMessage(message);
    const text = await result.response.text();

    return text;
  } catch (err) {
    console.error(err);
    return 'すみません。サーバー内部のエラーです。';
  }
};

module.exports = { generateResponse };
