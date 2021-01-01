import * as shared from "./shared.js";

export function render() {
  let html = `
  <div id="notifikation">
  <div>Dette er et eksempel på brug af Notification API og burde virke på på desktop og mobile (web og PWA - men ikke på Safari/IOS).</div>
  <button type="button" class="knap1 item">Tillad notifikation</button>
  <button type="button" class="knap2 item">Dan notifikation</button>
  </div>`;
  shared.skrivHTML("#app", html);
  document.querySelector("#app .knap2").disabled = true;

  if (Notification.permission == "granted") {
    document.querySelector("#app .knap1").disabled = true;
    document.querySelector("#app .knap2").disabled = false;
  } else {
    document.querySelector("#app .knap1").onclick = async () => {
      let n = await Notification.requestPermission();
      if (n === "granted") {
        document.querySelector("#app .knap1").disabled = true;
        document.querySelector("#app .knap2").disabled = false;
      }
    };
  }

  document.querySelector("#app .knap2").onclick = async () => {
    if (Notification.permission == "granted") {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        reg.showNotification("PWA Demo", {
          body:
            "Dette er et eksempel på en notifikation. Den er dannet " +
            new Date().toLocaleTimeString(),
          icon: "/images/pwa192.png",
        });
      });
    }
  };
}
