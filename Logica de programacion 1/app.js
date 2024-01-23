//cambios de parametros del juego
let numeroMaximoPosible = 10;
let max_inentos = 4;

let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabra = 'intento'

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt(`Me indicas un número por favor entre el 1 y el : ${numeroMaximoPosible}`);
    
    console.log(numeroUsuario);
    /*
    Este codigo realiza
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos
        alert(`Acertaste, el número es: ${numeroUsuario} y solo te tomó ${intentos} ${intentos <= 1 ? 'intento' : 'intentos'}`);
    }
    else {
        intentos++;
        //palabra = 'intentos'
        if(numeroUsuario<numeroSecreto){
            alert('Lo siento, no acertaste el número, el número es mayor');
        }
        else{
            alert('Lo siento, no acertaste el número, el número es menor');
        }
        if(intentos > max_inentos){
            alert(`Llegaste al número maxímo de ${max_inentos} ${palabra}`);
            break;
        }
    }
}
