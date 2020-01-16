import { formatarEndereco } from "../endereco/formataEndereco.js";
import { carregarUrl } from "./carregar.js";
import { Endereco } from "../endereco/Endereco.js";

let endereco;

iframe.addEventListener('load', ()=>{
    endereco = new Endereco(iframe.contentWindow.location.href);
})
inputEndereco.addEventListener('focus', exibeEnderecoCompleto)
inputEndereco.addEventListener('blur', exibeEnderecoResumido)
inputEndereco.addEventListener('keypress', event =>{
    if(event.key === 'Enter'){
        let url = formatarEndereco(inputEndereco.value)
        endereco = new Endereco(url)
        carregarUrl(endereco)
   } 
})

function exibeEnderecoCompleto() {
   inputEndereco.value = endereco.urlCompleta;
}

function capturarUrl(){
    return iframe.contentWindow.location.href;
}

function exibeEnderecoResumido() {
    inputEndereco.value = endereco.urlResumida;
}