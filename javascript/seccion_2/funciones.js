/*
    ¿Que son las funciones?
    Las funciones son bloques de código que se pueden reutilizar en cualquier parte de nuestro programa,
    permitiendo ejecutar una tarea específica en cualquier momento.
    
    ¿Como se escriben las funciones?

    La sintaxis para declarar una función es la siguiente:
        1) Palabra reservada (Function (F. Declarativa) var (F. de Expresión)).
        2) Nombre de Funcion (Para las F. de Expresión se suelen dejar como anonimas). 
        3) Parentesis () donde se indican los parametros, en caso de no recibir parametros se dejan vacios.
        4) Llaves {} es donde definimos el bloque de código que se ejecutará al llamar la función.
        5) return: palabra reservada que indica que la función retornará un valor,
        el return es OPCIONAL, es decir si la funcion lo amerita. Es para retornar una respuesta lietral cuando es una operacion directa  

        IMPORTANTE: Es convencion y buena practica que cada sentencia dentro de una funcion debe 
        finalizar con ;


    Existen varios tipos de funciones, cada uno de ellos con una sintaxis e implementacion diferente:

    1) Funciones Declarativas
    2) Funciones de Expresión (o Expresadas)
    3) Funciones Anónimas
    4) Funciones Flecha
    5) Funciones Autoinvocadas
*/


// 1) Funciones Declaradas: estas funciones se definen con la palabra reservada function
// seguido del nombre de la función y los parámetros que recibe.
// Luego se define el bloque de código que se ejecutará al llamar la función.
// Algunas funciones declaradas pueden retornar un valor y en caso de no retornar nada, se
// consideran sin retorno.


// Ejemplo de función declarada sin parametros ni retorno.

function saludar(){
    console.log("Hola, ¿Como estas?");
};


// Para invocar una función se debe escribir el nombre de la función seguido de parentesis.
// Los parentesis indican la inicialización de la función, asi como cuando a un automovil se le da
// vuelta a la llave para encenderlo.

saludar();




// Ejemplo de función declarada sin parametros y con retorno.

function sumar(){
    return 2 + 2;
};

const total = sumar();

console.log(`El total de la operación es: ${total}`);



// Ejemplo 2 de función declarada sin parametros y con retorno.
function saludar2(){
    return "Hola, ¿Como estas?";
};

console.log(`${saludar2()}, ¿Que tal tu dia?`);



// Ejemplo de función declarada con parametros y sin retorno.
// NOTA: Mira los parametros como variables temporales que se utilizan para movilizar
// la información dentro de la función.
function multiplicar(num1, num2){
    console.log(num1 * num2);
};

multiplicar(5, 5); // Llamamos la función y pasamos los parametros requeridos.



// Ejemplo de función declarada con parametros y con retorno.
let producto1 = 1000;
let producto2 = 2000;
let producto3 = 700;
let producto4 = 550;
let producto5 = 1500;
let producto6 = 320;
let producto7 = 90;
let producto8 = 450;


function totalCompra(param1, param2, param3, param4){
    return param1 + param2 + param3 + param4;
};

console.log(`El total de la compra 1 es: ${totalCompra(producto8, producto2, producto5, producto4)}`);
console.log(`El total de la compra 2 es: ${totalCompra(producto3, producto3, producto6, producto1)}`);
console.log(`El total de la compra 3 es: ${totalCompra(producto7, producto8, producto2, producto3)}`);
console.log(`El total de la compra 4 es: ${totalCompra(producto4, producto5, producto6, producto7)}`);



// Ejercicios para realizar en casa:
// 1) Realiza una función que reciba dos parametros y retorne la multiplicación de ambos.
// 2) Realiza una función que reciba tres parametros y retorne la suma de los tres.
// 3) Realiza una función que reciba dos parametros (nombre y apellido) y muestre un saludo personalizado con ambos parametros en consola.
// Ejemplo: Hola Pedro Pe, ¿Como estas?
// 4) Realiza una función sin parametros que muestre un mensaje en consola son el total de 4 elevado a 7.
// 5) Realiza una función que reciba un parametro (edad) e indique si la persona es mayor de edad o no.



/*
    Ejercicio Especial 1: Convertidor de unidades de temperatura
    Escribe un programa que le pida al usuario que ingrese una temperatura en grados Celsius y 
    le muestre la temperatura equivalente en grados Fahrenheit y Kelvin. 
    El programa debe mostrar el resultado en un alert y solicitar los datos mediante prompt.

    Formular para Convertir Temperaturas:
        Para convertir de ºC a ºF use la fórmula: temp ºF = temp ºC x 1.8 + 32.
        Para convertir de ºF a ºC use la fórmula: temp ºC = (temp ºF - 32) ÷ 1.8.
        Para convertir de K a ºC use la fórmula: temp ºC = temp K – 273.15.
        Para convertir de ºC a K use la fórmula: temp K = temp ºC + 273.15.


    Adicional puedes realizar un conversor de unidades de longitud, masa, tiempo, datos, etc.
*/




