import {aceitouSalvar,setAceitouSalvar} from './storage/aceitouSalvar.js';
import {paginaInicial,setPaginaInicial} from './storage/paginaInicial.js';
import { formatarEndereco } from './endereco/formataEndereco.js';

inputPaginaInicial.value = paginaInicial;
inputPermitiuSalvar.checked = aceitouSalvar;

btnSalvar.addEventListener('click', () => {
    let enderecoCorrigido = formatarEndereco(inputPaginaInicial.value)
    setPaginaInicial(enderecoCorrigido)
    setAceitouSalvar(inputPermitiuSalvar.checked)
    alert('Configurações salvar com sucesso')   
    window.location.reload()
})

btnLimpar.addEventListener('click', () => {
    sessionStorage.clear()
    const chavesPermanentes = ['aceitouSalvar','aceitouOsTermos']
    const listaChaves = Object.keys(localStorage)
    listaChaves.forEach(chave=>{
        if(!chavesPermanentes.includes(chave)){
            localStorage.removeItem(chave)
        }
    })
    alert('Configurações removidas com sucesso')
    window.location.reload()
})