import { render } from "./menu.js";

document.querySelector("#buildDate").innerHTML = "202101092251";

render();

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt");
  window.deferredPrompt = event;
  localStorage.setItem("appinstalled", false);
});

window.addEventListener("appinstalled", (event) => {
  console.log("appinstalled");
  localStorage.setItem("appinstalled", true);
});

document.querySelector("#install button").onclick = () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();
  promptEvent.userChoice.then((result) => {
    window.deferredPrompt = null;
    document.querySelector("#install").style.display = "none";
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  if (
    navigator.standalone ||
    window.matchMedia("(display-mode: standalone)").matches ||
    localStorage.getItem("appinstalled")
  ) {
    document.querySelector("#install").style.display = "none";
    window.resizeTo(800, 800);
  }
});
