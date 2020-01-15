export function formataMoeda(valor) {
    return parseFloat(valor).toLocaleString('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    });
}