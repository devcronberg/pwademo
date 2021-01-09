import * as shared from "./shared.js";

export function render() {
  let html = `<div id="lokation">
  <div>Dette er et eksempel på brug af GeoLocationAPI som er en del af alle nye browsere. Ved første klik
  på knappen anmoder browseren om tilladelse til at levere geodata til JavaScript. OrientationAPI burde
  også virke på mobil.</div>
  <button type="button" class="knap item">Find lokation</button>
  <div class="lokation item"></div>
  <hr />
  <h4 class="item">Orientering</h4>
  <div  class="item">Alpha: <span id="alpha">0</span></div>
  <div  class="item">beta: <span id="beta">90</span></div>
  <div  class="item">gamma: <span id="gamma">0</span></div>
  </div>`;
  shared.skrivHTML("#app", html);
  document.querySelector("#app .knap").onclick = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      let tekst = "";
      tekst += `<div class"item">Breddegrad ${p.coords.latitude}</div>`;
      tekst += `<div class"item">Længdegrad ${p.coords.longitude}</div>`;
      tekst += `<div class"item">Nøjagtighed ${p.coords.accuracy}</div>`;
      tekst += `<div class"item"><a target="_blank" href="https://www.google.com/maps/place/${p.coords.latitude},${p.coords.longitude}">Link til Google Maps</a></div>`;
      shared.skrivHTML("#app .lokation", tekst);
    });
  };
}

window.addEventListener("deviceorientation", function (event) {
  document.querySelector("#alpha").innerHTML = event.alpha.toFixed(2);
  document.querySelector("#beta").innerHTML = event.beta.toFixed(2);
  document.querySelector("#gamma").innerHTML = event.gamma.toFixed(2);
});
