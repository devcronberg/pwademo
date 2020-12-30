import * as forside from "./forside.js";
import * as formular from "./formular.js";
import * as ajax from "./ajax.js";
import * as lokation from "./lokation.js";
import * as notifikation from "./notifikation.js";

export function render() {
  let menu = [
    { navn: "Forside", komponent: forside },
    { navn: "Formular", komponent: formular },
    { navn: "Ajax", komponent: ajax },
    { navn: "Lokation", komponent: lokation },
    { navn: "Notifikation", komponent: notifikation },
  ];

  menu.forEach((i) => {
    let b = document.createElement("button");
    b.innerHTML = i.navn;
    b.onclick = i.komponent.render;
    document.querySelector("#menu").appendChild(b);
  });
}

forside.render();
