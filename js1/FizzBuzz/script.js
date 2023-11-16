let fizz_array = [];

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizz_array.push("fizzbuzz");
    } else if (i % 5 === 0) {
      fizz_array.push("buzz");
    } else if (i % 3 === 0) {
      fizz_array.push("fizz");
    } else {
      fizz_array.push(i);
    }
  }
  return fizz_array;
}

console.log(fizzBuzz());

function levelUp() {
  let counts = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0,
  };

  for (let i = 0; i < fizz_array.length; i++) {
    if (fizz_array[i] === "fizzbuzz") {
      counts.fizzbuzz++;
    } else if (fizz_array[i] === "buzz") {
      counts.buzz++;
    } else if (fizz_array[i] === "fizz") {
      counts.fizz++;
    }
  }
  return counts;
}

console.log(levelUp());
