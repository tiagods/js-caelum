import { ContatoError } from "../model/ContatoError.js";
import { Contato } from "../model/Contato.js";

const listaContatos = JSON.parse(localStorage.getItem('meusContatos')) || [];

export function adicionarContato(nome,telefone) {
    const contato = new Contato(nome, telefone);
    if(!contato.nome) 
        throw new ContatoError('Nome do contato é obrigatorio');
    if(!contato.telefone)
        throw new ContatoError('Telefone do contato é obrigatorio');
    
    listaContatos.push(contato);
    localStorage.setItem('meusContatos',JSON.stringify(listaContatos));
}
export function getContatos() {
    return listaContatos;
}
export function excluirContato(indice) {
    if(indice<0) 
        throw new ContatoError('Indice invalido para exclusao')
    else{
        listaContatos.splice(indice,1);
        localStorage.setItem('meusContatos',JSON.stringify(listaContatos));
    }
}