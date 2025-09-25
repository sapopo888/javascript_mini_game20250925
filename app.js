const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれか？'
const answers = ['スーパーファミコン', 'プレイステーション２', 'Nintendo Switch', 'ニンテンドーDS'];
const correct = 'ニンテンドーDS'

const $button = document.getElementsByTagName('button');
console.log($button);

const setQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonNumber = 0;
  let buttonLength = $button.length;
  while (buttonNumber < buttonLength) {
    $button[buttonNumber].textContent = answers[buttonNumber];
    buttonNumber++;
  }
}
setQuiz();

// ボタンをクリックしたら正誤判定
for (let index = 0; index < answers.length; index++) {
  $button[index].addEventListener('click', () => {
    if (correct === $button[index].textContent) {
      window.alert('正解');
    } else {
      window.alert('不正解');
    }
  })
};
