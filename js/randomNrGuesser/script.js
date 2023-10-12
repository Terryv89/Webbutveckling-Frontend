const target = Math.round(Math.random() * 100);

let guesses = 0;
console.log(target);

while (true) {
  guesses++;
  const guess = Number(prompt("Guess the number (0-100): "));

  if (guess > target) {
    console.log("your guess is to high");
  } else if (guess < target) {
    console.log("your guess is to low");
  } else {
    console.log("Correct answer!");
    break;
  }
}

console.log("It took you", guesses, "guesses to get it right, gj");
