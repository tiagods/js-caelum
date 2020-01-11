export let paginaAtual = sessionStorage.getItem('paginaAtual')

export function setPaginaAtual(pagina) {
    sessionStorage.setItem('paginaAtual', pagina)
}