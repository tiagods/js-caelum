import { adicionarTarefa } from './tarefas.js'; 
import { exibirTarefas } from './exibicao.js';

$btnAdicionar.onclick = () => {
    let nomeTarefa = $tarefa.value.trim();
    if (nomeTarefa == '') {
        alert('Por favor, digite uma tarefa válida!');
    }
    else {
        adicionarTarefa(nomeTarefa);
        exibirTarefas();
    }

    $tarefa.value = '';
    $tarefa.focus();
}