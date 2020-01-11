import {aceitouSalvar,setAceitouSalvar} from './storage/aceitouSalvar.js'
if (aceitouSalvar === null) {
    let aceitou = confirm('Você aceita que possamos salvar suas informações?');
    if (!aceitou) {
        alert('Você pode mudar isso na página de configurações posteriormente.');
    }
    setAceitouSalvar(aceitou)
}