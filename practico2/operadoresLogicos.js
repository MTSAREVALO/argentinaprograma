
const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero entero: ");
if (numero %2 === 0 && numero >= 1){
    return console.log("El numero es positivo y par");}
else if (!numero %2 === 0 && numero >= 1){
    return console.log("El numero es positivo e impar"); }
else if (numero<= -1){
    return console.log("El numero es negativo");}
else if (numero == 0){
    console.log ("El numero es cero");}