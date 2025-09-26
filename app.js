const quiz = [
  {
    question: "What color do I like the most?",
    answers: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
    ],
    correct: "Blue",
  },
  {
    question: "What do I like doing the most？",
    answers: [
      "Seeing a movie",
      "Taking a walk",
      "Studying foreign languages",
      "Doing yoga",
    ],
    correct: "Doing yoga",
  },
  {
    question: "Who do I seem to the most？",
    answers: [
      "My father",
      "My mother",
      "My grandfather",
      "My grandmother",
    ],
    correct: "My father",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0; // 正解数の変数

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setQuiz = () => {
  let buttonNumber = 0;
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  while (buttonNumber < buttonLength) {
    $button[buttonNumber].textContent = quiz[quizIndex].answers[buttonNumber];
    buttonNumber++;
  }
};
setQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++; // ここでクイズを次に進める

  if(quizIndex < quizLength){
    // まだ問題が残っている
    setQuiz(); // 問題文や選択肢の書き換えを行なっている関数をここで呼ぶ
  } else {
    // もう問題が残っていない
    window.alert(`終了！あなたの正解数は${score}/${quizLength}問でした！`)
  }
};

// ボタンをクリックしたら正誤判定
for (let index = 0; index < buttonLength; index++) {
  $button[index].addEventListener("click", (e) => {
    clickHandler(e);
  });
}
