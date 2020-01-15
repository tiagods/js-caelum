import * as CarrinhoController from '../controller/CarrinhoController.js';
import {formataMoeda} from '../utils/formataMoeda.js';

export function listarProdutos() {

    const listarProdutos = CarrinhoController.getProdutos();
    let totalCarrinho = CarrinhoController.getTotalDaCompra();

    let linhasTabelas = '';

    listarProdutos.forEach((produto, indice) => {
        linhasTabelas += `
        <tr>
            <td>${produto.nomeProduto}</td>
            <td>${formataMoeda(produto.precoUnitario)}</td>
            <td>${produto.quantidade}</td>
            <td>${formataMoeda(produto.quantidade * produto.precoUnitario)}</td>
            <td>
                <button class="btn btn-danger">
                x
                </button>
            </td>
        </tr>
        `
    });

    $produtosTabela.innerHTML = linhasTabelas;
    $totalCompra.innerHTML = formataMoeda(totalCarrinho);
}