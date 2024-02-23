# [HTMX](https://htmx.org/)と[Gemini API](https://ai.google.dev/tutorials?hl=ja)を用いたシンプルチャット
* フロントエンドは、HTML, CSS, 少量のJavaScriptとHTMXを使用。
* バックエンドは、Node.jsのフレームワークの [express.js](https://expressjs.com/ja/)を使用。
* バックエンドからGeminiのAPIを呼び出しています。
  * 「◯◯だよー。」と言わせるようにしています。
  *  マルチターンの会話（チャットなど）を構築するには、gemini-pro モデルを使用し、startChat() を呼び出してチャットを初期化しています。
  *  次に、sendMessage() を使用して新しいユーザー メッセージを送信するようにしています。
* 少量のJavaScriptは、以下のために使っています。これが不要なら、フロントエンドは完全にJavaScriptなしとなるのですが。
  * [送信]ボタンをクリックしたあとのテキストエリアのクリア
  * [送信]ボタンをクリックしたあとのページ下部への自動スクロール
 
  ![image](https://github.com/pitang1965/geminikun/assets/47315420/e4607117-0088-4641-9a72-2f68bc93f49f)
