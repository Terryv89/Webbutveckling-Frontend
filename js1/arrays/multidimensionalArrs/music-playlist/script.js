const playlist = [
  ["So what", "Miles Davis", "9.04"],
  ["Respect", "Aretha Franklin", "2.45"],
  ["My heroine", "SilverStein", "4.33"],
  ["At Last", "Ella Fitzgerald", "4:18"],
  ["Three Little Birds", "Bob Marley and the Wailers", "3:01"],
  ["The Way You Look Tonight", "Frank Sinatra", "3:21"],
];

//rad 0 index 1 = Miles davis
const myArtists = `${playlist[0][1]}, ${playlist[2][1]},
${playlist[4][1]}
}`;

console.log(myArtists);

// i loopar arraysen 1-6 siffrorna går in i arrayen och väljer element
// 0 title, 1 artist, 2 längd
function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i][0]} by ${arr[i][1]}, length : ${arr[i][2]}</li>`;
  }
  return items;
}

document.querySelector("main").innerHTML = `
    <ol>
      ${createListItems(playlist)}
    </ol>
  `;
