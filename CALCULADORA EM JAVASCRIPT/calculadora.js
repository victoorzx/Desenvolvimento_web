//pode colocar varios parâmetros para otimizar o código
//pensar em limpar o campo para entrar outro valor
//colocar os núemros em ordem

function atualizaDisplay(valor){
    const visor = document.getElementById('visor');
    console.log(visor);
    visor.value =  visor.value + valor;
}

//fazer funçao para cada um dos operadores 
function operadores(ope){
    const visor = document.getElementById('visor');
    console.log(ope);
    visor.value = visor.value + ope;
}

//switch case
//
//exemplo
var cache = null;