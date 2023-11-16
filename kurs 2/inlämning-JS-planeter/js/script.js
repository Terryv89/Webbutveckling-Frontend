const BASE_URL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/";

const solen = document.querySelector("#solen");
const merkurius = document.querySelector("#merkurius");
const venus = document.querySelector("#venus");
const jorden = document.querySelector("#jorden");
const mars = document.querySelector("#mars");
const jupiter = document.querySelector("#jupiter");
const saturnus = document.querySelector("#saturnus");
const uranus = document.querySelector("#uranus");
const neptunus = document.querySelector("#neptunus");
const modalInnerText = document.querySelector("#modal");

//Hämtar nyckel och returnar den
async function getApiKey() {
  const url = `${BASE_URL}keys`;
  try {
    const resp = await fetch(url, {
      method: "POST",
    });

    if (resp.ok) {
      const data = await resp.json();
      return data.key;
    } else {
      console.error("Error:", resp.status, resp.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
// Hämtar planeterna ifrån api.et lägger in api nnyckeln som parameter som vi passar in
// och vid val av planet så printar vi  info
async function getPlanets(apiKey, clickedBtn) {
  const url = `${BASE_URL}bodies`;
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "x-zocom": apiKey,
      },
    });

    if (resp.ok) {
      const responseJson = await resp.json();
      const planets = responseJson.bodies;
      for (let i = 0; i < planets.length; i++) {
        if (clickedBtn === planets[i].name) {
          modalInnerText.innerHTML = `
          <div class="modal-inside-wrapper">
          <h1 class="modal-title">${planets[i].name}</h1>
          <h3 class="modal-undertitle">${planets[i].latinName}</h3>
          <p class="modal-desc">${planets[i].desc}</p>
          <hr>
          <div class="modal-grid">
          <div>
            <span class="mini-title">Omkrets</span> 
            <p class="area">${planets[i].circumference}  </p>
          </div>
          <div>
            <span class="mini-title">KM FRÅN SOLEN</span>
            <p class="distance"> ${planets[i].distance}</p>
          </div>
          <div>
            <span class="mini-title">MAX TEMPERATUR</span>
            <p class="day-temp"> ${planets[i].temp.day}</p>
          </div>
          <div>
            <span class="mini-title">MIN TEMPERATUR</span> 
            <p class="night-temp">${planets[i].temp.night}</p>
          </div>
          </div>
          <hr>
          <div>
          <span class="mini-title">MÅNAR</span>
          <p class="moons"> ${planets[i].moons.join(", ")}</p>
        </div>
          
          </div>
          `;
          console.log(
            "inne i clicked === plan " + clickedBtn + JSON.stringify(planets[i])
          );
        }
      }
    } else {
      console.error("Error:", resp.status, resp.statusText);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// denna funktion hjälper till att styra flödet
// funktionen anroppar getapi key om de lyckas så kör vi get planets med apikey och val av planet
async function getData(clickedBtn) {
  try {
    const apiKey = await getApiKey(); // hämta api nyckel ifrån fetchapikey
    if (apiKey) {
      await getPlanets(apiKey, clickedBtn); // skciak med apikey + clickedbtn
    } else {
      console.log("Failed to obtain API key.");
    }
  } catch (error) {
    console.error("Error :", error);
  }
}
