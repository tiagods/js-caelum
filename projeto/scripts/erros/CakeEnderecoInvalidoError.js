/* export function CakeEnderecoInvalidoError(endereco) {
    this.endereco = endereco;
    this.message = `Não consegui entener o endereco: \n\n${endereco}`;
}

CakeEnderecoInvalidoError.prototype = Error.prototype; */

export class CakeEnderecoInvalidoError extends Error{
    constructor(endereco){
        super();
        this.endereco=endereco;
        this.message = `Não consegui entener o endereco: \n\n${endereco}`;
    }
}