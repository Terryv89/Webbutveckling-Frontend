const student = {
  name: "Terry",
  age: 34,
  grades: [85, 90, 96, 100],
};

const person = {
  name: "Edward",
  city: "Gothenburg",
  age: 33,
  isStudent: true,
  skills: ["java", "aws", "javascript", "mysql"],
  printName: function () {
    document.write("<h1>" + this.name + "</h1>");
  },
};
console.log(person.name);

person.printName(); // använder funktionen i objektet
console.log(person); // skriver ut objektet

const personProperties = Object.keys(person); //
console.log(personProperties); // skriver ut en array, kan lägga till .length

// bracket runt property för att hämta ut stringen, annars hämtar vi bara ut property
// för att hämta ett värde [] utan [] så får vi bara name nickname osv
for (let property in person) {
  console.log(`${property} : ${person[property]} `);
} // första loggen = name city osv,  2. hämtar stringsen

console.log(person.name); // loggar namn

console.log(person); // loggar hela objektet

person.nickname = "lisa"; // Lägger till en "punkt" i objektet
const message = `hi i´m ${person.name} also called ${person.nickname}.
I have ${person.skills.length} skills that are: ${person.skills.join(", ")}`; //  skriver ut skills + lägger till ", " mellan skillsen

const message2 = "Hi 2 im " + person.name;

console.log(message);
console.log(message2);

student.name = "lisa"; // ändrar namn
