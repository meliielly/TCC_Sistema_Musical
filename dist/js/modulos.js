let pagAtual;
let numPagAtual;
let btAvancar = document.querySelector(".bt-avancar");
let btVoltar = document.querySelector(".bt-voltar");
let btVerificar = document.querySelectorAll(".bt-verificar");
let btVerificarAtual = null;
let paginas = document.querySelectorAll(".page");
let alternativasAtual = new Array();
let exercicios = document.querySelectorAll(".exercicio");
let textoResposta = document.querySelector(".texto-resposta");

document.addEventListener("DOMContentLoaded", function() {
  verificarPagina();
});

function verificarBotao() {
  paginas.forEach(pagina => {
    if (pagina.classList.contains(`atual`)) {
      if (pagina.classList.contains(`page-1`)) {
        btVoltar.style.visibility = "hidden";
      } else {
        btVoltar.style.visibility = "visible";
      }

      if (pagina.classList.contains(`page-${paginas.length}`)) {
        btAvancar.style.visibility = "hidden";
      } else {
        btAvancar.style.visibility = "visible";
      }
    }
  });

  verificarBotaoAtual();
}

function verificarBotaoAtual() {
  paginas.forEach(pagina => {
    if (pagina.classList.contains("exercicio")) {
      btVerificar.forEach(botao => {
        if (botao.parentElement.classList.contains("atual")) {
          btVerificarAtual = botao;
        }
      });

      if (btVerificarAtual != undefined) {
        btVerificarAtual.addEventListener("click", function() {
          alternativasAtual.forEach(a => {
            if (a.checked) {
              textoResposta.style.display = "block";
              a.parentElement.classList.add("selecionada");
              if (a.classList.contains("correta")) {
                textoResposta.textContent = "Parabéns!";
              } else {
                textoResposta.textContent = "Poxa!";
              }
            }
            a.disabled = true;
            btVerificarAtual.disabled = true;
            btAvancar.disabled = false;
            btAvancar.classList.add("btn-outline-primary");
            btAvancar.classList.remove("desabilitado");
            a.parentElement.parentElement.parentElement.classList.add(
              "concluido"
            );
            mostrarReposta();
          });
        });
      }
    }
  });
}

function salvarAlternativas() {
  let i = 0;

  exercicios.forEach(exercicio => {
    i++;

    if (
      exercicio.classList.contains("atual") &&
      exercicio.classList.contains(`ex-${i}`)
    ) {
      alternativasAtual = document.querySelectorAll(`.alternativa-ex-${i}`);
    }
  });

  console.log(alternativasAtual);

  alternativasAtual.forEach(a => {
    a.addEventListener("click", function() {
      btVerificarAtual.disabled = false;
    });
  });
}

function mostrarReposta() {
  alternativasAtual.forEach(a => {
    if (a.classList.contains("correta")) {
      a.parentElement.style.backgroundColor = "green";
    } else {
      a.parentElement.style.backgroundColor = "red";
    }
  });
}

function verificarPagina() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

  verificarBotao();

  paginas.forEach(pagina => {
    if (pagina.classList.contains("atual")) {
      if (pagina.classList.contains("exercicio") == true &&
      !pagina.classList.contains("concluido") == true) {
        btAvancar.disabled = true;
        btAvancar.classList.remove("btn-outline-primary");
        btAvancar.classList.add("desabilitado");
        salvarAlternativas();
      } else {
        btAvancar.disabled = false;
        btAvancar.classList.add("btn-outline-primary");
        btAvancar.classList.remove("desabilitado");
      }

      pagina.style.display = "block";
    } else {
      pagina.style.display = "none";
    }
  });
}

btAvancar.addEventListener("click", function() {
  let verificarPag = 0;
  let cont = 0;

  paginas.forEach(pagina => {
    cont++;
    if (pagina.classList.contains("atual")) {
      pagina.classList.remove("atual");
      pagAtual = pagina;
      verificarPag = cont;
    }
  });
  paginas[verificarPag].classList.add("atual");

  verificarPagina();
});

btVoltar.addEventListener("click", function() {
  let verificarPag = 0;
  let cont = 0;

  paginas.forEach(pagina => {
    cont++;
    if (pagina.classList.contains("atual")) {
      pagina.classList.remove("atual");
      pagAtual = pagina;
      verificarPag = cont;
    }
  });
  paginas[verificarPag - 2].classList.add("atual");

  verificarPagina();
});

function playAudio(link) {
  var audio = new Audio(link);
  audio.play();
}
