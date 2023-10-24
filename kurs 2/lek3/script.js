function namePrinter(name, lastName) {
  console.log(`hi i´m ${name + lastName}  `);
}

namePrinter("terry ", "vanker");

function plus(nr1, nr2) {
  const sum = nr1 + nr2;

  return sum;
}

function showSum(sum) {
  console.log(sum);
}

const total = plus(2, 5);

showSum(total);
