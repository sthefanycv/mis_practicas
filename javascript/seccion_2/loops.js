/*
    ¿Que son los loops?
    Los loops son estructuras de control que nos permiten repetir un bloque de codigo hasta que se cumpla una condicion.
    
    ¿Cuales son los tipos de loops que existen en JavaScript?
    En JavaScript existen 5 tipos de loops, que son los siguientes:
    - For: Ejecuta un bloque de codigo un numero especifico de veces.
    - For Of: Itera sobre los valores de un array.+-
    - For In: Itera sobre las propiedades de un objeto.
    - While: Ejecuta un bloque de codigo mientras se cumpla una condicion.
    - Do While: Ejecuta un bloque de codigo al menos una vez y luego se ejecuta mientras se cumpla una condicion.
*/


// Ejemplo de For:
// For recibe los siguienres parametros: for(inicializacion; condicion/numeroDeCiclos ;incremento)

// Mostramos la tabla de mutiplicar del 5
for(let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
};



// Ejemplo de For Of:

let productos = ["Celular","TV","Microfono","Estereo","Proyector","Teclado"];

// for/of - Recorre los valores de un array.
for(let producto of productos){ // Se lee: Por cada producto del array productos haremos...
    console.log(`${producto}`);
    console.log(`${productos.indexOf(producto)}) - ${producto}`);
};





// Ejemplo de for/in: Recorre las propiedades de un objeto de forma ordenada, se utiliza a menudo para
// recorrer objetos NO arrays.
// Sin embargo es posible recorrer un array con for in, pero el resultado no serian los valores sino los indices. 

let persona = {
    nombre: "Samuel",
    edad: 20,
    ciudad: "Santiago",
    telefono: "+569341234567",
    email:"samuel@gmail.com"
};

for(let propiedad in persona) { // Se lee: Por cada propiedad en el objeto persona haremos...
    console.log(`Propiedad: ${propiedad} `);
    console.log(`Valor: ${persona[propiedad]} `);
}



// Ejemplo usando for in con un array
const nombres = ["luis", "Mayra", "Johanny", "Guillermo", "Jose", "Paul"];

for(let nombre in nombres){
    console.log(`Indice: ${nombre}`);
    console.log(`Nombre: ${nombres[nombre]}`);
}







// Ejemplo de While:
// El ciclo while se ejecuta mientras la condicion sea verdadera.

let edad = 0;

while(edad <= 18){
    console.log(`Tienes ${edad} años, santa te trajo un regalo?`);
    edad++;
};

console.log("Ya eres mayor de edad, santa no te traera regalos");



// Ejemplo 2 de While: Deteniendo un menu solo cuando el usuario selecciona "salir".

let opcion = prompt(`Selecciona una opcion:
1. Ingresar
2. Salir`);

while(opcion != "2"){ // Esto se lee: Mientras la opcion sea distinta de 2, haremos...
    opcion = prompt(`Selecciona una opcion:
    1. Ingresar
    2. Salir`);
}

alert("Saliendo del menu");





// Ejemplo de Do While: El ciclo do while se ejecuta al menos una vez y luego se ejecuta mientras la condicion sea verdadera.
let respuesta = prompt(`Desea continuar? (s/n)`);

do{
    alert("Hola");
    respuesta = prompt(`Desea continuar? (s/n)`);
}while(respuesta.toLowerCase() === "s" || respuesta.toLowerCase() === "si");

alert("Adios");




// Ejercicios para practicar los loops, for, while y do while, determina que loop es el mas adecuado para cada ejercicio.

// 1. Crear un programa que muestre los numeros del 1 al 100.
// 2. Crear un programa que muestre los numeros del 100 al 1.
// 3. Crear un programa que muestre los numeros pares del 1 al 100.
// 4. Crear un programa que muestre los numeros impares del 1 al 100.
// 5. Crear un programa que muestre los numeros del 1 al 100, pero que los multiplos de 3 muestren "Fizz" y los multiplos de 5 muestren "Buzz".
// 6 Crea un programa que solicite al usuario un numero y muestre la tabla de multiplicar de ese numero.
// 6.1 Crea un programa que solicite al 2 numeros y retorne la base al exponende de: el primer numero elevado al segundo numero.

// 7. Crea un programa que solicite un producto y lo agregue a un array de productos, el programa debe tener
// un menu con las siguientes opciones:
//  A. Agregar producto
//  B. Mostrar productos (esto debe ser un array de objetos con las propiedades id, nombre y precio)
//  C. Estimar total (debe sumar el precio de la sumatoria de los productos)
//  D. Pagar (debe mostrar el total de la compra y un mensaje de agradecimiento por la misma)
//  E. Eliminar producto (debe solicitar el id del producto a eliminar)
//  F. Salir (debe salir del programa solamente si ya se ha pagado de lo contrario debe enviar a pagar)

