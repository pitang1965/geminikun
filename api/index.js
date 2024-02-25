const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { generateResponse } = require('./chatService.js');
const { marked } = require('marked');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// フォームデータの解析
app.use(bodyParser.urlencoded({ extended: false }));

// 静的ファイル配信
app.use(express.static('public'));

app.post('/api/generate', async (req, res) => {
  const { message } = req.body;
  try {
    const ret = await generateResponse(message);
    // console.log('ret: ', ret)

    // マークダウンをHTMLに変換
    const html = marked.parse(ret);

    res.send(`
      <div class="chat-message-container user-message">
        <div class="chat-message">
          ${message}
        </div>
      </div>
      <div class="chat-message-container model-message">
        <div class="chat-message">
          ${html}
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
