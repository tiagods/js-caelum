import { paginaInicial } from "../storage/paginaInicial.js";
import { formatarEndereco } from "../endereco/formataEndereco.js";
import { paginaAtual, setPaginaAtual } from "../storage/sessaoAtual.js";
import { carregarUrl } from "./carregar.js";

let paginaParaCarregar = paginaAtual!==null ? paginaAtual : (paginaInicial!==null?paginaInicial:'blank')
let enderecoCompleto = formatarEndereco(paginaParaCarregar)

carregarUrl(enderecoCompleto)

iframe.addEventListener('load', ()=>{
    let endereco = iframe.contentWindow.location.href;
    setPaginaAtual(endereco)
})