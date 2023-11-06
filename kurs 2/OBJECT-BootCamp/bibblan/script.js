console.log(books);

let searchResult = document.querySelector("#searchReslut");
let searchInputElem = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => {
  bookSearch(searchInputElem);
});

function bookSearch(searchInputElem) {
  // let searchValue = document.querySelector("#searchInput"); funkar fast då utan parametrar
  let searchValue = searchInputElem.value;
  let message = `Sorry we didnt have ${searchValue}`;

  for (let i = 0; i < books.length; i++) {
    console.log(searchValue);

    if (searchValue === books[i].title) {
      message = `Yes we have ${searchValue}`;
      break;
    }
  }
  searchResult.textContent = message;
}
