export let paginaInicial = localStorage.getItem('paginaInicial')

export function setPaginaInicial(pagina){
    paginaInicial = pagina
    localStorage.setItem('paginaInicial',paginaInicial)
}
