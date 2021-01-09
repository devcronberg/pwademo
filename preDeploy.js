(async function () {
  const fs = require("fs");

  replaceDateTime("./scripts/index.js", 89);
  replaceDateTime("./sw.js", 24);

  function replaceDateTime(fileName, index) {
    fs.readFile(fileName, "utf8", (e, c) => {
      c = c.substring(0, index) + getDateTime() + c.substring(index + 12);
      fs.writeFile(fileName, c, function () {
        console.log(fileName + " saved");
      });
    });
  }

  function pad2(n) {
    return n < 10 ? "0" + n : n;
  }

  function getDateTime() {
    let date = new Date();
    date =
      date.getFullYear().toString() +
      pad2(date.getMonth() + 1) +
      pad2(date.getDate()) +
      pad2(date.getHours()) +
      pad2(date.getMinutes());
    return date;
  }
})();
