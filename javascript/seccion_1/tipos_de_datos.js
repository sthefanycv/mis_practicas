/* 
    ¿Que son los tipos de datos en JavaScript?
    Los tipos de datos son una clasificación de los valores que pueden tener las variables en JavaScript.

    Estos se utilizan para determinar el tipo de operaciones que se pueden realizar con los valores y 
    la forma en que se almacenan en la memoria.

    Tipos de datos en JavaScript:
    - String: Cadena de texto.
    - Number: Números.
    - Boolean: Verdadero o falso.
    - Null: Valor nulo.
    - Undefined: Valor indefinido.
    - Object: Objeto.
    - Array: Arreglo o lista de valores.
    - NaN: Not a Number: Valor que no es un número, usualmente se obtiene al realizar operaciones matemáticas incorrectas.
    entre valores de diferentes tipos de datos.
*/



// String (CADENA DE CARACTERES)
"Diego Rodriguez";
'Diego Rodriguez';
'Es el año 2024'

// Number (numero: entero, decimal)
100
100.5


// Por ejemplo:

// Si escribo 100 y '100' en JavaScript, ¿Son iguales?
// No, 100 es un número y '100' es una cadena de texto.


// Boolen (Binary)
true
false


// Array: Representa una lista de valores.
[1,2,3]
["a","b","c"]
[1,2,3,"a","b","c",true,false,"1", 1.5, [1,2,3], "Diego Rodriguez"]



// Undefined: Representa un valor que no se ha definido aún.
undefined


// Null: Representa un valor nulo o vacío.
null


// Object

// Ejemplo 1
typeof {
    nombre: "Diego",
    apellido: "Rodriguez",
    edad: 25,
    nacionalidad: "Venezolana",
    profesion: "Desarrollador Web",
    hobbies: ["Musica", "Programar", "Leer", "Cocinar", "Videojuegos", "Anime"],
    salario: 100.30
}

// Ejemplo 2
typeof {
    producto: "Mouse",
    marca: "Logitech",
    modelo: "M185",
    color: "Gris",
    precio: 15.99,
    inalambrico: true,
    botones: 3,
    dpis: [1000, 1500, 2000, 2500, 3000],
    garantia: null,
    fecha_compra: undefined,
    funcionesEspeciales: {
        scroll: true,
        zoom: true,
        retroceso: true
    }
}



// Ejercicios para realizar en casa:

/*
    1- Elabora un mensaje que se muestre en la consola ( console.log("mensaje aqui"); ) del navegador, donde se muestre tu nombre, edad, nacionalidad, profesión y hobbies.
    2- Crea un objeto que represente un producto, el cual debe tener los siguientes atributos: 
        - nombre (Cadena de texto)
        - marca (Cadena de texto)
        - modelo (Cadena de texto)
        - colores (Arreglo con los colores disponibles)
        - precio (Número decimal)
        - garantia (Valor nulo)
        - fecha_compra (Cadena de texto o valor indefinido)
        - funcionesEspeciales (Objeto con las funciones especiales del producto)
        - vendedor (cadena de texto con el nombre de la tienda)
        - stock (Número entero con la cantidad de productos disponibles)
        - fecha_lanzamiento (Cadena de texto con la fecha de lanzamiento del producto)
        - dimensiones (Objeto con las dimensiones del producto)
        - peso (Número decimal con el peso del producto)
        - inalambrico (Valor booleano)
        - conectividad (objeto con las opciones de conectividad: ejemplo {bluetooth: true, wifi: false, usb: true})
*/
