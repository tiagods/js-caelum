import * as ContatoController from "../controller/ContatoController.js";
import * as Contato from "../model/Contato.js";
import { ContatoError } from "../model/ContatoError.js";

listarContatosTabela();

export function listarContatosTabela() {
    let linhasTabela = '';

    const listaContatos = ContatoController.getContatos();

    listaContatos.forEach((contato,indice) => {
        linhasTabela += `<tr>
                <td>${contato.nome}</td>
                <td>${contato.telefone}</td>
                <td>
                    <button data-indice="${indice}" class="btn btn-danger">
                        <i style="pointer-events: none;" class="fas fa-times"></i>
                    </button>
                </td>
            </tr>`
    });
    tabelaContatos.innerHTML = linhasTabela;
}
tabelaContatos.addEventListener('click', event =>{
    try {
        const indice = event.target.dataset.indice;
        ContatoController.excluirContato(indice);
        listarContatosTabela();
    } catch (error) {
        if(error instanceof ContatoError){
            alert(error);
        }
        else throw error;
    }
})