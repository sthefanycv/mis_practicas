/*
    ¿Que son los metodos?
    Son funciones que se pueden ejecutar sobre un elemento y que nos permiten realizar acciones sobre ellos.
    
    ¿Que son los metodos de los strings?
    Los metodos de los strings son funciones que nos permiten realizar acciones sobre los strings, 
    para modificarlos, extraer informacion, etc.

    ¿Como se utilizan los metodos de los strings?
    Existe una gran cantidad de metodos de los strings y para utilizarlos se hace de la siguiente forma:

    Ej: string.metodo()
    NOTA: El operador que se utiliza para invoca un metodo es el punto (.) conocido como operador de miembro.


    ¿Cuáles son los metodos de los strings?
    1- string.length: Aunque no es un metodo, esta propiedad es muy utilizada para obtener la longitud de un string,
    en pocas palabras, cuantos caracteres tiene un string.
    2- string.toUpperCase(): Convierte un string a mayusculas.
    3- string.toLowerCase(): Convierte un string a minusculas.
    4- string.indexOf(substring): Permite buscar un substring dentro de un string y nos devuelve la
    posicion en la que se encuentra.
    5- string.substring(inicio, fin): Permite extraer una parte de un string desde la posicion inicio 
    hasta una posicion antes de fin.
    6- string.trim(): Elimina los espacios en blanco al principio y al final de un string, como maximo
    elimina 3 espacios en blanco al principio y al final.
    7- string.charAt(posicion): Permite obtener el caracter que se encuentra en la posicion indicada.
    8- string.split(separador): Permite dividir un string en un array de strings, el separador es el
    caracter que se utiliza para dividir el string.
    9- string.replace(substring, nuevoSubstring): Permite reemplazar un subcadena por otra subcadena
    en un string.
    10- string.includes(substring): Permite saber si un string contiene una subcadena, devuelve true si
    la contiene y false si no la contiene.
    11- string.startsWith(substring): Permite saber si un string comienza con una subcadena, devuelve true
    si comienza con la subcadena y false si no comienza con la subcadena.
    12- string.endsWith(substring): Permite saber si un string termina con una subcadena, devuelve true
    si termina con la subcadena y false si no termina con la subcadena.
    13- string.slice(inicio, fin): Permite extraer una parte de un string desde la posicion inicio hasta
    una posicion antes de fin, es similar al metodo substring, pero este metodo permite utilizar valores
    negativos para las posiciones.
    14- string.repeat(n): Permite repetir un string n veces.
    15- string.concat(string2): Permite concatenar dos strings.
*/


// Ejemplo 1: Metodo length
let nombre = "Diego Rodriguez";

console.log(`La longitud del string es: ${nombre.length}`);
console.log("Hola Mundo".length);


// Ejemplo 2: Metodo toUpperCase
console.log(`El texto en mayusculas es: ${nombre.toUpperCase()}`);


// Ejemplo 3: Metodo toLowerCase
console.log(`El texto en minusculas es: ${nombre.toLowerCase()}`);


// Ejemplo 4: Metodo indexOf(substring)
//           0...        12
let texto = "Hola Mundo, soy Diego, soy Programador, y soy Amante de la musica";
console.log(`La posicion de la palabra "soy" es: ${texto.indexOf("soy")}`);


// Ejemplo 5: Metodo substring(inicio, fin)
let mensaje = "Hola, soy Diego Rodriguez, soy programador, me encanta la musica y tambien enseño programacion";
console.log(`Este es el mensaje original: ${mensaje}`);

let posProgramador = mensaje.indexOf("programador");
console.log(posProgramador);

let textoExtraido = mensaje.substring(posProgramador, posProgramador+11);
console.log(`Se ha extraido el siguiente texto: ${textoExtraido}`)




// Ejemplo 5.1: Metodo substring(inicio, fin), extraer el texto "Grupo 16" del mensaje.
let mensaje2 = "Este ejercicio se resolverá con el codigo proporcionado por los estudiantes del Grupo 16 de Lexpin";
console.log(`Del siguiente mensaje se extraera la frase "Grupo 16": ${mensaje2}`);
console.log(`El mensaje tiene ${mensaje2.length} caracteres`);

// Para saber donde comineza la frase "Grupo 16" usamos el metodo indexOf.
let posGrupo16 = mensaje2.indexOf("Grupo 16");

console.log(`La frase "Grupo 16" comienza en la posicion: ${posGrupo16}`);

// Para extraer la frase "Grupo 16" usamos el metodo substring y le pasamos como parametros 
// la posicion donde comienza la frase y la longitud de la frase.
// let mensajeExtraido2 = mensaje2.substring(80, 88);
let mensajeExtraido2 = mensaje2.substring(posGrupo16, posGrupo16+8);

console.log(`La frase extraida es: ${mensajeExtraido2}`);



// Ejemplo 6: Metodo trim
let nombre2 = "   Johanny   ";
console.log(`El nombre ${nombre2} tiene: ${nombre2.length} caracteres`);

// Eliminamos los espacios en blanco al principio y al final del string.
nombre2 = nombre2.trim();

console.log(`El nombre ${nombre2} tiene: ${nombre2.length} caracteres`);



// Ejemplo 7: Metodo charAt(posicion)
let palabra = "Javascript";
console.log(`El caracter en la posicion 8 es: ${palabra.charAt(8)}`);




// Ejemplo 8: Metodo split(separador)
let chat = "El chat de la clase de programacion es muy divertido";

let palabrasDelChat = chat.split("es");

console.log(palabrasDelChat);



// Ejemplo 9: Metodo replace(substring, nuevoSubstring)
let mensaje4 = "En esta clase estamos aprendiendo a programar en Cobol";
console.log(`El mensaje original es: ${mensaje4}`)

// Reemplazamos la palabra Cobol por Javascript.
mensaje4 = mensaje4.replace("Cobol", "Javascript");
console.log(`El mensaje modificado es: ${mensaje4}`);



// Ejemplo 10: Metodo includes(substring)
let mensaje5 = "En esta clase estamos aprendiendo sobre Metodos de Strings en Venezuela, laspin";

// console.log( mensaje5.includes("Strings") );

if( mensaje5.includes("laspin") ){
    mensaje5 = mensaje5.replace("laspin", "lexpin");
    console.log(mensaje5);
}else{
    console.log("El mensaje no contiene la palabra indicada");
    console.log(mensaje5);
}



// Ejemplo 11: Metodo startsWith(substring)
let mensaje6 = "daniel@gmail.com"
console.log(mensaje6);

mensaje6.startsWith("diego") 
    ? console.log("Si comienza con 'diego'") 
    : console.log("No comienza con 'diego'");

// Ejemplo 12: Metodo endsWith(substring)
mensaje6.endsWith(".com") 
    ? console.log("Si termina con '.com'") 
    : console.log("No termina con '.com'");



// Ejemplo 13: Metodo slice(inicio, fin)
let mensaje7 = "Este es un mensaje de prueba";
console.log(mensaje7);

console.log(mensaje7.slice(3, -1));



// Ejemplo 14: Metodo repeat(n)
let mensaje8 = "Hola Mundo ";

let horizontal = "-";
let vertical = "|                  |\n";

console.log(horizontal.repeat(20));
console.log(vertical.repeat(5));
console.log(horizontal.repeat(20));


// Ejemplo 15: Metodo concat(separador,string2)
let nombre3 = "Diego";
let apellido = "Rodriguez";

let nombreCompleto = nombre3.concat(" 123 ", apellido);
console.log(nombreCompleto);