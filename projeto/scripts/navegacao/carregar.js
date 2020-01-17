import { Endereco } from "../endereco/Endereco.js";
import { CakeEnderecoInvalidoError } from "../erros/CakeEnderecoInvalidoError.js";

export async function carregarUrl(enderecoRecebido) {
    let endereco;

    if(typeof enderecoRecebido === 'string' || !enderecoRecebido){
        endereco = new Endereco(enderecoRecebido);
    }
    else if(enderecoRecebido instanceof Endereco){
        endereco = enderecoRecebido;
    }
    else{
        throw new Error(`Voce passou um endereço que não é nem string nem Endereco 
        Valor:${JSON.stringify(enderecoRecebido)}
        Tipo: ${typeof enderecoRecebido}
        `)
    }

    /*
    fetch(endereco.urlCompleta).then(()=>{
        iframe.src = endereco.urlCompleta;
        inputEndereco.value = endereco.urlResumida;
    }).catch(()=>{
        alert('Erro no carregamento')
    })
    */

    try{
        await fetch(endereco.urlCompleta);
        iframe.src = endereco.urlCompleta;
        inputEndereco.value = endereco.urlResumida;
    }catch(error){
        alert('Não foi possivel carregar a pagina')
    }

}