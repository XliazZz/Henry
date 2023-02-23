//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 
//El triple '===' verifica que el tipo de dato y elvalor sea el mismo 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//Asignación y asociatividad
/*En la tabla de valores la asignacion tiene asociativa de derecha a izquierda*/
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 