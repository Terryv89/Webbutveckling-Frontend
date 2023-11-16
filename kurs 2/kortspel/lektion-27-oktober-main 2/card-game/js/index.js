/**
Enkelt kortspel där spelaren gissar om nästa kort som dras ur högen
är högre, lägre eller likvärdigt. Poäng ges vid rätt gissning. 
Spelet är slut när kortleken är slut, eller man gissat fel 3 ggr.
*/

//vrf variabler, kalla på funktionen ist?
const deck = createDeck();
const currentCard = pickCard();

function createDeck() {
  let deck = [];
  const suits = ["&spades;", "&diams;", "&clubs;", "&hearts;"];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 2; j < 15; j++) {
      const card = {
        value: j,
        suits: suits[i],
        color: getColor(suits[i]),
        display: getDisplayValue(j),
      };
      deck.push(card);
    }
  }

  function getColor(suit) {
    if (suit === "&hearts;" || suits === "&diams;") {
      return "red";
    } else {
      return "black";
    }
  }
  function getDisplayValue(value) {
    if (value < 11) {
      return value;
    } else if (value === 11) {
      return "j";
    } else if (value === 12) {
      return "Q";
    } else if (value === 13) {
      return "K";
    } else if (value === 14) {
      return "A";
    }
  }
  return deck;
}

pickCard();
console.log(deck);
//splice ger en array card[0] blir splice itemet
function pickCard() {
  const randomPosition = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomPosition, 1);
  console.log(card);

  return card[0];
}

function showCard() {
  const cardElem = document.querySelector("#show-card");
  cardElem.innerHTML = `
    <section class="front">
        <headers><span class="${currentCard.color}>${currentCard.suit}</span></headers>
        <div></div>
        <footer></footer>
    </section>
    `;
}
