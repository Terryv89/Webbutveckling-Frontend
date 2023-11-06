const printElem = document.querySelector("main");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
let isVisible = false;

btn4.addEventListener("click", () => {
  if (!isVisible) {
    getAttendies();
    printElem.style.display = "block";
  } else {
    printElem.style.display = "none";
  }
  isVisible = !isVisible;
});

btn3.addEventListener("click", () => {
  if (!isVisible) {
    getTheBooks();
    printElem.style.display = "block";
  } else {
    printElem.style.display = "none";
  }
  isVisible = !isVisible;
});

btn2.addEventListener("click", () => {
  if (!isVisible) {
    getTheDogs();
    printElem.style.display = "block";
  } else {
    printElem.style.display = "none";
  }
  isVisible = !isVisible;
});

btn1.addEventListener("click", () => {
  if (!isVisible) {
    getEmAll();
    printElem.style.display = "block";
  } else {
    printElem.style.display = "none";
  }
  isVisible = !isVisible;
});

// POKEMON API

function displayPokemons(pokemons) {
  let catchEmAll = "";

  for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
    catchEmAll += `
    <article>
        <h2>${pokemons[i].name}</h2>
    </article>
`;
  }
  printElem.innerHTML = catchEmAll;
}

async function getEmAll() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    const data = await response.json();
    console.log(data);
    displayPokemons(data);
  } catch (error) {
    console.log("The pokemons are hiding");
  }
}

// Doggydog

function displayDogs(dogs) {
  let allDogs = "";

  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
    allDogs += `
    <article>
        <h2>${dogs[i].name}</h2>
    </article>
`;
  }
  printElem.innerHTML = allDogs;
}

async function getTheDogs() {
  try {
    const response = await fetch("https://majazocom.github.io/Data/dogs.json");
    const data = await response.json();
    console.log(data);
    displayDogs(data);
  } catch (error) {
    console.log("The dogs are out");
  }
}

// uppg 3

function displayBooks(books) {
  let allBooks = "";

  for (let i = 0; i < books.length; i++) {
    if (books[i].pages < 500) {
      console.log(books[i]);
      allBooks += `
      <article>
          <h2>${books[i].title}</h2>
      </article>
  `;
    }
  }
  printElem.innerHTML = `
  <h1>these books have less then 500pages</h1>

  ${allBooks}`;
}

async function getTheBooks() {
  try {
    const response = await fetch("https://majazocom.github.io/Data/books.json");
    const data = await response.json();
    console.log(data);
    displayBooks(data);
  } catch (error) {
    console.log("The books are gone");
  }
}

// uppg 4

function displayAttendies(attendies) {
  let allAttendies = "";

  for (let i = 0; i < attendies.length; i++) {
    if (attendies[i].attending === true && attendies[i].allergies.length > 0) {
      console.log(attendies[i]);
      allAttendies += `
      <article>
          <h2>${attendies[i].name}</h2>
          <h2>allergies</h2>
          <h2>${attendies[i].allergies}</h2>

      </article>
  `;
    }
    printElem.innerHTML = `
  <h1>these people are attending</h1>

  ${allAttendies} 
  `;
  }
}
async function getAttendies() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/attendees.json"
    );
    const data = await response.json();
    console.log(data);
    displayAttendies(data);
  } catch (error) {
    console.log("error msg");
  }
}
