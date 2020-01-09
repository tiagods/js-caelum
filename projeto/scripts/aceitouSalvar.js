let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

if(aceitouSalvar === null){
    aceitouSalvar = confirm(`
        Voce aceita que possamos salvar as suas informações?
    `)
    if(!aceitouSalvar){
        alert('Voce pode mudar na página de configurações a qualquer momento')
    }
    localStorage.setItem('aceitouSalvar', aceitouSalvar)
}