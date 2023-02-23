//Para ver el resultado de la funcion hay que abrir el terminal y escribir 'node', despues pegamos el codigo ahi e agregamos el argumento

// Primero // 

function sumaTres(x) {
   return x + 3;
}

// Segundo //

var sumaTres = function (x) {
    return x + 3;
}

// Tercero //

var sumaTres = (x) => {
    return x + 3;
}

//Función: cuidadoConElConsoleLog

// El console.log solo sirve para ver el resultado, no define nada, el return si define. El console.log luego se tiene que borrar/

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }
