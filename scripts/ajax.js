import * as shared from "./shared.js";

export async function render() {
  let html = `<div id="ajax">
  <div><label>Søg by/postnummer</label></div>
  <div><input type="text" class="søg" placeholder="Søg" /></div>
</div>
<div class="res"></div>`;
  shared.skrivHTML("#app", html);
  let response = await fetch("https://dawa.aws.dk/Postnumre");
  let postnumre = await response.json();
  document.querySelector("#app .søg").onkeyup = (i) => {
    let text = i.srcElement.value.trim().toLowerCase();
    let res = document.querySelector("#app .res");
    res.innerHTML = "";
    if (text.length > 1) {
      let ul = document.createElement("ul");
      postnumre.forEach((v) => {
        if (v.navn.toLowerCase().includes(text) || v.nr.includes(text)) {
          let li = document.createElement("li");
          li.innerHTML = v.nr + " " + v.navn;
          ul.appendChild(li);
          res.appendChild(ul);
        }
      });
    }
  };
}
// (async function () {
//   let sektion = document.querySelector("#sektion3");
//   let response = await fetch("https://dawa.aws.dk/Postnumre");
//   let postnumre = await response.json();
//   sektion.querySelector(".søg").onkeyup = (i) => {
//     let text = i.srcElement.value.trim().toLowerCase();
//     let res = sektion.querySelector(".res");
//     res.innerHTML = "";
//     if (text.length > 1) {
//       let ul = document.createElement("ul");
//       postnumre.forEach((v) => {
//         if (v.navn.toLowerCase().includes(text) || v.nr.includes(text)) {
//           let li = document.createElement("li");
//           li.innerHTML = v.nr + " " + v.navn;
//           ul.appendChild(li);
//           res.appendChild(ul);
//         }
//       });
//     }
//   };
// });
