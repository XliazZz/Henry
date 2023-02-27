/*
METODOS DE INSERCIÒN

El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

El método pop() elimina y devuelve el último elemento de un arreglo. Podemos guardar el valor eliminado usando el metodo pop() en una variable o otra cosa.

El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

El método shift() elimina y devuelve el primer elemento de un arreglo.


METODOS VARIOS

El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.


METODOS DE RECORRIDO

El método forEach() nos permite recorrer un arreglo, realizando alguna acción para cada elemento.

El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados./*/


// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);
