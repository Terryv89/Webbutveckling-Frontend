const API_KEY = "e40cf04c794fe64c831b4f9f10fa2d1a";
const BASE_URL = "https://api.flickr.com/services/rest";

const btn = document.querySelector("#click");
const inputElem = document.querySelector("#input");
const showPics = document.querySelector("#imageSection");
const showMore = document.querySelector("#showMore");

async function getPhotos() {
  const url = `${BASE_URL}?api_key=${API_KEY}&method=flickr.photos.search&text=${inputElem.value}&format=json&nojsoncallback=1`;
  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < 10; i++) {
    const image = data.photos.photo[i];
    const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
    console.log(imageUrl);
    const img = document.createElement("img");
    img.src = imageUrl;
    //sätter in img i showpics
    showPics.appendChild(img);
  }
}

showMore.addEventListener("click", getPhotos);

btn.addEventListener("click", () => {
  showPics.innerHTML = "";
  getPhotos();
  showMore.style.display = "block";
});
