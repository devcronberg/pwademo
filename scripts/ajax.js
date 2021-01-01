import * as shared from "./shared.js";

export async function render() {
  let html = `<div id="ajax">
  <div>Her kan du søge efter postnumre fundet i en JSON service fra <a target="_blank" href="https://dawa.aws.dk/">DAWA</a> 
  (se data <a href="https://dawa.aws.dk/Postnumre" target="_blank">her</a>). Data er gemt i locale storage en dag.</div>
  <div class="item"><label>Søg by/postnummer</label></div>
  <div class="item"><input type="text" class="søg" placeholder="Søg" /> <button class="knap">Søg</button></div>
</div>
<div class="res"></div>
<div id="meddelelse"></div>
</div>
`;
  shared.skrivHTML("#app", html);

  document.querySelector("#app .knap").onclick = async (i) => {
    let text = document.querySelector("#app .søg").value.toString().toLowerCase().trim();
    if (text === "") return;

    let data = await findPostnumre();
    shared.skrivHTML("#app #meddelelse", data.meddelelse);

    let res = document.querySelector("#app .res");
    shared.skrivHTML(res, "");
    let ul = document.createElement("ul");
    data.postnumre.forEach((v) => {
      if (v.navn.toLowerCase().includes(text) || v.nr.includes(text)) {
        let li = document.createElement("li");
        li.innerHTML = v.nr + " " + v.navn;
        ul.appendChild(li);
        res.appendChild(ul);
      }
    });
  };

  async function findPostnumre() {
    let data = localStorage.getItem("postnumre");

    if (data == null) {
      let postnumre = await findPostnumre();
      let storage = { data: postnumre, tid: new Date().getTime() };
      localStorage.setItem("postnumre", JSON.stringify(storage));
      return {
        postnumre: postnumre,
        meddelelse: "Data hentet fra AWS.dk og gemt i localstorage",
      };
    } else if (new Date().getTime() - JSON.parse(data).tid > 8640000) {
      // en dag i ms
      let postnumre = await findPostnumre();
      let storage = { data: postnumre, tid: new Date().getTime() };
      localStorage.setItem("postnumre", JSON.stringify(storage));
      return {
        postnumre: postnumre,
        meddelelse: "Data opdateret fra AWS.dk og gemt i localstorage",
      };
    } else {
      data = JSON.parse(data);
      return { postnumre: data.data, meddelelse: "Data hentet fra localstorage" };
    }
  }

  async function hentPostnumre() {
    let response = await fetch("https://dawa.aws.dk/Postnumre");
    let postnumre = await response.json();
    return postnumre;
  }
}
