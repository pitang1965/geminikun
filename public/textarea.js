// テキストエリア #text-input でEnterキーを入力したら自動で高さを増やす
// CSSの新プロパティ(form-sizing?field-sizing)が使えるまでの対応

document.addEventListener('input', function (event) {
  if (event.target.id === 'text-input') {
    event.target.style.height = 'auto';  // 高さをリセット
    event.target.style.height = event.target.scrollHeight + 'px';  // 必要な高さに設定
  }
});
