// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
HolaMundo()
function HolaMundo(){
    console.log('Hola Mundo!');
}

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let nombre = "Marco"
HolaNombre(nombre);

function HolaNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
let numero = 4;
sacarDoble(numero)
function sacarDoble(numero){
    numero*=2;
    return numero;
}

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
let numero1 = 4;
let numero2 = 8;
let numero3 = 12;
sacarPromedio(numero1,numero2,numero3)
function sacarPromedio(numero1,numero2,numero3){
    let promedio=(numero1+numero2+numero3)/3;
    return promedio;
}

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let numero_1 = 4;
let numero_2 = 8;

sacarMayor(numero_1,numero_2);
function sacarMayor(numero_1,numero_2){
    if(numero_1>numero_2){
        return numero_1;
    }
    else{
        return numero_2;
    }
}

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
let numero_ = 4;
sacarCuadrado(numero_)
function sacarCuadrado(numero_){
    numero_*=numero_;
    return numero_;
}