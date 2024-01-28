let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroIntentos = 1;
let numeroSecreto = CrearNumero();
 
 
 function AsignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    numeroDeUsuario = parseInt(numeroDeUsuario);
    
    if (numeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento('p', `Has encontrado el número secreto en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (numeroDeUsuario > numeroSecreto) {
            AsignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            AsignarTextoElemento('p', 'El numero secreto es mayor');
        }
        limpiar();
        numeroIntentos++;
        console.log(numeroIntentos);
    }
} 

function CrearNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if(listaNumerosSorteados.length == numeroMaximo) {
        AsignarTextoElemento('p', 'Ya no quedan números disponibles');
    } else {

    

        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return CrearNumero();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    };
};

function limpiar() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value ='';
}

function condicionesIniciales () {
    AsignarTextoElemento('h1', 'Juego del número secreto');
    AsignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = CrearNumero();
    numeroIntentos = 1;
};

function reiniciarJuego() {
    limpiar();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
}


condicionesIniciales(); 


