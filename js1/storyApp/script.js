let verb = prompt("Ett verb");
let adjektiv = prompt("adjektiv");
let konsonant = prompt("konsonant");

let mening =
  "det var en gång en " +
  verb +
  " som gillade att " +
  adjektiv +
  " i sin " +
  konsonant;

const pElem = document.querySelector("p");

pElem.innerHTML = mening;

const answer = prompt("which planet is the closest to the sun?").toLowerCase();

if (answer === "mercury") {
  console.log("correct");
} else {
  console.log("not correct");
}

let correctGuess = false;
const number = 6;
const guess = prompt("Guess the nr 1-10");

if (guess === number) {
  correctGuess = true;
}

let str = "123";
let num = +str; // ett + framför strängen gör den till int

console.log(num); // Output: 123

let userName = "Terry"; // prompt
let password = "terry123"; //prompt

if (userName === "Terry" && password === "terry123") {
  console.log("welcome");
}
