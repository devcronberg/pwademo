import * as shared from "./shared.js";

export function render() {
  let html = `
  <div id="del">
  <div>Dette er et eksempel på brug af ShareAPI. Det virker kun på nyere mobil browsere</div>
  <div class="item"><input type="text" id="deltxt" value="del denne tekst" /></div>
  <div><button type="button" class="knap1 item">Del</button></div>  
  <div id="delmessage" class="item"></div>
  </div>`;
  shared.skrivHTML("#app", html);

  document.querySelector("#app .knap1").onclick = async () => {
    try {
      const shareData = {
        title: "PWADemo",
        text: document.querySelector("#deltxt").value,
        url: "",
      };
      await navigator.share(shareData);
      document.querySelector("#delmessage").innerText = "Tekst delt";
    } catch (err) {
      document.querySelector("#delmessage").innerText = err;
    }
  };
}
