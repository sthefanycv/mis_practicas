/*
    ¿Que es la modularización?
    Es la técnica de dividir un programa en módulos más pequeños y manejables.

    ¿Por qué modularizar?
    - Facilita la lectura y comprensión del código.
    - Facilita la reutilización del código.
    - Facilita el mantenimiento del código.
    - Facilita la colaboración entre desarrolladores.
    - Facilita la escalabilidad del código.
    - Facilita la depuración del código.

    ¿Cómo modularizar?
    En JavaScript, la modularización se puede lograr con las funciones import y export.

    - Export: es una declaración que se utiliza para exportar funciones, objetos o variables desde un módulo.
    - Import: es una declaración que se utiliza para importar funciones, objetos o variables que han sido exportados 
    desde un módulo externo.

    ¿Qué es un módulo?
    Un módulo es un archivo que contiene código JavaScript. En un módulo, se pueden definir funciones, objetos,
    variables, clases, etc. que se pueden exportar e importar.
*/


// Suma dos números.
function sumar(a, b) { 
    return +a + +b; // El signo + antes de la variable convierte el string a número (convierte el string a número entero)
};

// Resta dos números.
function restar(a, b) { 
    return a - b; 
};

// Divide dos números.
function dividir(a, b) { 
    return a / b; 
};

// Multiplica dos números.
function multiplicar(a, b) { 
    return a * b; 
};

// Eleva un número a una potencia.
function potenciar(a, b) {
    return a ** b;
};

// Calcula la tabla de multiplicar de un número.
function tablaMultiplicar(a) {
    let tabla = ``;
    for (let i = 1; i <= 10; i++) {
        tabla += `${a} x ${i} = ${a * i}\n`;
    }
    return tabla;
};

// Calcular promedio de un array.
function promedioArray(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    }
    return suma / a.length;
};



// Determinar si un número es par.
function esPar(a) {
    return a % 2 === 0;
};

// Determinar si un número es impar.
function esImpar(a) {
    return a % 2 !== 0;
}


export { sumar, restar, dividir, multiplicar, potenciar, tablaMultiplicar, promedioArray, esPar, esImpar };