const readlineSync = require("readline-sync");

const questionsList = [
  {
    question: "Who is My favorite Enterprenur ? ",
    answer: "Ratan Tata",
  },
  {
    question: "Where do I live ? ",
    answer: "Mumbai",
  },
  {
    question: "Who is my favourite cricketer ? ",
    answer: "Dhoni",
  },
  {
    question: "What is my favourite programming language ? ",
    answer: "Javascript",
  },
  {
    question: "What is my Dream Company ? ",
    answer: "Own Startup",
  },
];

let score = 0;

function game(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(`Wowww... Its a Correct answer `);
    console.log("✔️ ");
    console.log("                 ");
  } else {
    console.log(`Oops ! you got it wrong`);
  }
  console.log(`BTW Your current score is ${score}`);
}

console.log(
  "Welcome to The-Game, Let's See How much do you know about be That what I like !"
);

let userName = readlineSync.question("So Let's Start, What is your name ? ");

console.log(`Okay ${userName}, let's begin the Game`);
console.log("                 ");

console.log("--------------------------------------");

for (let question of questionsList) {
  game(question.question, question.answer);
  console.log("--------------------------------------");
  console.log("                 ");
}

console.log(
  `Well Done !! ${userName} ! The-Game is completed, your final score is :- ${score}/5`
);
