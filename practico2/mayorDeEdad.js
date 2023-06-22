const readlineSync = require('readline-sync');
const edad = readlineSync.question("Ingrese su edad: ");
let mayorDeEdad = edad >= 18;
if (mayorDeEdad){
    return console.log ("Eres mayor de edad");}
else{
           console.log("Eres menor de edad");}