import * as shared from "./shared.js";

export function render() {
  let html = `
  <div id="kontakter">
  <div>Dette er et eksempel på brug af kontakter.</div>
  <button type="button" class="knap1 item">Hent kontakter</button>  
  </div>`;
  shared.skrivHTML("#app", html);

  document.querySelector("#app .knap1").onclick = async () => {
    alert("contacts" in navigator);
  };
}
