// Vanliga funktioner blir hoisted, vilket betyder att dom flyttas -
//  högst upp i klassen när dom läses in. så om variabler är under så fixas det
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}

getRandomNumber(6);

console.log(getRandomNumber(6));
console.log(getRandomNumber(555));
console.log(getRandomNumber(333));
console.log(getRandomNumber(62));

function getMeCoffe(drink, food) {
  return console.log("what drink do u want today " + drink + " and " + food);
}

getMeCoffe("öl", "korv");

// anynomus function
const multiply = function (a, b) {
  return a * b;
};

// göra om till arrow function
// getRandomNumber2();
function getRandomNumber2() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
// getRandomNumber2();
const getRandomNumber2 = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

const getRandomNumber2 = (upper) => {
  const randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
};
