import { carregarUrl } from "./carregar.js"
import { paginaInicial } from "../storage/paginaInicial.js"

btnHome.addEventListener('click', () => {
   carregarUrl(paginaInicial) 
})