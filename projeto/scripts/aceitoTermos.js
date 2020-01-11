const aceitouTermosAntes = localStorage.getItem('aceitouOsTermos');
if (aceitouTermosAntes === null) {
    const nome = prompt('Olá, qual o seu nome?');
    const aceitouOsTermos = confirm(`
        Olá, ${nome}!
        Antes de você usar o Cake, precisamos que você aceite nossos
        termos de uso:

        • Você aceita que este software foi feito por pessoas que participaram
        do curso de JavaScript;

        • Você aceita que o código dessas pessoas pode acessar tudo
        que você digitar;

        • Você aceita que tudo aqui está em desenvolvimento e por isso 
        não recomendamos que você troque de navegador agora.
    `);

    if (!aceitouOsTermos) {
        alert(nome + ', para continuar é necessário que você aceite os termos de uso!');
        window.close();
    }
    else {
        localStorage.setItem('aceitouOsTermos', true);
    }
}