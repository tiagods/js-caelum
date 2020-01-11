export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

export function setAceitouSalvar(aceite){
    localStorage.setItem('aceitouSalvar', aceite)
}