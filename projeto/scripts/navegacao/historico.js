const listaSites = JSON.parse(sessionStorage.getItem('historico')) || [];

let posicao = -1;

let posicaoSession = JSON.parse(sessionStorage.getItem('posicaoHistorico'));

if(posicaoSession!=null && posicaoSession>=0){
    posicao = posicaoSession
}

export function adiciona(endereco) {
    console.log('posicao atual: ', posicao)
    if(endereco != listaSites[posicao]){
        listaSites.push(endereco);
        posicao++
        sessionStorage.setItem('historico', JSON.stringify(listaSites))
        sessionStorage.setItem('posicaoHistorico', posicao)
    }
}
export function volta() {
    if(listaSites.length !== 1 && posicao !== 0){
        posicao--;
        sessionStorage.setItem('posicaoHistorico',posicao);
        return listaSites[posicao];
    }    
}
export function avanca() {
    if(listaSites.length!==1 && posicao !== listaSites.length-1){
        posicao++;
        sessionStorage.setItem('posicaoHistorico',posicao);
        return listaSites[posicao];
    }
}