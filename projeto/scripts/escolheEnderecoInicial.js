import {aceitouSalvar} from './storage/aceitouSalvar.js';
import {formatarEndereco} from './endereco/formataEndereco.js'
import { setPaginaInicial } from './storage/paginaInicial.js';
import { paginaAtual } from './storage/sessaoAtual.js';

let enderecoInicial = paginaAtual

if (aceitouSalvar === true) {
    if (enderecoInicial === null) {
        enderecoInicial = prompt('Escolha a página inicial:')
    }

    if (enderecoInicial) {
        enderecoInicial = formatarEndereco(enderecoInicial)
        setPaginaInicial(enderecoInicial)
    }
}

