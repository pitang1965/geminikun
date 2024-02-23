// HTMXの非同期リクエストが完了したあとに、テキストエリアの内容をクリアし、スクロール位置を調整

document.addEventListener('htmx:afterSwap', function (event) {
  var messageInput = document.getElementById('message-input');
  if (messageInput) {
    messageInput.value = ''; // テキストエリアの内容をクリア
  }
  setTimeout(function () {
    scrollToBottom();
  }, 300); // 0.3秒 = 300ミリ秒
});

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth', // スムーズなスクロールを実現
  });
}
