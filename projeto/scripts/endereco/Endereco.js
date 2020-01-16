export function Endereco(endereco) {
    if(this instanceof Endereco === false){
        return new Endereco(endereco);
    }    
    let enderecoCompleto;
    let enderecoResumido;

    if(!endereco || endereco === 'blank'){
        enderecoCompleto = enderecoResumido = 'blank';
    }
    else{
        const url = new URL(endereco);
        if(url.hostname === 'localhost'){
            let paginaLocal = url.pathname.replace('/','');
            enderecoCompleto.paginaLocal;
            enderecoResumido.paginaLocal;
        }
        else{
            enderecoCompleto = url.toString();
            enderecoResumido = url.hostname;
     
        }
    }
    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;

    iframe.src = endereco.urlCompleta;
    inputEndereco.value = endereco.urlResumida;
}