let pagAtual;
let numPagAtual;
let btAvancar = document.querySelector(".bt-avancar");
let btVoltar = document.querySelector(".bt-voltar");
let paginas = document.querySelectorAll(".page");

document.addEventListener("DOMContentLoaded", function() {
  verificarPagina();
});

function verificarBotao() {
  
  paginas.forEach(pagina => {

    if(pagina.classList.contains(`atual`)){
      if(pagina.classList.contains(`page-1`)){      
        btVoltar.style.visibility = "hidden";
      }else{     
        btVoltar.style.visibility = "visible";
      }    

      if(pagina.classList.contains(`page-${paginas.length}`)){
        btAvancar.style.visibility = "hidden";
      }else{
        btAvancar.style.visibility = "visible";
      }
    }
  });  
}

function verificarPagina() {

  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });

  verificarBotao();

  paginas.forEach(pagina => {
    if(pagina.classList.contains("atual")){
      
      pagina.style.display = "block";
    }else{
      pagina.style.display = "none";
    }
  });
}

btAvancar.addEventListener("click", function(){

  let verificarPag = 0;
  let cont = 0;

  paginas.forEach(pagina => {
    cont++;
    if(pagina.classList.contains("atual")){
      pagina.classList.remove("atual");
      pagAtual = pagina;
      verificarPag = cont;
    }
  });
  paginas[verificarPag].classList.add("atual");
  
  verificarPagina();
})

btVoltar.addEventListener("click", function(){

  let verificarPag = 0;
  let cont = 0;

  paginas.forEach(pagina => {

    cont++;
    if(pagina.classList.contains("atual")){
      pagina.classList.remove("atual");
      pagAtual = pagina;
      verificarPag = cont;
    }
  });
  paginas[verificarPag-2].classList.add("atual");

  verificarPagina();
})
