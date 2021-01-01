import { render } from "./menu.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((r) => {
      // ok
    })
    .catch((e) => {
      // fejl
    });
}

render();
