let start = 0;

let textoLogin = document.querySelector(".texto-login");
let textoCadastro = document.querySelector(".texto-cadastro");

let tituloEmail = document.querySelector(".titulo-email");
let tituloNome = document.querySelector(".titulo-nome");
let tituloSenha = document.querySelector(".titulo-senha"); 
let tituloConfirmarSenha = document.querySelector(".titulo-confirmar-senha"); 

let fieldEmail = document.querySelector(".field-email");
let fieldNome = document.querySelector(".field-nome");
let fieldSenha = document.querySelector(".field-senha");
let fieldConfirmarSenha = document.querySelector(".field-confirmar-senha");

let botaoCadastrar = document.querySelector(".botao-cadastrar");
let botaoEntrar = document.querySelector(".botao-entrar");

let atualizarEntrar = document.querySelector(".att-entrar");
let atualizarCadastrar = document.querySelector(".att-cadastrar");

botaoCadastrar.addEventListener("click", function () {
  signUp(fieldNome.value, fieldEmail.value, fieldSenha.value);
});

function atualizarPagina (tipoAtualizacao) {
  if(tipoAtualizacao == 'entrar') {
    atualizarEntrar.style.display = "none";
    atualizarCadastrar.style.display = "block";

    textoCadastro.style.display = "none";
    textoLogin.style.display = "block";

    tituloNome.style.display = "none";
    tituloConfirmarSenha.style.display = "none";

    fieldNome.style.display = "none";
    fieldConfirmarSenha.style.display = "none";

    botaoCadastrar.style.display = "none";
    botaoEntrar.style.display = "block";

    fieldNome.required = false; 
    fieldConfirmarSenha.required = false;

  }else{ //cadastrar
    atualizarEntrar.style.display = "block";
    atualizarCadastrar.style.display = "none";

    textoCadastro.style.display = "block";
    textoLogin.style.display = "none";

    tituloNome.style.display = "block";
    tituloConfirmarSenha.style.display = "block";

    fieldNome.style.display = "block";
    fieldConfirmarSenha.style.display = "block";

    botaoCadastrar.style.display = "block";
    botaoEntrar.style.display = "none";

    fieldNome.required = true; 
    fieldConfirmarSenha.required = true;
  }
}

if(start == 0){
  atualizarPagina("entrar");
  start++;
}

function acessarMenu(){
  window.location.href = '../index.html';
}