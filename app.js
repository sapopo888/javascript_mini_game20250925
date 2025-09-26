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

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setQuiz = () => {
  let buttonNumber = 0;
  document.getElementById("js-question").textContent = question;
  while (buttonNumber < buttonLength) {
    $button[buttonNumber].textContent = answers[buttonNumber];
    buttonNumber++;
  }
};
setQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
};

// ボタンをクリックしたら正誤判定
for (let index = 0; index < buttonLength; index++) {
  $button[index].addEventListener("click", (e) => {
    clickHandler(e);
  });
}
