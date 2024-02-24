let numeroMaximoPosible = 10;
let max_inentos = 4;
let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];


numeroDeJuegos.le
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        //Acertamos
        asignarTexto('p',`Acertaste, el número es: ${numeroUsuario} y solo te tomó ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //No acertamos
        limpiarCaja();
        intentos++;
        //palabra = 'intentos'
        if(numeroUsuario<numeroSecreto){
            asignarTexto('p','Lo siento, no acertaste el número, el número es mayor');
        }
        else{
            asignarTexto('p','Lo siento, no acertaste el número, el número es menor');
        }
        if(intentos > max_inentos){
            asignarTexto('p',`Llegaste al número maxímo de ${max_inentos} ${palabra}`);
        }
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function  asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(numeroMaximoPosible){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoPosible)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximoPosible){
        asignarTexto('p','Ya se sortearon todos los numeros posibles');
    }
    else{
        //Si el numero generado esta en la lista repetimos, si no ejecutamos normal
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(numeroMaximoPosible);
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximoPosible}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    numeroMaximoPosible = 10;
    max_inentos = 4;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();

    //indicar mensaje de intervalo
    //Generar numero aleatorio
    //Inicializar numero de intentos
    condicionesIniciales();

    //Desabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();