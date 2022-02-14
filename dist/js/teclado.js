let partituras = document.querySelector(".partituras");
let imagens = document.querySelectorAll(".img");
let imgPrincipal = document.querySelector(".img-principal");
let botaoAbrirPartituras = document.querySelector(".bt-partitura");

const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);

function abrirPartituras(){
  console.log(botaoAbrirPartituras.textContent);
  if(botaoAbrirPartituras.textContent == 'abrir partituras'){
    partituras.style.display = 'block';
    botaoAbrirPartituras.textContent = 'fechar partituras'
  }
  else if(botaoAbrirPartituras.textContent == 'fechar partituras'){
    partituras.style.display = 'none';
    botaoAbrirPartituras.textContent = 'abrir partituras'
  }
  else if(botaoAbrirPartituras.textContent == 'fechar partitura'){
    partituras.style.display = 'none';
    imgPrincipal.style.display = "none";
    botaoAbrirPartituras.textContent = 'abrir partituras'
  }
}

imagens.forEach(imagem => {
  imagem.addEventListener("click", function(){
    if(imgPrincipal.lastChild != null){
      imgPrincipal.removeChild(imgPrincipal.lastChild);
    }
    imgPrincipal.style.display = "block";
    let src = imagem.src;
    let img = document.createElement("img");
    img.src = src;
    img.style.maxHeight = '400px';
    imgPrincipal.appendChild(img);
    partituras.style.display = 'none';
    botaoAbrirPartituras.textContent = 'fechar partitura'
  })
});



//fonte: https://codepen.io/gabrielcarol/pen/rGeEbY
//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