/* Ejercicio Especial 2: Juego de adivinanza de número (Investigar sobre Loops y Math.random())
    Escribe un programa que genere un número aleatorio entre 1 y 100 y le pida al usuario 
    que adivine el número. Si el usuario ingresa un número incorrecto, el programa le debe 
    dar una pista de si el número a adivinar es mayor o menor al número que ingresó el usuario. 
    El programa debe continuar pidiendo al usuario que adivine el número hasta que lo adivine o
    se agoten las 5 vidas. 
    
    Cuando el usuario adivina el número, el programa debe mostrar un mensaje de felicitaciones y 
    la cantidad de vidas que le quedaron.
*/







// Funciones de Expresión (o Expresadas): estas funciones se definen y se asignan a una variable, en escencia las funciones
// de expresión son funciones anónimas que se asignan a una variable.
// NOTA: es una convención crear las funciones de expresión como const, para asi evitar que se sobreescriban en el futuro, y perderlas.

// Ejemplo 1: función de expresión con parametros y sin retorno.

const numeroPar = function(numero){
    // Verificamos si el numero es par o impar.
    if(numero % 2 === 0){
        console.log(`El numero ${numero} es par.`);
    }else{
        console.log(`El numero ${numero} es impar.`);
    }
};

numeroPar(5);
numeroPar(10);



// Ejemplo 2: función de expresión con parametros y con retorno.
const numeroMayor = function(num1, num2){
    // Evaluamos si el primer numero es mayor que el segundo.
    if(num1 > num2){
        return `El numero ${num1} es mayor que el numero ${num2}`;
    }else{
        return `El numero ${num2} es mayor que el numero ${num1}`;
    }
};

const respuesta = numeroMayor(5,10);

console.log(respuesta);





// Funciones Anónimas (Lambda - λ)

// En este caso (hacemos spoiler) utilizamos un metodo de arrays llamado forEach, 
// que nos permite recorrer un array y realizar una acción por cada elemento del array.

const nombres = ["Diego", "Luis", "Mayra", "Cristobal", "Nestor", "Waldemar", "Guillermo", "Paul", "Johanny"];

nombres.forEach(
    // En este caso la funcion anonima recibe un parametro (nombre) y muestra un mensaje en consola.
    function(nombre){
        console.log(`Hola ${nombre}, ten un buen dia!`);
    }
);




// Funciones de flecha (Arrow Functions)

// Las funciones de flecha son una forma más simple de escribir funciones anónimas, llegaron en ES6
// y se han vuelto muy populares por su sintaxis más corta y clara.
 // NOTA: Ls funciones de flechas son las unicas que pueden manejar retorno implicito, es decir
// si la funcion solo tiene una linea de código, no es necesario escribir el return ni colocar las llaves {}.


const exponente = (base, exponente) => base ** exponente;

function exponent(base, exponente){
    return base ** exponente;
};


// En este caso la funcion de flecha recibe un parametro (nombre) y muestra un mensaje en consola.
nombres.forEach( (nombre) => console.log(`Hola ${nombre}, ten un buen dia!`) );

// Funcion de flecha con retorno implicito.
const division = (num1, num2) => num1 / num2; 

// Funcion de flecha con retorno explicito.
const multiplicacion = (num1, num2) => { return num1 * num2; };




// Funciones Autoinvocadas: son funciones que se ejecutan inmediatamente después de ser definidas.
// tienen la particularidad de que una vez que se ejecutan, no se pueden volver a llamar.

// En que casos se utilizan las funciones autoinvocadas?
// 1) Cuando necesitamos ejecutar una tarea de inmediato.
// 2) Cuando necesitamos ejecutar una tarea solo una vez.
// 3) Cuando necesitamos encapsular nuestro código para evitar conflictos con otras funciones.
// 4) Cuando necesitamos proteger nuestro código de ser modificado por otros scripts.
// 5) Cuando necesitamos proteger nuestras variables de ser accedidas por otros scripts.
// 6) Cuando necesitamos realizar una tarea de inicialización de nuestro script, como por ejemplo:
//    cargar una lista de productos, cargar un slider, cargar un carrusel, realizar una petición 
//    a una API, extraer datos de una base de datos, etc.


// Ejemplo de función con función de flecha
// Esta funcion sumara los dos parametros que recibe y el resultado se mostrará en consola.
((param1, param2)=>{console.log(param1 + param2)})(10,20);


// Ejemplo de función con función anónima
// Esta funcion concatenará los dos parametros que recibe y el resultado se retornará.
(function(param1, param2){ return `Hola ${param1} ${param2}`})("Diego", "Rodriguez");