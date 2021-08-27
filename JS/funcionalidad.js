let num1 = 0;
let num2 = 0;
document.querySelector('#interaccion__btnSumar').addEventListener('click',sumar);
document.querySelector('#interaccion__btnDividir').addEventListener('click',dividir);
document.querySelector('#interaccion__btnMultip').addEventListener('click',multiplicar);

function sumar(){     
    event.preventDefault();
    num1 = Number(document.getElementById('num1Sum').value);
    num2 = Number(document.getElementById('num2Sum').value);
    document.querySelector('#interaccion__resultadoSumar').value = num1 + num2;
}
function dividir(){ 
    event.preventDefault();    
    num1 = Number(document.getElementById('num1Div').value);
    num2 = Number(document.getElementById('num2Div').value);
    if (num2===0) {
        alert('En artirmética la devisión entre cero es indefinida');
        location.reload();
    }
    document.querySelector('#interaccion__resultadoDividir').value = num1 / num2;
}

function multiplicar(){ 
    event.preventDefault();    
    num1 = Number(document.getElementById('num1Mul').value);
    num2 = Number(document.getElementById('num2Mul').value);
    document.querySelector('#interaccion__resultadoMultip').value = num1 * num2;
}
