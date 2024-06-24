/* 
    Try - Catch: es una estructura de control de excepciones que permite probar código para 
    detectar errores y, en caso de que se produzca una excepción, ejecutar un bloque de código 
    de manejo de excepciones para manejar el error.

    El bloque "try" contiene el código que se está probando para errores, y el bloque "catch"
    contiene el código que se ejecutará en caso de que se produzca una excepción.

    ¿Qué es una Excepción?
    Una excepción es un evento anormal que ocurre durante la ejecución de un programa y que interrumpe 
    el flujo normal de la ejecución, puede ser tratado por el programador para prevenir errores graves.

    Esto permite la continuidad ininterrumpida en la ejecucion del codigo en caso de existir
    algun error en el proceso.


    Excepciones comunes:

    Excepción	        Descripción
    TypeError	        Indica que un valor no es del tipo esperado.
    ReferenceError      Indica que se ha hecho referencia a una variable que no está declarada.
    SyntaxError	        Indica un error de sintaxis en el código.
    EvalError	        Indica un error relacionado con la función eval().
    URIError	        Indica un error en las funciones de URI.
    InternalError       Indica un error interno en el motor de JavaScript (por ejemplo, demasiada recursión).
    Error               Base para todas las demás excepciones.
    RangeError	        Indica que un valor no está dentro del rango permitido.



    Importante

    finally: es un bloque opcional que se ejecuta después de try-catch, y se ejecuta siempre,
    independientemente de si se produjo una excepción o no.

    throw: es una palabra clave que se utiliza para lanzar una excepción. También se puede utilizar
    para crear un objeto de error personalizado.
*/



// Ejemplo try-catch (Capturar el error al llamar variable no declarada)

// try {
//     // En este bloque se suele colocar el codigo que se quiere probar para detectar errores
//     console.log(nombre);
// } catch (error) {
//     // El parametro error es opcional, se puede omitir, pero es recomendable colocarlo para poder identificar el error (excepcion)
//     // En este bloque se coloca el codigo que se ejecutara en caso de que se produzca una excepcion
//     console.log(`Ha ocurrido un error: ${error}`);
// };


// console.log("Esto se ejecuta despues del bloque try-catch, sin importar si se produjo una excepcion o no");






/*
    "Finally" es una clausula opcional, no es una propiedad ni un método como tal, sino una parte presindible
    de la sintaxis de la estructura de control Try-Catch.
*/


// Ejemplo try-catch-finally (Accediendo a una propiedad de un objeto que no existe);
// function verPropiedad() {
//     try {
//         // Este objeto y esa propiedad no existen
//         console.log(objeto.propiedad);
//         // return "Se ejecuto try"
//     } catch (error) {
//         console.log(`Error: el objeto no existe. | ${error}`);
//         return "Ocurrió una exepcion y se ejecuto catch."
//     } finally {
//         console.log("La ejecucion no se interrumpio gracias a Try-Catch");
//     };
// };

// console.log(verPropiedad());


// console.log("Esto se ejecuta despues de la funcion verPropiedad()");





// Ejemplode try-catch usando throw para lanzar una excepcion personalizada

// throw: es una palabra clave que se utiliza para lanzar una excepción la cual se puede personalizar
// creando un objeto de error personalizado con el constructor Error().

// Tabla de propiedades del objeto creado con el constructor Error():
// Propiedad	   Descripción
// name	------------- Nombre del tipo de error (por ejemplo, "Error", "TypeError").
// message ---------- Mensaje de error que describe lo que salió mal.

// Estas otras propiedades no son estándar y pueden no estar disponibles en todos los navegadores.
// Hasta el 17/06/2024 funciona solamente en Firefox.
// stack ------------ Pila de llamadas al momento en que el error fue lanzado, útil para depuración.
// fileName	--------- Nombre del archivo que contiene el código que lanzó la excepción (propiedad no estándar, disponible en algunos navegadores).
// lineNumber ------- Número de línea del archivo que contiene el código que lanzó la excepción (propiedad no estándar, disponible en algunos navegadores).
// columnNumber ----- Número de columna en la línea del archivo que contiene el código que lanzó la excepción (propiedad no estándar, disponible en algunos navegadores).




function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
};

try {
    let resultado = dividir(10, 0);
    console.log(`Total: ${resultado}`);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
};


console.log("Esto se ejecuta despues de la funcion dividir()");




// Ejercicio para realizar en casa usando try-catch-finally y throw.

// 1. Crear una funcion que reciba un objeto y una propiedad, y que devuelva el valor de la propiedad
//    si esta existe en el objeto, de lo contrario lanzar una excepcion personalizada que diga:
//    "La propiedad no existe en el objeto indicado".

// 2. Crear un objeto con al menos 3 propiedades y llamar a la funcion creada en el paso 1, pasando
//    el objeto y una propiedad que no exista en el objeto.

// 3. Intentar realizar una operacion matematica con valores recibidos del DOM, y en caso de que
//    se produzca una excepcion, lanzar una excepcion personalizada que diga:
//    "No se puede realizar la operacion con los valores ingresados".
//   Especialmente si es una operacion de division y el divisor es cero.
//   O si los valores ingresados no son numeros.