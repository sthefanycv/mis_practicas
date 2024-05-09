/*
    Las condicionals o estructuras de control son un conjunto de instrucciones que evalúan una expresión
    y solo se ejecutarán si dicha expresión es verdadera. 
    JavaScript admite dos expresiones condicionales: (if...else) y (switch).

    Ademas veremos una nueva forma de escribir condicionales llamada operador ternario.
*/

// if-else: Esta estructura de control evalúa una expresión y ejecuta un bloque de código si la expresión es verdadera.
// if: "si" la expresión es verdadera, se ejecuta el bloque de código.
// else: "de lo contrario", se ejecuta el bloque de código dentro del else.
// else if: "de lo contrario, si", se ejecuta el bloque de código dentro del else if.



// Solicitamos al usuario que seleccione una opcion
const opcion = prompt("Selecciona una opción: \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir");
let numero1;
let numero2;
let total;

if(opcion === "1" || opcion === "sumar"){
    alert("Has seleccionado la opción de sumar");
    numero1 = prompt("Ingresa el primer número");
    numero2 = prompt("Ingresa el segundo número");
    total = +numero1 + +numero2;
    alert(`La suma de ${numero1} + ${numero2} es igual a ${total}`);
}else if(opcion === "2" || opcion === "restar"){
    alert("Has seleccionado la opción de restar"); 
    numero1 = prompt("Ingresa el primer número");
    numero2 = prompt("Ingresa el segundo número");
    total = +numero1 - +numero2;
    alert(`La resta de ${numero1} + ${numero2} es igual a ${total}`);
}else if(opcion === "3" || opcion === "multiplicar"){
    alert("Has seleccionado la opción de multiplicar");
    numero1 = prompt("Ingresa el primer número");
    numero2 = prompt("Ingresa el segundo número");
    total = +numero1 * +numero2;
    alert(`La multiplicacion de ${numero1} + ${numero2} es igual a ${total}`);              
}else if(opcion === "4" || opcion === "dividir"){
    alert("Has seleccionado la opción de dividir");
    numero1 = prompt("Ingresa el primer número");
    numero2 = prompt("Ingresa el segundo número");
    total = +numero1 / +numero2;
    alert(`La division de ${numero1} + ${numero2} es igual a ${total}`);
}else{
    alert("Opción no válida");
};



// Ejercicio para realizar en casa:
// Realiza la logica de un cajero automatico que permita lo siguiente:

// 1- Solicitar al usuario que ingrese su clave personal
// 2- Si la clave es correcta, mostrar un mensaje de bienvenida con un menu de opciones (retirar, depositar, consultar saldo)
// 2.1- Si el usuario selecciona la opcion de retirar, solicitar el monto a retirar y mostrar un mensaje con el monto retirado y otro
// con el saldo restante.
// 2.2- Si el usuario selecciona la opcion de depositar, solicitar el monto a depositar y mostrar un mensaje con el monto depositado 
// y otro con el saldo actualizado.
// 2.3- Si el usuario selecciona la opcion de consultar saldo, mostrar un mensaje con el saldo actual.
// 3- Si la clave es incorrecta, mostrar un mensaje de error










/* Switch: Permite ejecutar un bloque de codigo basandose en casos.
    La sintaxis de switch consiste en una expresion a evaluar y en base a los resultados esperados,
    se desarrollan los casos a ejecutar, adicionalmente se coloca break para evitar que se ejecuten los demas
    casos y default para una respuesta por defecto en caso de que ningun caso se cumpla.
*/

// switch: Inicia la estructura de control, recibe como parametro la expresión a evaluar.
// case: Define los diferentes casos que se pueden evaluar.
// break: Finaliza la estructura de control.
// default: Se ejecuta si ninguno de los casos anteriores se cumple.


let producto = prompt(
    `Minimarket 🛒\n
    ¿Que desea comprar?:
    1) Carne
    2) Verduras
    3) Frutas
    4) Dulces
    5) Bebidas
    6) Productos de aseo personal
    7) Productos de Limpieza
    8) Papeleria
    9) No veo lo que busco`
);



// Establecemos un switch para evaluar la opción seleccionada por el usuario
// y ejecutar el bloque de código correspondiente.

switch(producto){
    case "1":
        alert("Seleccionaste la opción: Carne");
        break;
    case "2":
        alert("Seleccionaste la opción: Verduras");
        break;
    case "3":
        alert("Seleccionaste la opción: Frutas");
        break;
    case "4":
        alert("Seleccionaste la opción: Dulces");
        break;
    case "5":
        alert("Seleccionaste la opción: Bebidas");
        break;
    case "6":
        alert("Seleccionaste la opción: Productos de aseo personal");
        break;
    case "7":
        alert("Seleccionaste la opción: Productos de Limpieza");
        break;
    case "8":
        alert("Seleccionaste la opción: Papeleria");
        break;
    case "9":
        alert("Lo sentimos, pronto tendremos más productos disponibles");
        break;
    default:
        alert("Opción no válida");
};



// Operador ternario: Es una forma abreviada de escribir una estructura condicional if...else.
// ? Se ejecuta si la condición es verdadera.
// : Se ejecuta si la condición es falsa.

// En el siguiente ejemplo evaluaremos si una persona es mayor de edad o no.
// Primero con la estructura de control if...else y luego con el operador ternario.


// Variable que almacena la edad de una persona.
let edad = 18;

// Estructura de control if...else
if(edad >= 18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad");
}



// Operador ternario
edad >= 18  
    ? alert("Eres mayor de edad") 
    : alert("Eres menor de edad");




// Ejemplo 2 pero forzando if, else if y else

// If...else if...else
if(edad > 18){
    alert("Eres mayor de edad");
}else if(edad === 18){
    alert("Tienes 18 años");
}else{
    alert("Eres menor de edad");
};


// Operador ternario

edad > 18
    ? alert("Eres mayor de edad")
    : edad === 18
        ? alert("Tienes 18 años")
        : alert("Eres menor de edad");