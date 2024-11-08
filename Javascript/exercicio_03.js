console.log('Objeto');

const carro= new Object();
carro.marca = "BMW";
carro.cor = "PRETO";
carro.nome = "BMW-iX M60";
carro.ano = "2025";
console.log(carro);


document.getElementById("marca"). value = carro.marca;
document.getElementById("cor"). value = carro.cor;
document.getElementById("nome"). value = carro.nome;
document.getElementById("ano"). value = carro.ano;

function redirectToBMW() {
    alert("OLHA SÓ");
    window.location.href = 'https://www.bmw.com.br/pt/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-destaques.html';
   
}
