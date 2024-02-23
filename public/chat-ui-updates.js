// HTMXの非同期リクエストが完了したあとに、テキストエリアの内容をクリア
document.addEventListener('htmx:afterRequest', function (event) {
  console.log('Hi!');
  var textInput = document.getElementById('text-input');
  if (textInput) {
    textInput.value = ''; // テキストエリアの内容をクリア
  }
});

