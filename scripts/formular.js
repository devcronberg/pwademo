import * as shared from "./shared.js";

export function render() {
  let html = `
<div id="formular">
  <div>
    <label>Tal</label>
    <input type="number" class="tal" placeholder="Tal" value="2" />
  </div>
  <div>
    <label>Opløftet i</label>
    <select class="opl">
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
  <div>
    <button type="button" class="knap">Beregn</button>
  </div>
  <div>
    <label>Resultat</label>
    <input type="number" class="resultat" placeholder="Resultat" readonly />
  </div>
</div>`;

  shared.skrivHTML("#app", html);
  document.querySelector("#app .knap").onclick = function () {
    try {
      let tal = parseInt(document.querySelector("#app .tal").value);
      if (isNaN(tal)) {
        document.querySelector("#app .resultat").value = "";
        return;
      }
      let opl = parseInt(document.querySelector("#app .opl").value);
      let res = Math.pow(tal, opl);
      document.querySelector("#app .resultat").value = res;
    } catch (e) {
      document.querySelector("#app .tal").value = "";
      document.querySelector("#app .resultat").value = "";
    }
  };
}
