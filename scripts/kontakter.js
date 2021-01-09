import * as shared from "./shared.js";

export function render() {
  let html = `
  <div id="kontakter">
  <div>Dette er et eksempel på brug af kontakter.</div>
  <button type="button" class="knap1 item">Hent kontakter</button>  
  </div>`;
  shared.skrivHTML("#app", html);
  if ("contacts" in navigator) {
    document.querySelector("#app .knap1").onclick = async () => {
      const kontakt = await navigator.contacts.select(["name", "email"], { multiple: true });
      alert(kontakt.lenght);
    };
  } else {
    document.querySelector("#app .knap1").disabled = true;
  }
}
