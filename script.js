const MODULO = document.getElementById("modulo");
const OGGETTO = document.getElementById("oggetto");
const DATA = document.getElementById("data");
const INSERISCI = document.getElementById("inserisci");
let arrayCoseDaFare = [];
console.log(arrayCoseDaFare);

MODULO.addEventListener("submit", (e) => {
  e.preventDefault();
});

INSERISCI.addEventListener("click", () => {
  if (OGGETTO.value === "") {
    return;
  } else if (OGGETTO.value.trim() === '') {
    OGGETTO.value = "";
    return;
  }

  if (arrayCoseDaFare.includes(OGGETTO.value) === true) {
    return;
  }

  arrayCoseDaFare.push(OGGETTO.value);
  console.log(arrayCoseDaFare);

  const ELEMENTO = document.createElement("div");
  ELEMENTO.className = "elemento";
  document.body.appendChild(ELEMENTO);

  const SPAN = document.createElement("span");
  SPAN.textContent = OGGETTO.value;
  ELEMENTO.appendChild(SPAN);

  if (DATA.value === "") {
  } else {
    const SPAN2 = document.createElement("span");
    const DATACOMPITO = new Date(DATA.value);
    SPAN2.textContent = `${DATACOMPITO.getDate()}/${
      DATACOMPITO.getMonth() + 1
    }/${DATACOMPITO.getFullYear()} - ${DATACOMPITO.getHours()}:${DATACOMPITO.getMinutes()}`;
    ELEMENTO.appendChild(SPAN2);
  }

  const ICONE = document.createElement("div");
  ICONE.className = "icone";
  ELEMENTO.appendChild(ICONE);

  const IMG_CHECK = document.createElement("img");
  IMG_CHECK.src = "assets/check-16.png";
  IMG_CHECK.alt = "icona check";
  ICONE.appendChild(IMG_CHECK);
  IMG_CHECK.addEventListener("click", () => {
    SPAN.classList.toggle("fatto");
  });

  const IMG_CROSS = document.createElement("img");
  IMG_CROSS.src = "assets/cross-16.png";
  IMG_CROSS.alt = "icona cross";
  ICONE.appendChild(IMG_CROSS);
  IMG_CROSS.addEventListener("click", () => {
    for (let i = 0; i < arrayCoseDaFare.length; i++) {
      if (arrayCoseDaFare[i] === SPAN.textContent) {
        arrayCoseDaFare.splice(i, 1);
        console.log(arrayCoseDaFare);
      }
    }
    ELEMENTO.remove();
  });

  OGGETTO.value = "";
  DATA.value = "";
});
