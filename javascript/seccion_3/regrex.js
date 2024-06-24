/* 
    ¿Qué Son Expresiones Regulares?
    Las expresiones regulares(también conocida como regexp o regex) son una secuencia de caracteres que 
    forman un patrón de búsqueda, y se utilizan para hacer comparaciones con texto.
    Son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto 
    con métodos de JavaScript como .match(), .replace() etc..

    Se utilizan en muchos lenguajes de programación, incluyendo JavaScript, para verificar si una cadena de 
    texto cumple con un determinado patrón o para reemplazar texto por un patrón determinado. 
    Las expresiones regulares están escritas entre barras / y pueden incluir una combinación de caracteres 
    literales y caracteres especiales que representan un conjunto de caracteres posibles. 
    
    Por ejemplo, la expresión regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un número de celular en formato 111-111-11-11.

    Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
    de un párrafo etc...


    Sintaxis:
    • const regexp = /.e.t./i;


    Coincidencias Basicas
        .       - Representa un comodin, es decir, cualquier Caracter, excepto nueva linea.
        \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
        \d      - Cualquier Digitos (0-9)
        \D      - No es un Digito (0-9)
        \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
        \W      - No es un Caracter de Palabra.
        \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
        \S      - No es un Espacio, Tab o nueva linea.

        Limites
        \b      - Limite de Palabra
        \B      - No es un Limite de Palabra
        ^       - Indica el inicio de una cadena de texto
        $       - Indica el final de una cadena de texto

        Cuantificadores:
        *       - Coincide con 0 o más ocurrencias del patrón anterior.
        +       - Coincide con 1 o más ocurrencias del patrón anterior.
        ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
        {3}     - Numero Exacto
        {3,4}   - Rango de Numeros (Minimo, Maximo)
        {1,}    - De 1 a infinito

        Conjuntos de Caracteres
        []      - Permite indicar un conjunto de caracteres posibles
        [^ ]    - Permite indicar un conjunto de caracteres que no son posibles (Excluidos)

        Grupos
        ( )     - Grupo de coincidencias
        |       - Permite indicar una alternativa a buscar, es decir, una coincidencia u otra (OR)



    probar en: http://regexr.com/77g8v

    ia para regex: Autoregrex
*/

// Definiendo expresion regular 

// Flags o Modificadores: Son caracteres que se colocan al final de la expresion regular para indicar que tipo de busqueda se realizara.
// g: buscar todas las coincidencias
// i: sin distincion de mayusculas
// m: busca en todas las lineas



// Metodos de busqueda
// .match(): Devuelve un array con las coincidencias encontradas
// .test(): Devuelve true si encuentra una coincidencia, de lo contrario false
// .replace(): Reemplaza las coincidencias encontradas por un nuevo valor




let parrafo = 
`Con las expresiones regulares podemos realizar busquedas de secuencias o patrones de caracteres,
un ejemplo de su uso es al detectar palabras ofensivas en un chat, o al obtener todos los numeros
telefonicos que coincidan con un patron establecido.

Ejemplo: 

Daniel Moran	
daniel_m@hotmail.com
934 123 45 67
www.dmoram.com

Migel Soto
934-234-56-78
miguel123@outlook.com
https://www.miguel.com.cl

Camila Duran
412 345 67 89
www.camila.shop
cami-duran@gmail.com`;



const correo = "diego_123@mail.com";
const correo2 = "diegorodriguez@lexpin.online";
const correo3 = "diegorodriguez@edu.online";
const correo4 = "diegorodriguez@edu.diegox";


// Definiendo expresion regular 

// Flags o Modificadores: Son caracteres que se colocan al final de la expresion regular para indicar que tipo de busqueda se realizara.
// g: buscar todas las coincidencias
// i: sin distincion de mayusculas
// m: busca en todas las lineas



// Metodos de busqueda
// .match(): Devuelve un array con las coincidencias encontradas
// .test(): Devuelve true si encuentra una coincidencia, de lo contrario false
// .replace(): Reemplaza las coincidencias encontradas por un nuevo valor


// Validación de correo electrónico
let email = "susanaxyz@yahoo.com";
const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]+$/; //Tiene un punto pero por lo general no se usa porque es peligroso para la seguridad

//el simbolo de + concatena una cadena de texto con otra o con un valor o lo que vaya a colocar indiferentemente 

if (emailRegex.test(email)) {
    console.log("El correo electrónico es válido.");
}else{
    console.log("El correo electrónico no es válido.");
};




// Validación de números telefónicos
let telefono = "+58 426-123-4568";
let telefono2 = "+58 416-234-5678";
let telefono3 = "+58 424-345-6789";
let telefono4 = "+58 412-456-7890";

const numeroVzlRegex = /^\+58\s4\d{2}-\d{3}-\d{4}$/; 

if(numeroVzlRegex.test(telefono4)){
    console.log("El número telefónico es válido.")
}else{
    console.log("El número telefónico no es válido.")
};



// Validación de fechas en formato MM/DD/YYYY
let fecha = "12/06/2024";
const fechaRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

//Primero evalua un nuemro del 0 al 9 o del 0 al 2 para el mes. Luego evalua un nuemro del 0 al 1 al 9 o un numero va del 1 al cualquier numero (1\d) del 2 al cualwuier numero (2\d),y el ultimo del 3 al 1 para que sea el 31 (3[01]), luego evalua e año comienza con 19 por que sea un año de 1900 y luego esta el 20 por si sea un año del 2000 y luego estan 2 digitos (\d{2})

if(fechaRegex.test(fecha)){
    console.log("La fecha es válida.")
}else{
    console.log("La fecha no es válida.")
};


// Validación de URLs
let url = "https://www.pagina123.com/productos/ofertas-unicas/semanal";
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]+)([\/\w \.-]*)*\/?$/;
if (url.match(urlRegex)) {
    console.log("La URL es válida.");
} else {
    console.log("La URL no es válida.");
}

// Validación de nombres completos con letras y espacios
let nombre = "Diego Rodriguez";
let nameRegex = /^[a-zA-Z\s]+$/;
if (nombre.match(nameRegex)) {
    console.log("El nombre es válido.");
} else {
    console.log("El nombre no es válido.");
}








// Ejercicios para realizar en casa

/*
    1- Realiza un formulario de registro con los siguientes campos:
        - Nombre
        - Apellido
        - Edad
        - Correo Electrónico
        - Teléfono
        - URL de foto de perfil
        - Pais
        - Ciudad
        - Dirección

        Realiza las validaciones necesarias para cada campo con expresiones regulares.
*/