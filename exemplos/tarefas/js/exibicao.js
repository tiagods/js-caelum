import { getTarefas, excluirTarefa } from "./tarefas.js";

export function exibirTarefas()
{
    let tarefas = getTarefas();
    let listaItensHtml = '';

    tarefas.forEach((tarefa, indice) => {
        listaItensHtml += `
            <li>
                ${tarefa} 
                <button data-posicao="${indice}">
                    Excluir
                </button>
            </li>
        `;
    });

    listaItensHtml = `
        Sua lista de tarefas possui os seguintes itens: <br>
        <ul>
            ${listaItensHtml}
        </ul>
    `;

    if (tarefas.length  === 0) {
        listaItensHtml = 'Nenhuma tarefa foi adicionada ainda :(';
    }

    $listarTarefas.innerHTML = listaItensHtml;
}

$listarTarefas.onclick = ({ target : { tagName, dataset: { posicao } } }) => {
    if (tagName === 'BUTTON') {
        excluirTarefa(posicao);
        exibirTarefas();
    }
}