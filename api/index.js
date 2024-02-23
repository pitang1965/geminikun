const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { generateResponse } = require('./chatService.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// フォームデータの解析
app.use(bodyParser.urlencoded({ extended: false }));

// 静的ファイル配信
app.use(express.static('public'));

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const ret = await generateResponse(prompt);
    res.send(`
      <div class="chat-message-container user-message">
        <div class="chat-message">
          ${prompt}
        </div>
      </div>
      <div class="chat-message-container ai-message">
        <div class="chat-message">
          ${ret}
        </div>
      </div>`);
  } catch (error) {
    console.error('Error :', error);
    res.send(`<p id="api-error">エラー: ${error}</p>`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
