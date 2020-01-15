import Produto from '../model/Produto.js';

const listaProdutos = JSON.parse(sessionStorage.getItem('carrinhoProdutos')) || [];

export function adicionarProduto(nomeProduto, quantidade, precoUnitario) {
    const produto = new Produto(nomeProduto,quantidade,precoUnitario);
    validarProduto(produto);
    listaProdutos.push(produto);
    sessionStorage.setItem('carrinhoProdutos',JSON.stringify(listaProdutos));

}
function validarProduto(produto) {
    if(produto instanceof Produto === false){
        throw new Error('Dados informados precisam ser do tipo "Produto"!');
    }
    if(!produto.nomeProduto){
        throw new Error('Nome do produto é obrigatorio!');       
    }
    if(produto.quantidade < 1 || isNaN(produto.quantidade)){
        throw new Error('Quantidade invalida, informe um numero maior ou igual a 1!');       
    }
    if(produto.precoUnitario<0 || isNaN(produto.precoUnitario)){
        throw new Error('Preço invalido, informe um numero igual ou maior que 0!');       
    }
}
export function getProdutos() {
    return listaProdutos;
}
export function getTotalDaCompra() {
    let opcao1 = 0;
    listaProdutos.forEach(produto => {
        opcao1 += produto.precoUnitario*produto.quantidade; 
    });
    return listaProdutos.reduce((total, produto)=> total+(produto.precoUnitario * produto.quantidade),0);
}