export function formatarEndereco(enderecoParaFormatar) {
    if(enderecoParaFormatar<=6) 
        return enderecoParaFormatar;
    if (enderecoParaFormatar.substring(0, 7) !== 'http://' 
        && enderecoParaFormatar.substring(0, 8) !== 'https://') {
            enderecoParaFormatar = 'http://' + enderecoParaFormatar
    }    
    return enderecoParaFormatar
}
