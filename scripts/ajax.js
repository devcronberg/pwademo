import * as shared from "./shared.js";

export async function render() {
  let html = `<div id="ajax">
  <div>Her kan du søge efter postnumre fundet i en JSON service fra <a target="_blank" href="https://dawa.aws.dk/">DAWA</a> 
  (se data <a href="https://dawa.aws.dk/Postnumre" target="_blank">her</a>). Data er offline cach'et (se evt. netværksfane i F12 tool).</div>
  <div class="item"><label>Søg by/postnummer</label></div>
  <div class="item"><input type="text" class="søg" placeholder="Søg" /> <button class="knap">Søg</button></div>
</div>
<div class="res"></div>`;
  shared.skrivHTML("#app", html);

  document.querySelector("#app .knap").onclick = async (i) => {
    let text = document.querySelector("#app .søg").value.toString().toLowerCase().trim();
    if (text === "") return;

    let response = await fetch("https://dawa.aws.dk/Postnumre");
    let postnumre = await response.json();

    let res = document.querySelector("#app .res");
    shared.skrivHTML(res, "");

    let ul = document.createElement("ul");
    postnumre.forEach((v) => {
      if (v.navn.toLowerCase().includes(text) || v.nr.includes(text)) {
        let li = document.createElement("li");
        li.innerHTML = v.nr + " " + v.navn;
        ul.appendChild(li);
        res.appendChild(ul);
      }
    });
  };
}
