let myName = "Terry";
let age = 34;

console.log(myName + age);

let a = 10;
let b = 20;

if (a > b) {
  console.log("a is bigger");
} else {
  console.log("b is bigger");
}

let c = "apple";
let d = "pear";

if (c === d) {
  console.log("they are the same");
} else {
  console.log("not the same");
}

let nrOne = 20;
let nrTwo = 25;
let stortTal;

if (nrOne > nrTwo) {
  stortTal = nrOne;
  console.log(stortTal + " is biggest");
} else if (nrTwo > nrOne) {
  stortTal = nrTwo;
  console.log(stortTal + " is biggest");
}

let number = 12;

if (number % 2 === 0) {
  console.log("Jämnt");
} else {
  console.log("Udda");
}

let minHeight = 150; // true
let height = 160; //true
let toShort = 130; //false

if (height >= minHeight) {
  console.log(true);
} else {
  console.log(false);
}

let akpass = large; // kan ändra variabel till de man vill

if (akpass === "large" || akpass === "platinum") {
  console.log("Du får åka balder");
} else {
  console.log("Du får inte åka balder");
}

let yourWeight = prompt("skriv in din vikt");
let yourHeight = prompt("skriv din längd");

let bmi = yourWeight / (yourHeight * yourHeight);

if (bmi <= 19) {
  console.log("undervikt");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("normalvikt");
} else if (bmi >= 25 && bmi < 30) {
  console.log("övervikt");
} else if (bmi >= 30) {
  console.log("fetma");
}
