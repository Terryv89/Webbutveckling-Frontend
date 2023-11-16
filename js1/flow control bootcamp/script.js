// FLOW CONTROL BOOT CAMP

// :1 Bigger

/*
let a = 10;
let b = 20;

function biggerNr(a, b) {
  if (a > b) {
    document.getElementById("print").innerHTML("A is bigger");
  } else {
    document.getElementById("print").innerHTML("B is bigger");
  }
}    
biggerNr();

*/
// bigger
let a = 10;
let b = 20;

if (a > b) {
  console.log("A is bigger");
} else {
  console.log("B is bigger");
}

// apple´s

let c = "apple";
let d = "pear";

if (c === d) {
  console.log("whaaaaat");
} else {
  console.log("not the same");
}

// Biggernr

const number1 = prompt("write your first nr: ");
const number2 = prompt("write your second nr: ");

if (number1 > number2) {
  console.log(number1 + " Is bigger");
} else {
  console.log(number2 + " is bigger");
}

// EVEN OR NUT
let nr = 3; // byt variabel vid behov

if (nr % 2 === 0) {
  console.log("its even");
} else {
  console.log("not even");
}

// LISERBERGSVAKTEN

let minHeight = 150;
let yourHeight = 130;

if (yourHeight >= minHeight) {
  console.log("lets a goooooo");
} else {
  console.log("sorry shorty");
}

// LISEBERGSVAKTEN 2

let akband = "small";

if (akband === "large" || akband === "platinum") {
  console.log("lets a gooooooo");
} else {
  console.log("sowwy");
}

// BMI KALK

let weight = 80;
let lenght = 1.7; // i cm får man lägga till *100 för att få rätt uträkning

let bmi = weight / (lenght * lenght);

if (bmi < 18.5) {
  console.log("skinny bitch");
} else if ((bmi) => 18.5 && bmi <= 25) {
  console.log(bmi);
  console.log("Normalvikt");
} else if ((bmi) => 25 && bmi <= 30) {
  console.log("övervikt");
} else if (bmi >= 30) {
  console.log("thick");
}

// SWITCH WEEKDAYS

let weekdays = "friday"; // Kan ändra till prompt   och även till siffra, ändra då även case till siffra

switch (weekdays) {
  case "monday":
    console.log("Today is Monday");
    break;

  case "tuesday":
    console.log("Today is Tuesday");
    break;

  case "wednesday":
    console.log("Today is Wednesday");
    break;

  case "thursday":
    console.log("Today is Thursday");
    break;

  case "friday":
    console.log("Today is Friday");
    break;

  case "saturday":
    console.log("Today is Saturday");
    break;

  case "sunday":
    console.log("Today is Sunday");
    break;

  default:
    console.log("your didnt enter a weekday");
}

let month = 6;
//month
switch (month) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Mars");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Maj");
    break;
  case 6:
    console.log("Juni");
    break;
  case 7:
    console.log("Juli");
    break;
  case 8:
    console.log("Augusti");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Oktober");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("false");
}

/*
let vaken = "nej";

switch (vaken) {
  case "ja":
    console.log("Så klart redan sprungit milen");
    break;

  case "nej":
    console.log("Ska bara sova liiiiite till");
    break;

  case "kanske":
    console.log(" :p ");
    break; 
}
 */
