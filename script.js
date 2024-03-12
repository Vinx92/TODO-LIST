let x = "Loremipsumdolorsitametdsssssssssssssssssss";
console.log(x.length);
function aggiungi() {
  const DIV_ELEMENTO = document.createElement('div')
  DIV_ELEMENTO.className = 'elemento'
  document.body.appendChild(DIV_ELEMENTO)

  const OGGETTO = document.getElementById("oggetto").value;
  const SPAN = document.createElement('span')
  SPAN.textContent = OGGETTO
  DIV_ELEMENTO.appendChild(SPAN)

  const DIV_ICONE = document.createElement('div')
  DIV_ELEMENTO.appendChild(DIV_ICONE)

  const IMG_CHECK = document.createElement('img')
  IMG_CHECK.src = 'assets/check-16.png'
  IMG_CHECK.alt = 'icona check'
  DIV_ICONE.appendChild(IMG_CHECK)

  const IMG_CROSS = document.createElement('img')
  IMG_CROSS.src = 'assets/cross-16.png'
  IMG_CROSS.alt = 'icona croce'
  DIV_ICONE.appendChild(IMG_CROSS)


}
