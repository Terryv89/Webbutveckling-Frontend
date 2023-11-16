// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestions = [
  ["do i like pie?", "yes"],
  ["do i like gaming?", "yes"],
  ["do i like horses?", "no"],
];

const correctAnswArray = [];

const wrongAnswArray = [];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

// i = loopar varje array,
// let question i 0 tar varje elements 0, alltså frågorna
// answer tar varje arrays 1.a alltså svar
for (let i = 0; i < quizQuestions.length; i++) {
  let question = [quizQuestions[i][0]];
  let answer = quizQuestions[i][1];
  let response = prompt(question); // lägger in frågorna i promptar

  if (response === answer) {
    correctAnswers++;
    //correctAnswArray.push(question);
    correctAnswArray.push(quizQuestions[i][0]);
  } else {
    //wrongAnswArray.push(question);
    wrongAnswArray.push(quizQuestions[i][0]);
  }
}

function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1> you got ${correctAnswers} question(s) correct </h1>
  <h2> you got these questions right: </h2>
  <ol> ${createListItems(correctAnswArray)}</ol>

  <h2>You got these questions wrong: </h2>
  <ol>${createListItems(wrongAnswArray)}</ol>

  `;

document.querySelector("main").innerHTML = html;
