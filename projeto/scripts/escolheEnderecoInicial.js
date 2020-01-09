if(aceitouSalvar === true){
    let paginaInicial = localStorage.getItem('paginaInicial')

    let pagina

    if(!paginaInicial){
        pagina = prompt('Escolha uma pagina inicial')
        if(pagina){
            if(pagina.substring(0,7) !== 'http://' 
            && pagina.substring(0,8) !== 'https://'){
                pagina = 'http://'+pagina
            }     
            localStorage.setItem('paginaInicial', pagina)
        }
    }
    else 
        pagina = paginaInicial
    iframe.src = pagina
    inputEndereco.value = pagina
}