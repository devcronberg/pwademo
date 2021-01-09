import * as shared from "./shared.js";

export function render() {
  let html = `
  <div id="kontakter">
  <div>Dette er et eksempel på brug af kontakter. Hvis knappen er disabled er kontakt API ikke supporteret!</div>
  <button type="button" class="knap1 item">Hent kontakter</button>  
  <ul id="lstKontakter"></ul>
  </div>`;
  shared.skrivHTML("#app", html);
  if ("contacts" in navigator) {
    document.querySelector("#app .knap1").onclick = async () => {
      const k = await navigator.contacts.select(["name", "email"], { multiple: true });
      const ul = document.querySelector("#lstKontakter");
      ul.innerHTML = "";
      k.forEach((v) => {
        let li = document.createElement("li");
        let navn = v.name.join(" ");
        let email = v.email.join(" ");
        li.innerHTML = navn + " " + email;
        ul.appendChild(li);
      });
    };
  } else {
    document.querySelector("#app .knap1").disabled = true;
  }
}
