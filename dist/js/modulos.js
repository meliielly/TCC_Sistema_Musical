let pagAtual;
let numPagAtual;
let btAvancar = document.querySelector(".bt-avancar");
let btVoltar = document.querySelector(".bt-voltar");
let paginas = document.querySelectorAll(".page");

function verificarBotao() {
  let i = 0;
  
  for(i; i < paginas.length; i++){
    if(paginas[i].classList.contains("atual")){
      numPagAtual = i;
    }
  }

  if(i == 0){
    btVoltar.style.display = "none";
  }else {
    btVoltar.style.display = "block";
  }
  if(i == paginas.length - 1){
    btAvancar.style.display = "none";
  }else{
    btAvancar.style.display = "block";
  }
}

function verificarPagina() {
  paginas.forEach(pagina => {
    if(pagina.classList.contains("atual")){
      pagina.style.display = "block";
    }else{
      pagina.style.display = "none";
    }
  });
}

btAvancar.addEventListener("click", function(){

  verificarBotao();

  let verificarPag = 0;
  let cont = 0;

  paginas.forEach(pagina => {
    if(pagina.classList.contains("atual")){
      pagina.classList.remove("atual");
      pagAtual = pagina;
      verificarPag = cont;
    }
    cont++;
  });
  console.log(verificarPag);
  paginas[verificarPag+1].classList.add("atual");
  verificarPagina();
})

btVoltar.addEventListener("click", function(){

  let verificarPag = 0;
  let cont = 0;

  paginas.forEach(pagina => {
    if(pagina.classList.contains("atual")){
      pagina.classList.remove("atual");
      pagAtual = pagina;
      verificarPag = cont;
    }
    cont++;
  });
  paginas[verificarPag-1].classList.add("atual");
  verificarPagina();
})
