/*
    ¿Que son los operadores de asignación?
    Los operadores de asignación son simbolos que se utilizan para asignar un valor a una variable.

    Existen varios tipos de operadores de asignación, los cuales son los siguientes:
    - Asignación simple(=): Asigna un valor a una variable.
    - Asignación de adición(+=): Suma un valor a una variable, es lo mismo que hacer: variable = variable + valor.
    - Asignación de sustracción(-=): Resta un valor a una variable, es lo mismo que hacer: variable = variable - valor.
    - Asignación de multiplicación(*=): Multiplica un valor a una variable, es lo mismo que hacer: variable = variable * valor.
    - Asignación de división(/=): Divide un valor a una variable, es lo mismo que hacer: variable = variable / valor.
    - Asignación de módulo(%=): Divide un valor a una variable y devuelve el residuo, es lo mismo que hacer: variable = variable % valor.
*/


// Asignación simple(=)
let nombre = "Diego";



// Asignación de adición(+=)
let miVariable = 10;
console.log(`La variable vale: ${miVariable}`);


// Sumamos 5 a la variable miVariable
miVariable += 5;  // miVariable = miVariable + 5;
console.log(`La variable se actualizo y ahora vale: ${miVariable}`);


// Sumamos 7 a la variable miVariable
miVariable += 7; // miVariable = miVariable + 7
console.log(`La variable se actualizo y ahora vale: ${miVariable}`);


// Sumamos 10 a la variable miVariable
miVariable += 10; // miVariable = miVariable + 10
console.log(`La variable se actualizo y ahora vale: ${miVariable}`);


// Sumamos 2 a la variable miVariable
miVariable += 2; // miVariable = miVariable + 2
console.log(`La variable se actualizo y ahora vale: ${miVariable}`);



// Asignación de sustracción(-=)
let saldo = 100;
console.log(`Tienes un saldo inicial de: ${saldo}$`);

// Restamos 10 a la variable saldo
saldo -= 10; // saldo = saldo - 10
console.log(`El saldo se actualizo y ahora tienes: ${saldo}$`);

// Restamos 20 a la variable saldo
saldo -= 20; // saldo = saldo - 20
console.log(`El saldo se actualizo y ahora tienes: ${saldo}$`);

// Restamos 15 a la variable saldo
saldo -= 15; // saldo = saldo - 15
console.log(`El saldo se actualizo y ahora tienes: ${saldo}$`);

// Restamos 5 a la variable saldo
saldo -= 5; // saldo = saldo - 5
console.log(`El saldo se actualizo y ahora tienes: ${saldo}$`);





// Asignación de multiplicación(*=)
// Para este ejemplo usaremos prompt() y alert() para interactuar con el usuario y mostrar los resultados dinamicamente

// Establecemos el precio base para un articulo
let precio = 10;


// Preguntamos al usuario cuantos articulos quiere comprar.
let articulos = +prompt("¿Cuantos articulos quieres comprar?");

//prompt es u dato de tipo string, para convertirlo en numero, se usa el operador positivo unitario (+) lo que da en +prompt

// Multiplicamos el precio base por la cantidad de articulos que quiere comprar el usuario y mostramos el resultado en un alert.
precio *= articulos; // precio = precio * articulos

alert(`El total de la compra es: ${precio}$`);



// Asignación de división(/=)
let total = 270;

// Preguntamos al usuario cuantas personas quieren pagar el total.
let personas = +prompt(`El total es: ${total}$, ¿Entre cuantas personas se realizara el pago?`);

// Dividimos el total entre la cantidad de personas que van a pagar y mostramos el resultado en un alert.
total /= personas; // total = total / personas

alert(`Cada persona debe pagar: ${total}$`);

