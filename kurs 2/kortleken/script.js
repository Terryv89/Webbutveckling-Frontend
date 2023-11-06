const suits = ["&spades;", "&diams;", "&clubs;", "&hearts;"];

// value är värdet du vill använda. Name är det du vill visa användaren. array med objekt i sig
const ranks = [
  { value: 2, name: "2" },
  { value: 3, name: "3" },
  { value: 4, name: "4" },
  { value: 5, name: "5" },
  { value: 6, name: "6" },
  { value: 7, name: "7" },
  { value: 8, name: "8" },
  { value: 9, name: "9" },
  { value: 10, name: "10" },
  { value: 11, name: "J" },
  { value: 12, name: "Q" },
  { value: 13, name: "K" },
  { value: 14, name: "A" },
];

document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <button id="generate_deck">Generate Deck</button>
      <button id="shuffle_deck">Shuffle Deck</button>
      <button id="sort_deck">Sort Deck</button>
    </div>
    <div id="cards" />
  </div>
`;

// join tar bort ett kommatecken
function displayDeck(deck) {
  const cardsEle = document.querySelector("#cards");
  const cardsAsHtml = deck
    .map(
      (card) => `<article class="card ${suitToColor(card.suit)}">
    <aside class="top">${card.suit}</aside>
    <h1>${card.name}</h1>
    <aside class="bottom">${card.suit}</aside>
  </article>`
    )
    .join("  ");

  cardsEle.innerHTML = cardsAsHtml;
}

//sätter färg på grejerna
function suitToColor(suit) {
  if (suit === "&spades;" || suit === "&clubs;") {
    return "black";
  } else {
    return "red";
  }
}

// eventlisteners för knapparna
function setUpDeck() {
  const generateDeckEle = document.querySelector("#generate_deck");
  generateDeckEle.addEventListener("click", () => generateDeck());

  const shuffleDeckEle = document.querySelector("#shuffle_deck");
  shuffleDeckEle.addEventListener("click", () => shuffleDeck());

  const sortDeckEle = document.querySelector("#sort_deck");
  sortDeckEle.addEventListener("click", () => sortDeck());
}
setUpDeck();

// ska vara tillgänglig globalt
let deck = [];

/* För varje suit gå igenom(ranks.map) alla ranker och populera med suit. 
hade vi bara kört map på suits skulle resultatet vara
  [
    [{name: "2", value: 2, suit: "&spades;"}, {name: "3", value: 3, suit: "&spades;"}...osv],
    [{name: "2", value: 2, suit: "&diams;"}, {name: "3", value: 3, suit: "&diams;"}...osv ] 
  ]
  därför kör vi flatMap som plattar en array av array till ett array med alla items.
  [
    {name: "2", value: 2, suit: "&spades;"}, {name: "3", value: 3, suit: "&spades;"},
    {name: "2", value: 2, suit: "&diams;"}, {name: "3", value: 3, suit: "&diams;"}...osv
  ]
*/
function generateDeck() {
  deck = suits.flatMap((suit) => {
    return ranks.map((rank) => ({ ...rank, suit }));
  });

  displayDeck(deck);
}

// Sort funkar så att den sorterar baserat på om resultatet är > eller < mindre än 0, måste kunna bli minus tal
// Då kan vi använda Math.random() som har lika stor chans att hamna över som under 0. Till att randomizera ordningen.
// kanske inte blir helt 100 random som om man hade kört Fisher-Yates algo
function shuffleDeck() {
  deck = deck.sort(() => Math.random() * 2 - 1);
  displayDeck(deck);
}

// Sortera korten först kollar vi om deras suit är samma. Om den är det sorterar vi baserat på value.
// Är det olika suit så sorterar vi baserat på ordningen de ligger i suits arrayen.
//cardA / cardB är värden ifrån kortleken som jämförs
function sortDeck() {
  deck = deck.sort((cardA, cardB) => {
    if (cardA.suit === cardB.suit) {
      return cardA.value - cardB.value;
    }
    return suits.indexOf(cardA.suit) - suits.indexOf(cardB.suit);
  });
  displayDeck(deck);
}

// Todo grida columns 13fr rows 4
// lägga över html till index.html
