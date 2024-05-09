/*
    ¿Que son las Variables?
    Las variables son espacios de memoria que se utilizan para almacenar valores que pueden ser modificados en cualquier momento.
    Estos valores pueden ser de cualquier tipo, como números, cadenas de texto, booleanos, entre otros.
    NOTA: No todas las variables pueden ser modificadas, esto depende del tipo de variable que se este utilizando.

    Tipos de Variables:

    Existen 3 tipos de variables en JavaScript var, let y const.

    - var: Es la forma antigua de declarar variables, pero aún se utiliza en muchos proyectos.
    - let: Es la forma moderna de declarar variables, se utiliza para variables que pueden ser modificadas.
    - const: Es la forma moderna de declarar variables, se utiliza para variables que no pueden ser modificadas.
*/



// ¿Como declarar una variable?
// Para declarar una variable se utiliza la palabra reservada let o const
// seguido del nombre de la variable y el valor que se le asignará.



// let: Variable de alcance(scope) limitado / Se puede reasirnar - sobreescribir / let no puede ser el nombre, solo el alcance

// = se usa para declarar el valor a una variable / NO PUEDO USAR - PARA SEPARAR

// Declarar una variable: palabra reservada (let, const)+nombre de la variable+signo de asignación+valor.

let edad = 30;

// Mostrar el valor de la variable en la consola.
console.log(edad);

// Sobreescribir el valor de la variable - Incrementar en 1 el valor actual.
edad = edad + 1; // 10 + 1 = 11
console.log(edad);

// Sobreescribir el valor de la variable - Incrementar en 1 el valor actual.
edad = edad + 1; // 11 + 1 = 12
console.log(edad);






// const: al igual que let es te alcance(scope) limitado, no se puede mutar, ni reasignar.
const nombre = "Diego";
const apellido =  "Rodriguez";
const estado = "online";

// Si intentamos sobrescribir el valor de la variable estado a "offline".
// estado = "offline"; // Error: No se puede reasignar una constante.


// ¿Que es la concatenacion?: Es la union de dos o mas cadenas de texto.
console.log(nombre+" "+apellido+": "+estado);

// ¿Que es la concatenacion?: Es la union de dos o mas cadenas de texto.
console.log(nombre+" "+apellido+": "+estado);



/* 
    ¿Cuantos estados puede tener una variable?

    La Respuesta es 3:

    - No Declaración: Es el proceso de no crear una variable.
    - Declaración: Es el proceso de crear una variable, no necesariamente se le asigna un valor.
    - Asignación o Inicialización: Es el proceso de asignar un valor a una variable.
*/

// Ejemplo, intentando llamar una variable que no ha sido declarada.

// console.log(pais); // Error: pais is not defined


// Declaración de la variable pais.
let pais; 

console.log(pais); // undefined


// Asignación de un valor a la variable pais.
pais = "Colombia";
console.log("Yo me encuentro en: "+pais);



/* ***  Declarando Variables con distintos tipos de datos *** */
// Tip:
// Corchetes []
// Llaves / Brackets {}

// Numero
const numero = 32; 

// String
const user = "Johanny";

// Array
let array = [1,2,3,4,5];

// Boolean // nestor
let activo = true;

// Null
let luz = null; 

// Undefined
let numHijos = undefined;

// String []
let cosas = ["cosa 1","cosa 2","cosa 3","cosa 4"];

// Number []
let array2 = [1,2,3,4,5];

// Boolean []
let valores = [true,false,true,false];

// Null []
const plata = [null,null,null];

// Undefined []
let informacion=  [undefined,undefined,undefined,undefined];

// Array [][]
let array3  = [[1, 2, 3], [4, 5,6], [7, 8, 9]]; 

// Array Mixto [] // abierta
let detodito = [undefined, true, false, "Mayra Carache", 1, 2.25];

// Array Any [] - Vacio
const arrayVacio = [];

// Array de variables // abierta
const ArrayVariables = [numero, user, activo, luz];

// Object (Que contenga, string, number, boolean, null, undefined, array, object, any)

const persona = {
    nombre: user, // "Johanny"
    apellido: "Colman",
    edad: 20,
    pais: "Chile",
    ciudad: "Santiago",
    telefono: "+569 12345678",
    estadoCivil: undefined,
    hijos: null,
    salario: 0.000,
    hobbies: ["Musica", "Programar", "Leer"],
    habilidades: {
        habilidad1: "Programación",
        habilidad2: "Diseño",
        habilidad3: "Cocina",
    },
    pagoAlDia: true
};





// Ejemplo realizado por Luis Romero.
const datos = {
    user: "Johanny",
    numero: 32,
    activo: true,
    luz: null,
    numeroHijos: undefined,
    array2: [1, 2, 3, 4, 5],
    caracteristicas: {
        car1: 1,
        car2: 2,
        car3: 3,
    },
    arrayVacio: [],
};




// Ejercicios para realizar en casa 

/*
    1.
    - Crea una variable llamada "nombre" y asignale tu nombre (String).
    - Crea una variable llamada "edad" y asignale tu edad (Number).
    - Crea una variable llamada "pais" y asignale el nombre de tu pais (String).
    - Crea una variable llamada "ciudad" y asignale el nombre de tu ciudad (String).
    - Crea una variable llamada "telefono" y asignale tu numero de telefono (String).
    - Crea una variable llamada "estadoCivil" y asignale tu estado civil (String o undefined).
    - Crea una variable llamada "hijos" y asignale la cantidad de hijos que tienes (Number).
    - Crea una variable llamada "salario" y asignale tu salario (Number o undefined).


    - Crea un mensaje en la consona en el cual concatenes todas las variables creadas anteriormente.
    El mensaje debe tener la siguiente estructura: 
    
    "Hola, mi nombre es {nombre}, tengo {edad} años, soy de {pais}, vivo en {ciudad}, mi numero de telefono es {telefono}, mi estado civil es {estadoCivil}, tengo {hijos} hijos y mi salario es de {salario}.".


    2. Crea 2 variables llamadas "numero1" y "numero2" y asignales un valor numerico.
    - Crea una variable llamada "suma" y asignale la suma de los dos numeros anteriores.
    - Crea una variable llamada "resta" y asignale la resta de los dos numeros anteriores.
    - Crea una variable llamada "multiplicacion" y asignale la multiplicacion de los dos numeros anteriores.
    - Crea una variable llamada "division" y asignale la division de los dos numeros anteriores.

    - Crea un mensaje en la consola para cada una de las operaciones matematicas realizadas concatenando con la
    siguiente estructura, Ejemplo: "La suma de {numero1} y {numero2} es igual a {suma}".
*/




