import * as shared from "./shared.js";

export function render() {
  let html = `<div  id="lokation"><button type="button" class="knap">Find lokation</button>
  <div class="lokation"></div>`;
  shared.skrivHTML("#app", html);
  document.querySelector("#app .knap").onclick = () => {
    navigator.geolocation.getCurrentPosition((p) => {
      let tekst = "";
      tekst += `<div>Breddegrad ${p.coords.latitude}</div>`;
      tekst += `<div>Længdegrad ${p.coords.longitude}</div>`;
      tekst += `<div>Nøjagtighed ${p.coords.accuracy}</div>`;
      tekst += `<div><a target="_blank" href="https://www.google.com/maps/place/${p.coords.latitude},${p.coords.longitude}">Link til Google Maps</a></div>`;
      shared.skrivHTML("#app .lokation", tekst);
    });
  };
}
