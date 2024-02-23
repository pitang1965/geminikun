// HTMXの非同期リクエストが完了したあとに、テキストエリアの内容をクリアし、スクロール位置を調整

document.addEventListener('htmx:afterRequest', function (event) {
  var messageInput = document.getElementById('message-input');
  if (messageInput) {
    messageInput.value = ''; // テキストエリアの内容をクリア
  }
  // scrollToBottom();　機能しない
});

function scrollToBottom() {
  const container = document.getElementById('container');
  container.scrollTop = container.scrollHeight;
}
