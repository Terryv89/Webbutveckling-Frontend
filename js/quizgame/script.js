const prompt = require("prompt-sync")();

console.log("Welcome to this computer hardware Quiz!");
let count = 0;

const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "CPU";

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
