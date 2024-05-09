/*
    Se comoce como operadores aritmeticos a los simbolos que nos permiten
    realizar operaciones matematicas como sumar, restar, Multiplicar, Dividir, exponenciar, etc.


    Los operadores aritmeticos son los siguientes:
    - Suma (+): Suma dos valores.
    - Resta (-): Resta dos valores.
    - Multiplicacion (*): Multiplica dos valores.
    - División (/): Divide dos valores.
    - Exponenciación o Potenciación (**): Eleva un numero a la potencia de otro.
    - Módulo (%): Devuelve el residuo de una division.



    Tambien existen operadores aritmeticos para operaciones avanzadas como:
    - Positivo Unitario +valor: Si es posible, convierte un valor en numero. (Es equivalente a parseInt() ).
    - Negativo Unitario -valor: convierte un valor en negativo.
    - Incremento (++): Incrementa el valor de una variable en 1.
    - Decremento (--): Decrementa el valor de una variable en 1.
*/


const numero1 = 10;
const numero2 = 20;

// Suma (+): Suma dos valores.

// Ejemplo 1: Mostando resultado directamente en consola
console.log(numero1 + numero2);

// Ejemplo 2: Guardando el resultado en una variable
const suma = numero1 + numero2; //La constante se llama suma
console.log(suma);  

// Mostrando resultado usando concatenacion tradicional y template string (String Literal)

// Concatenacion tradicional
console.log("El resultado de la suma de " + numero1 + " + " + numero2 + " es: " + suma);

// Con template string/String Literal (Usando backticks/Comillas invertidas/Comillas literales) ``)
console.log(`El resultado de la suma de ${numero1} + ${numero2} es: ${suma}`);





// Resta (-): Resta dos valores.
const valor1 = 100;
const valor2 = 25;

// Ejemplo 1: Mostando resultado directamente en consola
console.log(valor1 - valor2);


// Ejemplo 2: Guardando el resultado en una variable
const resta = valor1 - valor2;
console.log(resta)

// Mostrando resultado usando concatenacion
console.log("El resultado de la resta de " + valor1 + " - " + valor2 + " es: " + resta);
console.log(`El resultado de la resta de ${valor1} - ${valor2} es: ${resta}`);





// Multiplicacion (*): Multiplica dos valores.
const precio1 = 100;
const precio2 = 25;

// Ejemplo 1: Mostando resultado directamente en consola
console.log(precio1 * precio2);


// Ejemplo 2: Guardando el resultado en una variable
const multiplicacion = precio1 * precio2;

// Mostrando resultado usando concatenacion
console.log("El resultado de la multiplicacion de " + precio1 + " x " + precio2 + " es: " + multiplicacion);
console.log(`El resultado de la multiplicacion de ${precio1} x ${precio2} es: ${multiplicacion}`);

// STRING CON NUMERO 
//Trata el simbolo + para concatenar, pero los otros los toma como una suma 

console.log("25" + 25);
console.log("25" - 25);
console.log("25" / 25);
console.log("25" * 25);



// División (/): Divide dos valores.
const cifra1 = 100;
const cifra2 = 25;

// Ejemplo 1: Mostando resultado directamente en consola
console.log(cifra1 / cifra2);


// Ejemplo 2: Guardando el resultado en una variable
const division = cifra1 / cifra2;

// Mostrando resultado usando concatenacion
console.log("El resultado de la division de " + cifra1 + " / " + cifra2 + " es: " + division);
console.log(`El resultado de la division de ${cifra1} / ${cifra2} es: ${division}`);




// Exponenciacion / Potencia: Calcula la base a la potencia del exponente.
const potencia = 5 ** 2;
potencia;

console.log(5 ** 6);
/*
    1) 5: 5   // Cinco a la primera potencia.
    2) 5 x 5: 25 // Cinco a la segunda potencia.
    3) 25 x 5: 125 // Cinco a la tercera potencia.
    4) 125 x 5: 625 // Cinco a la cuarta potencia.
    5) 625 x 5: 3125 // Cinco a la quinta potencia.
    6) 3125 x 5: 15625 // Cinco a la sexta potencia.
*/




// Módulo: devuelve el resto (residuo) de la división entre dos números. 
// (Se usa comunmente para determinar numeros pares e impares)
let resultado = 10 % 2;
resultado;
resultado = 9 % 2;
resultado;


// Por ejemplo, para determinar si un numero es par o impar, se puede utilizar el operador modulo (%) entre 2.
// Si el resultado es 0, entonces el numero es par, de lo contrario es impar.


let numeroPar = 10;
let numeroImpar = 9;

console.log(numeroPar % 2); // 0, entonces el numero es par.
console.log(numeroImpar % 2); // 1, entonces el numero es impar.





// Operadores avanzados

// Positivo unario (+): Convierte un valor en numero.
let variable1 = "10";

// Podemos ayudarnos con la funcion typeof() para saber el tipo de dato de una variable.
console.log(typeof variable1);

// convertimos la variable (que es string) en numero usando el operador positivo unario (+)
variable1 = +variable1;

// Ahora la variable es de tipo numero, veamoslo en la consola con typeof()
console.log(typeof variable1);


// En el siguiente ejemplo usaremos prompt() y alert() y positivo unario (+) 
// para sumar dos numeros ingresados por el usuario y mostrar el resultado en un mensaje de alerta.
// prompt() se usa para pedir un valor al usuario.
// alert() se usa para mostrar un mensaje al usuario.

// let valorIngresado1 = prompt("Ingresa un numero: ");
// let valorIngresado2 = prompt("Ingresa otro numero: ");
// const total = +valorIngresado1 + +valorIngresado2;
// alert(`El resultado de la suma de ${valorIngresado1} + ${valorIngresado2} es: ${total}`);





// Negativo Unitario: Devuelve el negativo de su operando.
let numeroPositivo = 10;

// Negativo unitario
let numeroNegativo = -numeroPositivo;

console.log(numeroNegativo);

// Si queremos convertir un numero negativo en positivo, realizamos la operacion inversa.
numeroPositivo = -numeroNegativo;

console.log(numeroPositivo);






// Incremento Unitario: Ingrementa en 1 el valor de una variable.
// IMPORTANTE: la variable debe ser de tipo let, ya que const no permite reasignacion de valores.

let numero = 5;

numero++; // Esto es equivalente a: numero = numero + 1;
console.log(numero);

numero++;
console.log(numero);

numero++;
console.log(numero);

numero++;
console.log(numero);





// Decremento Unitario: Resta en 1 el valor de una variable.
// IMPORTANTE: la variable debe ser de tipo let, ya que const no permite reasignacion de valores.

numero--; // Esto es equivalente a: numero = numero - 1;
console.log(numero);

numero--;
console.log(numero);

numero--;
console.log(numero);

numero--;
console.log(numero);




// Ejercicio para realizar en casa
// Realiza una calculadora que solicite al usuario 2 numeros y realice las siguientes operaciones:
// - Suma
// - Resta
// - Multiplicacion
// - Division
// - Exponenciacion

// Puedes usar prompt() y alert() para solicitar los numeros y mostrar los resultados.
// Muestra un mensaje por cada resultado obtenido con el siguiente formato:
// "El resultado de la {operacion} de {numero1} {simboloperacion} {numero2} es: {resultado}"