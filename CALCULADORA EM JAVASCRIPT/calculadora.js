//para atualizar display sempre que fizer um calculo
function atualizaDisplay(valor) {
    const visor = document.getElementById("visor");
    console.log(visor);
    visor.value = visor.value + valor;
    limpavisor = false;
}

function operadores(num) {
    const visor = document.getElementById('visor');

    if (num === 'C') {
        visor.value = '';
        operadorAtual = null;
        limpavisor = false;
    } else if (num === '=') {
        try {
            visor.value = eval(visor.value);
        } catch {
            visor.value = 'Erro';
        }
        operadorAtual = null;
    } else if (num === '÷') {
            
            if (!limpavisor) {
                visor.value += '÷';
                limpavisor = true;
            } 
            operadorAtual = '÷'
    } else {
        if (!limpavisor) {
            visor.value += num;
            limpavisor = true;
        }
        operadorAtual = num;
    }
}

function apagarUltimoNumero() {
    const visor = document.getElementById ('visor');
    visor.value = visor.value.slice(0,-1);//vai remover o último número
}

//switch case
//
//exemplo
var cache = null;