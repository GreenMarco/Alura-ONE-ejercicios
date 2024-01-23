//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
console.log('Ej 1');
let contador = 1;
while(contador <= 10){
    console.log(`${contador}`);
    contador++;
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
console.log('Ej 2');
contador = 10;
while(contador >= 0){
    console.log(`${contador}`);
    contador--;
}

//3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
console.log('Ej 3');
contador = prompt('Dame un numero');
while(contador >= 0){
    console.log(`${contador}`);
    contador--;
}

//4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
console.log('Ej 4');
contador = 0;
limite = prompt('Dame un numero');
while(contador <= limite){
    console.log(`${contador}`);
    contador++;
}
