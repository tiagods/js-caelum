import { formatarEndereco } from "../endereco/formataEndereco.js";
import { carregarUrl } from "./carregar.js";

//iframe.addEventListener('load', exibeEnderecoCompleto)
inputEndereco.addEventListener('focus', exibeEnderecoCompleto)
inputEndereco.addEventListener('blur', exibeEnderecoResumido)
inputEndereco.addEventListener('keypress', event =>{
    if(event.key === 'Enter'){
        let endereco = formatarEndereco(inputEndereco.value)
        carregarUrl(endereco)
   } 
})

function exibeEnderecoCompleto() {
   inputEndereco.value = capturarUrl();
}

function capturarUrl(){
    return iframe.contentWindow.location.href
}

function exibeEnderecoResumido() {
    const url = new URL(capturarUrl())
    inputEndereco.value = url.hostname
}