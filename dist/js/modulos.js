let pagAtual = document.querySelector(".atual");

function verificarPagina() {
  pagAtual.style.display = "block";
}

function avancarPagina(i) {
  pagAtual.classList.remove("atual");
  pagAtual.style.display = "none";
  if (pagAtual.classList.contains(`pag-${i}`)) {
    pagAtual = document.querySelector(`.pag-${i + 1}`);
    console.log(pagAtual);
  }

  verificarPagina();
}

function voltarPagina(i) {
  pagAtual.classList.remove("atual");
  pagAtual.style.display = "none";
  if (pagAtual.classList.contains(`pag-${i}`)) {
    pagAtual = document.querySelector(`.pag-${i - 1}`);
    console.log(pagAtual);
  }

  verificarPagina();
}
