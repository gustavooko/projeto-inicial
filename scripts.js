var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email =  document.getElementById("email");

var telefone =  document.getElementById("telefone");

var CEP =  document.getElementById("CEP");

var Logradouro =  document.getElementById("Logradouro");

var Número =  document.getElementById("Número");

var Complemento =  document.getElementById("Complemento");

var Bairro =  document.getElementById("Bairro");

var Cidade =  document.getElementById("Cidade");

var Estado =  document.getElementById("Estado");

function alertar(event){
   //alert("Você clicou no botão!!!" + nome.value);

   saida.innerText = "Nome: " + nome.value +
    "\n Email: " + email.value + 
    "\n Telefone:" + telefone.value +
    "\n CEP:" + CEP.value + 
    "\n Logradouro:" + Logradouro.value + 
    "\n Número:" + Número.value + 
    "\n Complemento:" + Complemento.value + 
    "\n Bairro:" + Bairro.value + 
    "\n Cidade:" + Cidade.value +
    "\n Estado:" + Estado.value;
}
