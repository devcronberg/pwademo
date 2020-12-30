function vis(element) {
  element.style.display = "block";
}

function gem(element) {
  element.style.display = "none";
}

function findElement(element) {
  if (typeof element === "string") element = document.querySelector(element);
  return element;
}

export function gemAltBortsetFra(element, fokusTilKontrol) {
  document.querySelectorAll(".sektion").forEach((i) => gem(i));
  vis(findElement(element));
  if (fokusTilKontrol) {
    let e = document.querySelector(fokusTilKontrol);
    if (e) e.focus();
  }
}

export function skrivHTML(element, html) {
  let c = findElement(element);
  if (c) c.innerHTML = html;
}
