const readlineSync = require('readline-sync');
const mes = readlineSync.question("Ingrese un mes (1 - 12): ");
let arrayMeses = ["enero", "febrero", "marzo", "abril","mayo",
             "junio", "julio", "agosto","septiembre", "octubre", "noviembre", "diciembre"];
let mesSolicitado = arrayMeses[mes - 1];

function diasDelMes() {
  if (mes == 2)
    return 28;
  else if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
    return 30;
  else if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
    return 31;
}

console.log("La cantidad de días del mes de %s es %i", mesSolicitado, diasDelMes());
