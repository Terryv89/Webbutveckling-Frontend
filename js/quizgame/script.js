const prompt = require("prompt-sync")();

console.log("       ");
console.log("Welcome to this computer hardware Quiz!");
let count = 0;
const totalQuestions = 3;

const answer1 = prompt("Do i like pie? ");
const correct_answer1 = "YES";

if (answer1.toUpperCase() === correct_answer1) {
  console.log("you got it correct!");
  console.log("GJ ! you got 1 point");
  count++;
} else {
  console.log("you got it wrong");
}
console.log(count);
console.log("The second question: ");

const answer2 = prompt("Do i eat breakfast? ");
const correct_answer2 = "NO";

if (answer2.toUpperCase() === correct_answer2) {
  console.log("You got it correct again!");
  console.log("Gj you got 1 more point!");
  count++;
} else {
  console.log("you got it wrong");
}
console.log(count);

console.log("The third question: ");

const answer3 = prompt("Do i like pizza ");
const correct_answer3 = "YES";

if (answer3.toUpperCase() === correct_answer3) {
  console.log("You got it correct again!");
  console.log("Gj you got 1 more point!");
  count++;
} else {
  console.log("you got it wrong");
}

const percent = Math.round((count / totalQuestions) * 100);

console.log("you got ", count, "correct answers");
console.log("your score is ", percent, " percentage");
