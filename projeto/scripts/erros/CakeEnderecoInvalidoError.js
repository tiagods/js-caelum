export function CakeEnderecoInvalidoError(endereco) {
    this.endereco = endereco;
    this.message = `Não consegui entener o endereco: \n\n${endereco}`;
}