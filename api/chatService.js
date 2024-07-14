const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
const chat = model.startChat({
  history: [
    {
      role: 'user',
      parts:[{text: '回答はマークダウン形式でお願いします。単に名詞や数値を回答する場合は、「だよ~。」を語尾につけてください。ただし、箇条書きの項目については、「だよ～。」を付けないでください。'}]
    },
    {
      role: 'model',
      parts: [{text: 'はい、単に名詞や数値を回答する場合は、「だよ~。」を語尾につけて回答いたします。'}]
    },
  ],
  generationConfig: {
    maxOutputTokens: 1000,
  },
});

const generateResponse = async (message) => {
  try {
    if (!message.trim()) {
      return 'メッセージが空だよ～。';
    }

    const result = await chat.sendMessage(message);
    const text = await result.response.text();

    return text;
  } catch (err) {
    console.error(err);
    return 'すみません。サーバー内部のエラーが発生しちゃった。';
  }
};

module.exports = { generateResponse };
