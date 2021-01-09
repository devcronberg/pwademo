import * as forside from "./forside.js";
import * as formular from "./formular.js";
import * as ajax from "./ajax.js";
import * as lokation from "./lokation.js";
import * as notifikation from "./notifikation.js";
import * as kontakter from "./kontakter.js";

export function render() {
  let erSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") == -1 &&
    navigator.userAgent.indexOf("FxiOS") == -1;

  let menu = [
    { navn: "Forside", komponent: forside, disabled: false, hash: "forside" },
    { navn: "Formular", komponent: formular, disabled: false, hash: "formuar" },
    { navn: "Ajax", komponent: ajax, disabled: false, hash: "ajax" },
    { navn: "Lokation", komponent: lokation, disabled: false, hash: "lokation" },
    { navn: "Kontakter", komponent: kontakter, disabled: false, hash: "kontakter" },
    { navn: "Notifikation", komponent: notifikation, disabled: erSafari, hash: "notifikation" },
  ];

  menu.forEach((i) => {
    let b = document.createElement("button");
    b.innerHTML = i.navn;
    b.onclick = () => {
      window.location.hash = i.hash;
      i.komponent.render();
    };
    b.disabled = i.disabled;
    document.querySelector("#menu").appendChild(b);
  });
}

// Meget simpel route - for at checke shotcuts i manifest
if (window.location.hash) {
  skiftEfterHash(window.location.hash);
} else {
  forside.render();
}

function skiftEfterHash(hash) {
  if (hash.includes("formular")) {
    formular.render();
    return;
  }
  forside.render();
}

window.onhashchange = () => {
  skiftEfterHash(window.location.hash);
};
