const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const clear = document.getElementById('clear');
const igual = document.getElementById('igual');
const input = document.getElementById('input');

let primeiroOperando = '';
let ultimoOperador = '';

for(let i =0; i<numeros.length; i++){
    numeros[i].addEventListener('click', () => {
        const atualCaracter = numeros[i].textContent;
        input.textContent += atualCaracter;
        if (ultimoOperador) {
            primeiroOperando += atualCaracter;
        }
    });

}

for(let i = 0; i<operadores.length; i++){

    operadores[i].addEventListener('click', ()=>{
        const operadorAtual = operadores[i].textContent;
        input.textContent += operadorAtual;
        ultimoOperador = operadorAtual;
        primeiroOperando = '';
    })

}

clear.addEventListener('click', () => {
    input.textContent = '';
    primeiroOperando = '';
    ultimoOperador = '';
});

igual.addEventListener('click', () => {
    if (!ultimoOperador || primeiroOperando === '') {
        console.log('Erro: Não há dados suficientes para a operação.');
        return;
    }

    const num1 = parseFloat(primeiroOperando); 
    const num2 = parseFloat(input.textContent.split(ultimoOperador)[0]);

    console.log('num1:', num1);
    console.log('num2:', num2);

    let result;
    switch (ultimoOperador) {
        case '+':
            result = num2 + num1;
            break;
        case '-':
            result = num2 - num1;
            break;
        case 'x':
            result = num2 * num1;
            break;
        case '/':
            if (num1 !== 0) {
                result = num2 / num1;
            } else {
                console.log('Erro: Divisão por zero');
                alert('Erro: Divisão por zero')
                return;
            }
            break;
        default:
            console.log('Operador inválido');
            return;
    }

    input.textContent = result.toString();
    console.log('Resultado:', result);
});
