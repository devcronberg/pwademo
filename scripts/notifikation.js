import * as shared from "./shared.js";

export function render() {
  let html = `<button type="button" class="knap1">Tillad notifikation</button>
  <button type="button" class="knap2">Dan notifikation</button>`;
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
    new Notification("Notifikation", { body: "Test af notifikation" });
  };
}
