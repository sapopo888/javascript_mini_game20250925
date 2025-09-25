const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれか？'
const answers = ['スーパーファミコン', 'プレイステーション２', 'Nintendo Switch', 'ニンテンドーDS'];
const correct = 'ニンテンドーDS'

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


// クイズの問題文、選択肢を定義
const setQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonNumber = 0;
  while (buttonNumber < buttonLength) {
    $button[buttonNumber].textContent = answers[buttonNumber];
    buttonNumber++;
  }
}
setQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
};

// ボタンをクリックしたら正誤判定
for (let index = 0; index < buttonLength; index++) {
  $button[index].addEventListener('click', (e) => {
    clickHandler(e);
  })
};
