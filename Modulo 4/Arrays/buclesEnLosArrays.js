/*Bucle For

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia/*


//Bucle While

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

Sintaxis: while (condicion)
  sentencia/*/

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);



///////////////
const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

/* sum = 0 + 1    ---> 1ra iteracion
   sum = 1 + 2    ---> 2da iteracion
   sum = 3 + 3    ---> 3ra iteracion
   sum = 6 + 4    ---> 4ta iteracion   
   sum = 10       ---> resultado

a cada i se le suma el numero siguiente,osea a cada iteracion se le suma el numero siguiente/*/