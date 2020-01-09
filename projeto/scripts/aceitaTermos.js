const termos = JSON.parse(localStorage.getItem('aceitouOsTermos'))
const nomeStorage = localStorage.getItem('nomeUsuario')

if(!nomeStorage){
    let nome = prompt('Ola, qual o seu nome?')
    localStorage.setItem('nomeUsuario',nome)
}

if(!termos){

    let aceito = confirm(`
        Olá, ${localStorage.getItem('nomeUsuario')}!
        Antes de usar o Cake, precisamos que
        você aceite nossos termos de uso:
        • Você aceita que este software foi
            feito por pessoas que participaram
            do curso de JavaScript.
        • Você aceita que o código dessas
            pessoas pode acessar tudo o que
            você digitar aqui.
        • Você aceita que tudo aqui está
            em desenvolvimento e por isso não
            recomendamos que você troque de
            navegador agora
        Voce aceita os termos?`)
    if(!aceito){
        alert('Infelizmente não podemos seguir juntos, bye')
        window.close()
    }
    else{
        localStorage.setItem('aceitouOsTermos',true)
    }
}