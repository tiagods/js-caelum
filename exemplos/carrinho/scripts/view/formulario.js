import { formataMoeda } from "../utils/formataMoeda.js";
import * as CarrinhoController from "../controller/CarrinhoController.js";
import * as Tabela from "./tabela.js";

$produto.addEventListener('change', () => { 
    let indice = $produto.selectedIndex;
    let preco = $produto.options[indice].dataset.preco;
    if(preco!==undefined){
        $valorUnitario.value = formataMoeda(preco);
    }
    else{
        $valorUnitario.value = 'R$ 0,00';
    }
})

$btnForm.addEventListener('click', () => {
    let nomeProduto = $produto.value.trim();
    let valor = parseFloat($valorUnitario.value.trim().replace(/(R\$ ?|\.)/,'').replace(',',''));
    let quantidade = parseInt($quantidade.value);

    console.log('nome', nomeProduto);
    console.log('valor', valor);
    console.log('quantidade', quantidade);

    CarrinhoController.adicionarProduto(nomeProduto,quantidade,valor);
    Tabela.listarProdutos();

    $produto.value ='';
    $quantidade.value=1;
    $valorUnitario.value = "R$ 0,00";
})