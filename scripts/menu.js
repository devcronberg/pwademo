import * as forside from "./forside.js";
import * as formular from "./formular.js";
import * as ajax from "./ajax.js";
import * as lokation from "./lokation.js";
import * as notifikation from "./notifikation.js";

export function render() {
  let erSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") == -1 &&
    navigator.userAgent.indexOf("FxiOS") == -1;

  let menu = [
    { navn: "Forside", komponent: forside, disabled: false },
    { navn: "Formular", komponent: formular, disabled: false },
    { navn: "Ajax", komponent: ajax, disabled: false },
    { navn: "Lokation", komponent: lokation, disabled: false },
    { navn: "Notifikation", komponent: notifikation, disabled: erSafari },
  ];

  menu.forEach((i) => {
    let b = document.createElement("button");
    b.innerHTML = i.navn;
    b.onclick = i.komponent.render;
    b.disabled = i.disabled;
    document.querySelector("#menu").appendChild(b);
  });
}

// Meget simpel route - for at checke shotcuts i manifest
if (window.location.href.includes("?formular")) {
  formular.render();
} else {
  forside.render();
}
