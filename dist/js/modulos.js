let pagAtual;
let numPagAtual;
let btAvancar = document.querySelector(".bt-avancar");
let btVoltar = document.querySelector(".bt-voltar");
let btVerificar = document.querySelectorAll(".bt-verificar");
let btVerificarAtual = null;
let paginas = document.querySelectorAll(".page");
let alternativasAtual = new Array();
let exercicios = document.querySelectorAll(".exercicio");
let textoResposta = document.querySelectorAll(".texto-resposta");
let textoRespostaAtual = null;
let checkboxes = new Array();

document.addEventListener("DOMContentLoaded", function () {
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

      textoResposta.forEach(texto => {
        if (texto.parentElement.classList.contains("atual")) {
          textoRespostaAtual = texto;
        }
      });

      if (btVerificarAtual != undefined && pagina.classList.contains("atual")) {
        if (!btVerificarAtual.parentElement.classList.contains("ex-checkbox")) { }


      }

      if (btVerificarAtual != undefined && pagina.classList.contains("atual")) {

        btVerificarAtual.addEventListener("click", function () {
          if (!btVerificarAtual.parentElement.classList.contains("ex-checkbox")) {
            alternativasAtual.forEach(a => {
              if (a.checked) {
                textoRespostaAtual.style.display = "block";
                a.parentElement.classList.add("selecionada");
                if (a.classList.contains("correta")) {
                  textoRespostaAtual.textContent = "Parabéns!";
                } else {
                  textoRespostaAtual.textContent = "Poxa!";
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
            });
            mostrarReposta();

          } else {
            console.log("apertou");
            
            verificarCheckboxes();
          }

        });
      }
    }
  });
}

function verificarCheckboxes() {

  let i = 0;

  checkboxes.forEach(cb => {

    i++;
    if (cb.classList.contains("correta")) {
      //quantidadeCorretas++;
    }
     if (cb.checked) {
       textoRespostaAtual.style.display = "block";
       cb.parentElement.classList.add("selecionada");
       if (cb.classList.contains("correta")) {
         textoRespostaAtual.textContent = "Parabéns!";
       } else {
         textoRespostaAtual.textContent = "Poxa!";
       }
     }
    cb.disabled = true;
    btVerificarAtual.disabled = true;
    btAvancar.disabled = false;
    btAvancar.classList.add("btn-outline-primary");
    btAvancar.classList.remove("desabilitado");
    cb.parentElement.parentElement.parentElement.parentElement.classList.add(
      "concluido"
    );

    mostrarReposta();
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
      if (exercicio.classList.contains("ex-checkbox")) {
        checkboxes = document.querySelectorAll(`.alternativa-ex-${i}`);
      } else {
        alternativasAtual = document.querySelectorAll(`.alternativa-ex-${i}`);
      }
    }
  });

  alternativasAtual.forEach(a => {
    a.addEventListener("click", function () {
      btVerificarAtual.disabled = false;
    });
  });


  checkboxes.forEach(cb => {
    cb.addEventListener("click", function () {      
      btVerificarAtual.disabled = false;
    })
  });
}

function mostrarReposta() {
  paginas.forEach(pagina => {
    if (pagina.classList.contains("atual")) {
      if (!pagina.classList.contains("ex-checkbox")) {
        alternativasAtual.forEach(a => {
          if (a.classList.contains("correta")) {
            a.parentElement.style.backgroundColor = "#4aed7b";
          } else {
            a.parentElement.style.backgroundColor = "#f04646";
          }
        });
      } else {
        checkboxes.forEach(cb => {
          if (cb.classList.contains("correta")) {
            cb.parentElement.style.backgroundColor = "#4aed7b";
          } else {
            cb.parentElement.style.backgroundColor = "#f04646";
          }
        });
      }
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

btAvancar.addEventListener("click", function () {
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

btVoltar.addEventListener("click", function () {
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
