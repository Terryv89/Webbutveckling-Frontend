// 1

function myFunction1(name) {
  return console.log(name.length);
}

myFunction1("terry");

// 2

function myFunction2(date) {
  if (date.length === 10) {
    console.log(date.substring(0, 4)); // sätta in check för 10bokstäver string
  } else {
    console.log("to few signs");
  }
}

myFunction2("2020-10-14");

//3

function myFunction3(nr1, nr2, operator) {
  if (
    typeof nr1 === "number" &&
    typeof nr2 === "number" &&
    typeof operator === "string"
  ) {
  } else {
    console.log("wrong input");
  }

  let result;
  if (operator === "+") {
    result = nr1 + nr2;
  } else if (operator === "-") {
    result = nr1 - nr2;
  } else if (operator === "*") {
    result = nr1 * nr2;
  } else if (operator === "/") {
    result = nr1 / nr2;
  }

  return console.log(result);
}

myFunction3(3, 6, "*");

// 4 = klar

// 5
