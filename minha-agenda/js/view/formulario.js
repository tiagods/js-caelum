import * as ContatoController from '../controller/ContatoController.js'
import * as Tabela from './tabela.js';
import { ContatoError } from '../model/ContatoError.js';


btnSalvar.addEventListener('click', () =>{
    try {
        const nome = inputNome.value.trim();
        const telefone = inputTelefone.value.trim();
        ContatoController.adicionarContato(nome,telefone);
        Tabela.listarContatosTabela();
        console.log('nome',nome);
        console.log('telefone',telefone);
        inputNome.value = '';
        inputTelefone.value = '';
    } catch (error) {
        if( error instanceof ContatoError){
            alert(error);
        }
        else throw error;
    }
})

