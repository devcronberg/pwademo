import * as shared from "./shared.js";

let html = `<div>Dette er et eksempel på en simpel PWA applikation. Den er skabt i forbindelse med en
  artikel skrevet af <a href="https://blog.cronberg.dk/om">Michell Cronberg</a> og bragt i
  <a href="https://www.aod.dk">Alt om DATA</a> i 2021.</div>
  <ul>
  <li>Applikationen er en typisk SPA (Single Page Application) men er skabt uden brug af eksterne frameworks (som Vue, Angular mv). Dette 
  er gjort for at simplificere koden så meget som muligt</li>
  <li>Check de eksempler ved at benytte menuen øverst</li>
  <li>Find kode og link til en distribueret version hos <a href="https://github.com/devcronberg/pwademo">GitHub</a></li>
  <li>Billeder/icon er fra <a href="https://favicon.io/emoji-favicons/test-tube">favicon.io</a></li>
  <li>IOs splash screens er fra <a href="https://appsco.pe/developer/splash-screens">appsco.pe/developer</a></li>
  <li>Applikationen indeholder oplysninger (postnumre) fra Danmarks Adressers Web API (DAWA), som Styrelsen for
   Dataforsyning og Effektivisering (SDFE) har ansvaret for. Se mere på <a href="https://dawa.aws.dk/">aws.dk</a>.
   Data er offline cach'et for at undgå for mange kald mod aws.dk
   </li>
  </ul>
  `;

export function render() {
  shared.skrivHTML("#app", html);
}
