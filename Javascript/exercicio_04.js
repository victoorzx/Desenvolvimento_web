console.log('ok')
function contar() {
    let valoratual = parseInt(document.getElementById("contador").value);
 // 'valoratual' obtém o valor do elemento com o id 'contador', converte-o em número inteiro usando 'parseInt'
    let incrementa = valoratual + 1;
// A variável 'incrementa' armazena o valor de 'valoratual' somado a 1, incrementando o contador.
    document.getElementById('contador').value = incrementa;
// Atualiza o valor do elemento com o id 'contador' com o valor de 'incrementa'.
}