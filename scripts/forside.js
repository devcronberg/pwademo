import * as shared from "./shared.js";

let html = `<div>Dette er et eksempel på en simpel PWA applikation. Den er skabt i forbindelse med en
  artikel skrevet af <a href="https://blog.cronberg.dk/om">Michell Cronberg</a> og bragt i
  <a href="https://www.aod.dk">Alt om DATA</a> i 2021.</div>
  <ul><li>Billeder/icon er fra <a href="https://favicon.io/emoji-favicons/test-tube">favicon.io</a></li>
  </ul>
  `;

export function render() {
  shared.skrivHTML("#app", html);
}
