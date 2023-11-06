// resolved
let myPromise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve(console.log("promise resolved"));
  } else {
    reject("promise rejected");
  }
});

// rejected

let myRejectedPromise = new Promise((resolve, reject) => {
  let b = 2 + 2;
  if (b === 3) {
    resolve("promise resolved");
  } else {
    reject(console.log("promise rejected"));
  }
});

// pending

const newPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 2000);
});

console.log("[After promise initialization]", newPromise);

setTimeout(() => console.log("[After resolve callback run]", newPromise), 2000);

// polka

function letsDance(danceStyle) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (danceStyle === "polka") {
        resolve("Yes, polka is my thing!");
      } else {
        reject("Nope");
      }
    }, 2000);
  });
}
letsDance("hiphop")
  .then((response) => {
    console.log(response);
  })
  .catch((reject) => {
    console.log(reject);
  });
