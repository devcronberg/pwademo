import * as shared from "./shared.js";

export function render() {
  let html = `
  <div id="fil">
  <div>Dette er et eksempel på brug af IO/File API.</div>
  <button type="button" class="knap1 item">Åbn fil</button>  
  <div id="filindhold" class="item"></div>
  </div>`;
  shared.skrivHTML("#app", html);

  document.querySelector("#app .knap1").onclick = async () => {
    const pickerOpts = {
      types: [
        {
          description: "Tekst",
          accept: {
            "txt/*": [".txt"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    };
    try {
      const [handle] = await window.showOpenFilePicker(pickerOpts);
      const fil = await handle.getFile();
      const indhold = await fil.text();
      document.querySelector("#filindhold").innerHTML = indhold.replace(/[\r\n]/g, "<br />");
    } catch (error) {
      document.querySelector("#filindhold").innerHTML = error;
    }
  };
}
