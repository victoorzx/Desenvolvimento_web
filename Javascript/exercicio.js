console.log("javascript carregado");
exibepares();

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*o length conta cada número */
for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0) {
        exibepares(numeros[i]);

    } else {
        exibeimpar(numeros[i]);
    }
    // console.log(numeros[i])
}

function exibepares(pares){
    console.log('Este número é par: ' + pares)
}
function exibeimpar(impar){
    console.log('Este número é ímpar: ' + impar)
}


// console.log(numeros)
// console.log('Olhe o console do browser')
// alert('Olhe o console do browser')