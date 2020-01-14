import * as historico from "./historico.js"
import { carregarUrl } from "./carregar.js";

btnVoltar.addEventListener('click', () => {
    let enderecoVolta = historico.volta();
    if(enderecoVolta!==undefined){
        carregarUrl(enderecoVolta)
    } 
})
btnAvancar.addEventListener('click', ()=>{
    let enderecoAvanca = historico.avanca();
    if(enderecoAvanca != undefined){
        carregarUrl(enderecoAvanca)
    }

})
iframe.addEventListener('load', () => {
    let endereco = iframe.contentWindow.location.href;
    historico.adiciona(endereco)
})