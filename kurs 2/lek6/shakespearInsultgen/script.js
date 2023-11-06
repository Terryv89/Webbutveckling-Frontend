let insult1 = {
  insult:
    "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
  play: "Macbeth",
};

let insult2 = {
  insult: "Never hung poison on a fouler toad ",
  play: "Richard III",
};

let insult3 = {
  insult: "He thinks too much: such men are dangerous",
  play: "Julius Ceasar",
};

let insult4 = {
  insult:
    "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs",
  play: "The Merchant of Venice",
};

let insult5 = {
  insult: "Give me your hand...I can tell your fortune. You are a fool.",
  play: "The Two Noble Kinsmen",
};

let insult6 = {
  insult:
    "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
  play: "The Tempest",
};

let insult7 = {
  insult:
    "It is a tale Told by an idiot, full of sound and fury, Signifying nothing",
  play: "Macbeth",
};

let insult8 = {
  insult:
    "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.",
  play: "Macbeth",
};

let insult9 = {
  insult:
    "He hath eaten me out of house and home; he hath put all substance into that fat belly of his.",
  play: "Henry IV, Part 2",
};

let insult10 = {
  insult:
    "Out, you green-sickness carrion! Out, you baggage! You tallow-face! ",
  play: "Romeo and Juliet",
};

let textMain = document.querySelector("main");

let insultsArr = [
  insult1,
  insult2,
  insult3,
  insult4,
  insult5,
  insult6,
  insult7,
  insult8,
  insult9,
  insult10,
];

let secText = document.querySelector("section");
let pText = document.querySelector("p");

let copyArr = [...insultsArr];

function testar() {
  let random = Math.floor(Math.random() * insultsArr.length);
  textMain.innerHTML =
    insultsArr[random].insult + " by " + insultsArr[random].play;

  for (let i = 0; i < insultsArr.length; i++) {
    if (i === random) {
      insultsArr.splice(i, 1);
      pText.innerHTML = `the object that was deleted ${i}`;
    }
    secText.innerHTML = `There are  ${insultsArr.length} insults left `;
  }

  if (insultsArr.length === 0) {
    insultsArr = [...copyArr];
    //location.reload();
  }
}
/* bättre funktion än min 

function testar() {
  let random = Math.floor(Math.random() * insultsArr.length);
  textMain.innerHTML =
    insultsArr[random].insult + " by " + insultsArr[random].play;

  insultsArr.splice(random, 1);
  secText.innerHTML = `There are ${insultsArr.length} insults left`;

  if (insultsArr.length === 0) {
    insultsArr = [...copyArr];
    //location.reload();
  }
}

*/

/*
dela upp kod - importera i 2x scripts ORDNINGNEN SPELAR ROLL ! 
*/
