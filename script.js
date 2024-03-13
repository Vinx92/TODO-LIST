let arrayTODO = [];
const FORM = document.getElementById("form")
FORM.addEventListener("submit", (event) => aggiungi(event))

function aggiungi(event) {
  event.preventDefault();
  const OGGETTO = document.getElementById("oggetto");
  if (OGGETTO.value === '') {
    return
  }

  if (arrayTODO.includes(OGGETTO.value)) {
    return
  }

  arrayTODO.push(OGGETTO.value)

  const DIV_ELEMENTO = document.createElement("div");
  DIV_ELEMENTO.className = "elemento";
  document.body.appendChild(DIV_ELEMENTO);

  const SPAN = document.createElement("span");
  SPAN.textContent = OGGETTO.value;
  DIV_ELEMENTO.appendChild(SPAN);

  const DIV_ICONE = document.createElement("div");
  DIV_ICONE.className = "icone";
  DIV_ELEMENTO.appendChild(DIV_ICONE);

  const IMG_CHECK = document.createElement("img");
  IMG_CHECK.addEventListener("click", () => {
    SPAN.classList.toggle('check')
  });

  IMG_CHECK.src = "assets/check-16.png";
  IMG_CHECK.alt = "icona check";
  DIV_ICONE.appendChild(IMG_CHECK);

  const IMG_CROSS = document.createElement("img");
  IMG_CROSS.addEventListener("click", () => {
    DIV_ELEMENTO.remove();
    for (let i = 0; i <= arrayTODO.length; i++) {
      if (arrayTODO.indexOf(OGGETTO.value) === i) {
        arrayTODO.splice(i, 1)
      }
    }
  });
  IMG_CROSS.src = "assets/cross-16.png";
  IMG_CROSS.alt = "icona croce";
  DIV_ICONE.appendChild(IMG_CROSS);
  OGGETTO.value = ""
}
