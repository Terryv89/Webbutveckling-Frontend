let card = {
  color: "rött",
  type: "spader",
  number: 9,
};

console.log(card.color);

card.color = "svart";

delete card.number;

let obj = {
  sak: true,
  stor: true,
};

let arr = [obj, obj, obj, obj];

for (let obj of arr) {
  console.log(obj);
}

let cards = [card, card, card];

for (let card of cards) {
  console.log(card);
}

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}
