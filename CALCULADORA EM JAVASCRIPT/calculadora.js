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
    } else if (num === '%') {
        try {
            let valorAtual = parseFloat(visor.value);
            if (!isNaN(valorAtual)) {
                visor.value = valorAtual / 100;
            } else {
                visor.value = 'Erro';
            }
        } catch {
            visor.value = 'Erro';
        }
        limpavisor = true;
    } else {
        if (!limpavisor) {
            visor.value += num;
            limpavisor = true;
        }
        operadorAtual = num;
    }
}

//switch case
//
//exemplo
var cache = null;