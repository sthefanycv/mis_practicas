/* 
    ¿Que es el Hoisting?
    El hoisting es un comportamiento de JavaScript que mueve las declaraciones a la parte superior 
    de su contexto actua, ya sea el contexto de una función o el contexto global.

    En otras palabras, JavaScript "eleva" las declaraciones de las funciones a la parte superior
    del script. Esto significa que puedes llamar a una función antes de que esta sea declarada.

    IMPORTANTE: Esto suele ser una pregunta frecuenta en entrevistas de trabajo, por lo que es
    importante tenerlo en cuenta.
*/


// En este ejemplo llamamos a la funcion saludar entes de que sea declarada.
console.log(saludar("Diego"));

// Posteriormente declaramos la funcion saludar.
function saludar(nombre){
    return `Hola ${nombre}`;
};




// Si intentamos lo mismo con una variable, obtendremos un error.

// Llamamos a la variable mensaje antes de que sea declarada.
console.log(mensaje);

// Posteriormente declaramos la variable mensaje.
const mensaje = "Hola Mundo!";

