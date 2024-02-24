# HTMXとGemini APIを用いたシンプルチャット
## 概要

* Googleの生成AIである[GeminiのAPI](https://ai.google.dev/tutorials?hl=ja)を[HTMX](https://htmx.org/)を使って作成したシンプルなチャットアプリです。

  ![image](https://github.com/pitang1965/geminikun/assets/47315420/e4607117-0088-4641-9a72-2f68bc93f49f)

* フロントエンドは、HTML, CSS, 少量のJavaScriptとHTMXを使用。
* バックエンドは、Node.jsのフレームワークの [express.js](https://expressjs.com/ja/)を使用。
* バックエンドからGeminiのAPIを呼び出しています。
  * 「◯◯だよー。」と言わせるようにしています。
  *  マルチターンの会話（チャットなど）を構築するには、gemini-pro モデルを使用し、startChat() を呼び出してチャットを初期化しています。
  *  次に、sendMessage() を使用して新しいユーザー メッセージを送信するようにしています。
* 少量のJavaScriptは、以下のために使っています。これが不要なら、フロントエンドは完全にJavaScriptなしとなるのですが。
  * [送信]ボタンをクリックしたあとのテキストエリアのクリア
  * [送信]ボタンをクリックしたあとのページ下部への自動スクロール
  * テキストエリア #message-input でEnterキーを入力したら自動で高さを増やす
 * Vercelにデプロイしています。

## 使用方法

* ChatGPTのように、聴きたいことなどを入力して[送信]ボタンをクリックします。
* 入力欄は最初1行ですが、Enterキーを押すことにより複数行の入力ができます。

## 環境変数

* Gemini APIを使うためのAPIキーの作成
  * [Google Developers Console](https://console.developers.google.com/project)にGoogleアカウントでサインアップします。既にアカウントを持っている場合は、そのアカウントでログインします。
  * https://aistudio.google.com/app/apikey でAPIキーを作成します。
* .envファイルを作り、APIキーを設定します。

```
API_KEY=******
PORT=3000
```

## 開始方法

* ソースコード一式を取得したら、環境変数を設定したあと、以下のコマンドを実行し、[localhost:3000](http://localhost:3000/) にアクセスしてください。

```
% npm install 又は pnpm install
% npm run start
```

## お願い
* 改善提案などありましたら、ぜひお願いいたします。
* https://twitter.com/pitang1965