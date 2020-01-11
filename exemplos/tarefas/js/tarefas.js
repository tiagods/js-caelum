let listaTarefas = [];

export function adicionarTarefa(tarefa) 
{
    let tarefaJaExiste = listaTarefas.find(tarefaNaLista => {
        return tarefaNaLista.localeCompare(tarefa, undefined, { sensitivity: 'base' }) === 0;
    });

    // se a função find() retornou algo diferente de undefined, então a variável 
    // tarefaJaExiste possui alguma informação, LOGO a tarefa digitada já existe na lista
    if (tarefaJaExiste != undefined) {
        alert('Essa tarefa já existe na sua lista!');
    }
    else {
        listaTarefas.push(tarefa);
        alert('Tarefa adicionada com sucesso!');
    }
}

export function excluirTarefa(posicao)
{
    if (posicao < 0) {
        alert('Posição fornecida é inválida!');
    }
    else {
        listaTarefas.splice(posicao, 1);
        alert('Tarefa removida com sucesso!');
    }
}

export function getTarefas()
{
    return listaTarefas;
}