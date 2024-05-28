/*
    ¿Que es un array?
    Un array es un objeto que contiene una colección ordenada de valores. 
    Cada valor se almacena en una posición específica dentro del array, y se puede acceder a estos 
    mediante un índice numérico que determina su posicion.

    Los arrays en JavaScript son muy versátiles y se utilizan para almacenar y manipular datos de varios 
    tipos, como números, strings, objetos, etc. 
    
    Se pueden crear arrays vacíos o con elementos iniciales, y se pueden modificar y acceder a los elementos 
    de un array mediante métodos y propiedades específicas.

    ¿Como se crean los arrays?
    Para crear un array en se utiliza la siguiente sintaxis:
    
    - let nombreArray = [1,2,3]; 
    - const nombreArray2 = ["a", "b", "c"];


    ¿Que es un índice?
    Un índice es un número que se utiliza para acceder a los elementos de un array.
    Ejemplo: conts colores = ["Azul", "Verde", "Rojo"];
    colores[0] -> "Azul"
    colores[1] -> "Verde"
    colores[2] -> "Rojo"
    En este caso, el índice 0 se refiere al primer elemento del array, el índice 1 al segundo elemento, 
    y así sucesivamente.


    Metodos de Arrays
    1- length: Propiedad que devuelve el número de elementos de un array.
    2- push(): Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
    3- pop(): Elimina el último elemento de un array y devuelve ese elemento.
    4- unshift(): Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
    5- shift(): Elimina el primer elemento de un array y devuelve ese elemento.
    6- indexOf(): Devuelve el primer índice en el que haga match con un elemento especificado en un array.
    7- lastIndexOf(): Devuelve el último índice en el que haga match con un elemento especificado en un array.
    8- includes(): Determina si un array incluye un determinado elemento y devuelve true o false según corresponda.
    9- join(): Une todos los elementos de un array en una cadena y devuelve esta cadena.
    10- slice(): Devuelve una copia de una parte de un array dentro de un nuevo array.
    11- splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    12- reverse(): Invierte el orden de los elementos de un array.
    13- sort(): Ordena los elementos de un array localmente y devuelve el array ordenado.
    14- filter(): Crea un nuevo array con todos los elementos que cumplan con una condición especificada.
    15- forEach(): Ejecuta una función dada una vez por cada elemento de un array.
    16- map(): Crea un nuevo array con los resultados de la llamada a una función para cada elemento de un array.
    17- reduce(): Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor, es decir realizar una suma, resta, multiplicacion, etc, de manera recursiva.
    18- find(): Devuelve el primer elemento de un array que cumpla con una condición especificada.
    19- findIndex(): Devuelve el índice del primer elemento de un array que cumpla con una condición especificada.
    20- some(): Comprueba si al menos un elemento de un array cumple con una condición especificada.
    21- every(): Comprueba si todos los elementos de un array cumplen con una condición especificada.
    22- fill(): Rellena todos los elementos de un array con un valor estático.
    23- concat(): Devuelve un nuevo array que contiene el array original y otros arrays y/o valores.
*/


// Crear un array
const colores = ["Azul 🟦", "Verde 🟩", "Naranja 🟧", "Rojo 🟥"];
console.log(colores);


// ¿Como acceder a los elementos de un array?
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);


// ¿Se pueden modificar los elementos de un array?
colores[0] = "Amarillo 🟨";
console.log(colores[0]);

console.log(colores);


colores[5] = "Morado 🟪";

console.log(colores);
console.log(colores[5]);


// Ejemplo 1: ¿Como saber cuantos elementos tiene un array? / propiedad length
console.log(colores.length);


// Metodos de Arrays

// Ejemplo 2: push()
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

numeros.push(6);
console.log(numeros);

numeros.push(7, 8, 9);
console.log(numeros);

// Podemos agregar cualquier tipo de dato a un array, por ejemplo otro array
numeros.push(colores);
console.log(numeros);

// Podemos agregar una funcion a un array incluso
function saludar() { return "hola" };

numeros.push(saludar);
console.log(numeros);

// Para ejecutar la funcion que esta dentro del array, 
// llamamos al indice y colocamos los parentesis para 
// iniciar la funcion almacenada en ese indice
console.log(numeros[10]());





// Ejemplo 3: pop()
const letras = ["a", "b", "c", "d", "e"];

let elementoRemovido1 = letras.pop();
let elementoRemovido2 = letras.pop();
let elementoRemovido3 = letras.pop();


// En este caso se han eliminado los ultimos 3 elementos del array.
console.log(letras);

// Los elementos extraidos se pueden almacenar en variables para su uso posterior (si es necesario).
console.log(elementoRemovido1);
console.log(elementoRemovido2);
console.log(elementoRemovido3);



// Ejemplo 4: unshift()
const frutas = ["Manzana", "Pera", "Uva", "Banano"];
frutas.unshift(frutas.pop());
frutas.unshift("Fresa");

console.log(frutas);



// Ejemplo 5: shift()
const paises = ["Colombia", "Peru", "Mexico", "Argentina"];
let paisBorrado = paises.shift();

console.log(paises);
console.log(`El pais eliminado es: ${paisBorrado}`);




// Ejemplo 6: indexOf()
let productos = ["Laptop", "Celular", "Tablet", "Celular", "Teclado", "Celular"];
let indice = productos.indexOf("Celular");

console.log(`El producto se encuentra en la posicion: ${indice}`);


// Ejemplo 7: lastIndexOf()
let indice2 = productos.lastIndexOf("Celular");
console.log(`El producto se encuentra en la posicion: ${indice2}`);


// Ejemplo 8: includes()
const nombres = [
    "Juan", "María", "Luis", "Ana", "Carlos", "Lucía", "Pedro", "Sofía",
    "Javier", "Elena", "Miguel", "Laura", "Antonio", "Carmen", "Diego",
    "Valeria", "Alejandro", "Paula", "José", "Marta", "Rafael", "Isabel",
    "Fernando", "Cristina", "Manuel", "Patricia", "Alberto", "Silvia",
    "Raúl", "Andrea", "Ricardo", "Pilar", "Vicente", "Teresa", "Rubén",
    "Clara", "Sergio", "Rosa", "Enrique", "Julia", "Francisco", "Nuria",
    "Álvaro", "Irene", "Pablo", "Alicia", "David", "Beatriz", "Eduardo"
];


if (nombres.includes("Guillermo")) {
    console.log("La persona ya se encuentra en la lista de invitados");
} else {
    nombres.push("Guillermo");
    console.log("La persona se ha añañdido a la lista de invitados exitosamente");
};

console.log(nombres);



// Ejemplo 9: join()
let mensaje = "Hola, mi nombre es Guillermo";
console.log(mensaje);

// Utilizamos el metodo de string split() para convertir la cadena en un array.
let palabras = mensaje.split(" ");
console.log(palabras);

// Unimos los elementos del array en una cadena utilizando el metodo de arrays join().
let mensajeNuevo = palabras.join(" ");
console.log(mensajeNuevo);




// Ejercicios para realizar en casa (Basados en los metodos de arrays vistos en clase hasta el momento)

/* 
    1- Creaa un array con los nombres de los meses del año, luego pide al usuario
    que ingrese un número entre 1 y 12, y muestra el nombre del mes correspondiente.

    2- Usando recursividad, crea una funcion añada elementos a un array llamado "mochila"
    hasta que se llene, es decir, hasta que la longitud del array sea igual a 15.

    3- Usando recursividad y condiciones, crea una funcion que modifique el array llamado "mochila"
    de la siguiente manera:
        A- Solicita al usuario que ingrese un el indice del elemento a actualizar.
        B- Solicita al usuario que ingrese un elemento a añadir a la mochila.
        C- Actualiza el elemento en el indice especificado por el usuario.
        D- Muestra el array actualizado en consola.
*/



// Ejemplo 10: slice()
//     indices: 0    1     2   3    4    5    6    7    8    9
const datos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
console.log(datos);

// Realizamos una copia del array original desde el indice 4 hasta el indice 7 (especificamente el elemento previo al indice 7).
let datosCopia = datos.slice(4, 7);
console.log(datosCopia);


// Ejemplo 10 Pt. 2: slice()
//       indices:     0      1        2           3            4           5          6        7        8      9 
const nombres2 = ["Diego", "Luis", "Mayra", "Sthefanny", "Cristobal", "Guillermo", "Jesus", "Lizzy", "Jose", "Eric"];
console.log(nombres2);

// Realizamos una copia del array original desde el indice 3 hasta el indice 6 (especificamente el elemento previo al indice 6).
let nombresCopia = nombres2.slice(3, 6);
console.log(nombresCopia);





// Ejemplo 11: splice(inicio, cantidad a eliminar);

//       indices: 0    1    2    3    4    5    6    7    8    9
const letras2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
console.log(letras2);

// Parametros:                    Inicio - cantidad de elementos a eliminar
let letrasEliminadas = letras2.splice(3, 6);
console.log(letras2);

// En este ejemplo estamos eliminando 6 elemento a partir del indice 3, es decir, los elementos desde la "D" hasta la "I".


// Ejemplo 11 Pt. 2: añañdir elementos a un array con splice(inicio, 0, elemento1, elemento2, elemento3, ...);
letras2.splice(4, 0, "K", "L", "M", "N", "O", "P");
console.log(letras2);


// Ejemplo 11 Pt. 3: Actualizar elementos de un array con splice(inicio, cantidad a eliminar, elemento1, elemento2, elemento3, ...);

//      indices:     0      1        2           3            4           5          6      
const nombres3 = ["Diego", "Luis", "Mayra", "Sthefanny", "Cristobal", "Guillermo", "Jesus"];
const nombres4 = ["Lizzy", "Jose", "Eric"];


// Actualizamos los ultimos 3 elementos del array "nombres3" con los elementos del array "nombres4".
nombres3.splice(nombres3.length - 3, 3, ...nombres4);

/* ¿Que sucede en la linea de codigo anterior?
    1- Se obtiene la lingitud del array con la propiedad length.
    2- Se resta 3 a la longitud del array para obtener el indice desde el cual se eliminaran los elementos.
    3- Se eliminan los ultimos 3 elementos del array.
    4- Se añaden los elementos del array "nombres4" a partir del indice obtenido en el paso 1 utilizando 
    el operador de propagacion o spread operator "...".

    Como resultado el array "nombres3" quedara con los elementos de "nombres4" en las posiciones 4, 5 y 6.

    El array original seria: ["Diego", "Luis", "Mayra", "Sthefanny", "Cristobal", "Guillermo", "Jesus"]
    El array resultante seria: ["Diego", "Luis", "Mayra", "Sthefanny", "Lizzy", "Jose", "Eric"]
*/

console.log(nombres3);





// Ejemplo 12: reverse()
const colores2 = ["Amarrillo 🟨", "Azul 🟦", "Rojo 🟥"];
console.log(colores2);

colores2.reverse();
console.log(colores2);



// Ejemplo 13: sort()
const valores = [3, 5, 1, 7, 2, 4, 6];
console.log(valores);

valores.sort();
console.log(valores);


// Ejemplo 13 Pt. 2: sort() con strings
const apellidos = ["Garcia", "Perez", "Rodriguez", "Alvarez", "Ramirez", "Ruiz", "Reyes", "Rivas", "Rojas", "Rodrigues"];
console.log(apellidos);

apellidos.sort();
console.log(apellidos);

// Ejemplo 13 Pt. 3: sort() con strings de manera descendente

apellidos.sort((a, b) => b.localeCompare(a));
console.log(apellidos);



// Tambien podemos utilizar 2 metodos para ordenar de manera descendente, sort() y reverse().
apellidos.sort().reverse();


// Ejemplo 13 Pt. 4: sort() con numeros de manera descendente

const valores2 = [3, 5, 1, 7, 2, 4, 6, 8, 10, 12, 9, 11];

valores2.sort((a, b) => b - a);


// El mismo proceso pero con una funcion anonima
// valores2.sort(function(a, b){ return b - a });

// Tambien podemos utilizar 2 metodos para ordenar de manera descendente, sort() y reverse().
// valores2.sort().reverse();

console.log(valores2);





// Ejemplo 14: filter()
//¿Que es Iterar?: Iterar es el proceso de recorrer un conjunto de datos, como una array
// con el proposito de realizar una accion con cada elemento o valor.

/*  filter: es una función de los arrays que permite filtrar los elementos 
    mediante una función de retorno booleana, denominada callback.

    La función de retorno booleana se aplica a cada elemento del array y solo los elementos 
    para los cuales la función devuelve true se incluyen en el nuevo array resultante.

    En pocas palabras, este método crea un nuevo array con todos los elementos que 
    pasan la prueba implementada por la función dada.
*/



// Ejemplo 1 de filter(): Separar numeros pares e impares.
let valores3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

valores3.filter((elemento) => elemento % 2 === 0 ? pares.push(elemento) : impares.push(elemento));


console.log(pares);
console.log(impares);






// Ejemplo 2 de filter(): 
let generos = ["Hombre", "Mujer", "Mujer", "Hombre", "Mujer", "Hombre", "Mujer", "Hombre", "Mujer", "Hombre", "Mujer"];

let hombres = [];
let mujeres = [];

generos.filter((genero) => {
    genero === "Hombre" ? hombres.push(genero) : mujeres.push(genero);
});

console.log(hombres);
console.log(mujeres);


// Ejemplo 3 de filter():
const personas = [
    { nombre: "Diego", edad: 28, Ciudad: "Segovia" },
    { nombre: "Mayra", edad: 24, Ciudad: "Caracas" },
    { nombre: "Pedro", edad: 20, Ciudad: "Madrid" },
    { nombre: "Juan", edad: 25, Ciudad: "Maracaibo" },
    { nombre: "Stefanny", edad: 22, Ciudad: "Maracaibo" },
    { nombre: "Luis", edad: 30, Ciudad: "Santiago de Chile" },
    { nombre: "Guillermo", edad: 26, Ciudad: "Valencia" },
    { nombre: "Cristobal", edad: 21, Ciudad: "Amazonas" },
    { nombre: "Pedro", edad: 29, Ciudad: "Santa Fe" },
    { nombre: "Pedro", edad: 22, Ciudad: "Valencia" },
];

// Si la persona se llama Pedro y vive en Santa Fe, se añade al array pedroDeSantaFe.
// Si no hay nadie que cumpla con esa condicion, el array quedara vacio.
const pedroDeSantaFe = personas.filter((persona) => {
    if (persona.nombre === "Pedro" && persona.Ciudad === "Santa Fe") {
        return persona;
    } else {
        return false;
    }
});

console.log(pedroDeSantaFe);

console.log(`Se localizo a la persona buscada, y es: ${pedroDeSantaFe[0].nombre} que vive en ${pedroDeSantaFe[0].Ciudad}`);




// Ejemplo 4: Obteniendo todos los resultados que comiencen de una forma especifica usando:
// startsWith()/includes(), toLowerCase(), filter() y push(), prompt() y alert().

let articulos = [
    { nombre: "laptop", precio: 1000 },
    { nombre: "mouse", precio: 20 },
    { nombre: "teclado de luces", precio: 50 },
    { nombre: "monitor", precio: 300 },
    { nombre: "audifonos", precio: 30 },
    { nombre: "cargador", precio: 15 },
    { nombre: "tablet", precio: 200 },
    { nombre: "smartphone", precio: 500 },
    { nombre: "impresora de escritorio", precio: 150 },
    { nombre: "camara", precio: 250 },
    { nombre: "microfono de mesa", precio: 40 },
    { nombre: "microfono de diadema", precio: 20 },
    { nombre: "parlantes", precio: 60 },
    { nombre: "memoria USB", precio: 10 },
    { nombre: "decodificador", precio: 5 },
    { nombre: "cable HDMI", precio: 5 },
    { nombre: "cable VGA", precio: 3 },
    { nombre: "cable Ethernet", precio: 2 },
    { nombre: "cable USB", precio: 1 },
    { nombre: "cable de corriente", precio: 4 },
    { nombre: "tarjeta de video", precio: 200 },
    { nombre: "tarjeta madre", precio: 300 },
    { nombre: "procesador", precio: 400 },
    { nombre: "tarjeta de sonido", precio: 100 },
    { nombre: "disco duro", precio: 150 }
];



let articuloBuscado = ("Ingrese el nombre del articulo que desea buscar").toLocaleLowerCase();
let articulosEncontrados = [];
articulos.filter((articulo) => {
    if (articulo.nombre.includes(articuloBuscado)) {
        articulosEncontrados.push(articulo);
    }
});

let mensajeDeSalida = "Se han encontrado los siguientes articulos: \n";


// Aprovechamos el ejemplo previo para explicar el metodo forEach()

// Aqui usamos forEach() para recorrer el array articulosEncontrados 
// y concatenar los nombres y precios de los articulos encontrados en la variable salida.
articulosEncontrados.forEach((articulo) => {
    mensajeDeSalida += `Nombre: ${articulo.nombre} - Precio: ${articulo.precio}\n`;
});

if (articulosEncontrados.length) {
    alert(mensajeDeSalida);
} else {
    ("No se han encontrado articulos que coincidan con la busqueda");
};




// Ejemplo 16: map()

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosDuplicados = [];

// Sin embargo, la forma mas comun de utilizar funciones de callback es mediante funciones flecha
numerosDuplicados = numeros2.map((numero) => numero * 2);


console.log(numerosDuplicados);


// Se puede hacer uso deuna funcion de callback si se declarara previamente
// function duplicar(numero){
//     numerosDuplicados.push(numero * 2);
// };

// numeros2.forEach(duplicar);


// Tambien se puede hacer uso de una funcion anonima
// numeros2.map(function(numero){
//     numerosDuplicados.push(numero * 2);
// });



// // Ejemplo 16.1: map(), en este caso se actualizan los usuarios con status "online" a "offline".
let usuarios = [
    { nombre: "Diego", edad: 28, status: "online" },
    { nombre: "Mayra", edad: 24, status: "offline" },
    { nombre: "Pedro", edad: 20, status: "online" },
    { nombre: "Juan", edad: 25, status: "offline" },
    { nombre: "Stefanny", edad: 22, status: "online" },
    { nombre: "Luis", edad: 30, status: "offline" },
    { nombre: "Guillermo", edad: 26, status: "online" },
    { nombre: "Cristobal", edad: 21, status: "offline" },
    { nombre: "Paula", edad: 29, status: "online" },
    { nombre: "Jose", edad: 22, status: "offline" },
    { nombre: "Johanny", edad: 27, status: "online" }
];
console.log(usuarios);


usuarios = usuarios.map((usuario) => usuario.status === "online" ? { ...usuario, status: "offline" } : usuario);
console.log(usuarios);





// Ejemplo 17: reduce()

// reduce( callback(acumulador, elemento), valorInicial);
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const acumulado = numeros3.reduce((contador, numero) => contador + numero, 0);


// Ejemplo 17.1: Obtener el total a pagar por los productos del carrito
const carrito = [
    { nombre: "Laptop HP", descripcion: "Laptop con procesador Intel Core i5 y 8GB de RAM", precio: 750 },
    { nombre: "Smartphone Samsung", descripcion: "Smartphone con pantalla de 6.2 pulgadas y cámara de 12MP", precio: 500 },
    { nombre: "Monitor LG", descripcion: "Monitor de 24 pulgadas con resolución Full HD", precio: 200 },
    { nombre: "Impresora Epson", descripcion: "Impresora multifuncional con conexión Wi-Fi", precio: 150 },
    { nombre: "Teclado Logitech", descripcion: "Teclado mecánico con retroiluminación RGB", precio: 100 },
    { nombre: "Mouse inalámbrico", descripcion: "Mouse ergonómico con conexión Bluetooth", precio: 50 },
    { nombre: "Disco duro externo", descripcion: "Disco duro de 1TB con conexión USB 3.0", precio: 80 },
    { nombre: "Router TP-Link", descripcion: "Router inalámbrico de doble banda", precio: 60 },
    { nombre: "Tarjeta gráfica NVIDIA", descripcion: "Tarjeta gráfica con 8GB de memoria GDDR6", precio: 400 },
    { nombre: "Memoria RAM Kingston", descripcion: "Memoria RAM DDR4 de 16GB", precio: 120 },
    { nombre: "SSD Samsung", descripcion: "Disco de estado sólido de 500GB", precio: 100 },
    { nombre: "Cargador portátil", descripcion: "Batería externa de 10000mAh", precio: 30 },
    { nombre: "Altavoces Logitech", descripcion: "Altavoces estéreo con potencia de 20W", precio: 80 },
    { nombre: "Webcam Logitech", descripcion: "Webcam con resolución Full HD y micrófono integrado", precio: 60 },
    { nombre: "Auriculares inalámbricos", descripcion: "Auriculares con cancelación de ruido y conexión Bluetooth", precio: 150 },
    { nombre: "Tableta gráfica Wacom", descripcion: "Tableta gráfica con lápiz sensible a la presión", precio: 200 },
    { nombre: "Proyector Epson", descripcion: "Proyector con resolución Full HD y 3000 lúmenes", precio: 500 },
    { nombre: "Cámara Canon", descripcion: "Cámara réflex con sensor de 24.1MP y grabación de video en 4K", precio: 800 },
    { nombre: "Smart TV LG", descripcion: "Televisor con pantalla OLED de 55 pulgadas y sistema operativo webOS", precio: 1500 }
];

const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

console.log(`El total a pagar es: $${total}`);



// Ejemplo 18: find()

const items = [
    { id:1 ,nombre: "Laptop HP", descripcion: "Laptop con procesador Intel Core i5 y 8GB de RAM y 2 puertos HDMI para Monitor externo", precio: 750 },
    { id:19 ,nombre: "Monitor LG", descripcion: "Monitor con pantalla OLED de 55 pulgadas y sistema operativo webOS", precio: 1500 },
    { id:3 ,nombre: "Monitor LG", descripcion: "Monitor de 24 pulgadas con resolución Full HD", precio: 200 },
    { id:4 ,nombre: "Impresora Epson", descripcion: "Impresora multifuncional con conexión Wi-Fi", precio: 150 },
    { id:6 ,nombre: "Mouse inalámbrico", descripcion: "Mouse ergonómico con conexión Bluetooth", precio: 50 },
    { id:10 ,nombre: "Memoria RAM Kingston", descripcion: "Memoria RAM DDR4 de 16GB", precio: 120 },
    { id:7 ,nombre: "Disco duro externo", descripcion: "Disco duro de 1TB con conexión USB 3.0", precio: 80 },
    { id:5 ,nombre: "Teclado Logitech", descripcion: "Teclado mecánico con retroiluminación RGB", precio: 100 },
    { id:8 ,nombre: "Router TP-Link", descripcion: "Router inalámbrico de doble banda", precio: 60 },
    { id:9 ,nombre: "Tarjeta gráfica NVIDIA", descripcion: "Tarjeta gráfica con 8GB de memoria GDDR6", precio: 400 },
    { id:2 ,nombre: "Smartphone Samsung", descripcion: "Smartphone con pantalla de 6.2 pulgadas y cámara de 12MP", precio: 500 },
    { id:11 ,nombre: "SSD Samsung", descripcion: "Disco de estado sólido de 500GB", precio: 100 },
    { id:16 ,nombre: "Tableta gráfica Wacom", descripcion: "Tableta gráfica con lápiz sensible a la presión", precio: 200 },
    { id:14 ,nombre: "Webcam Logitech", descripcion: "Webcam con resolución Full HD y micrófono integrado", precio: 60 },
    { id:12 ,nombre: "Cargador portátil", descripcion: "Batería externa de 10000mAh", precio: 30 },
    { id:13 ,nombre: "Altavoces Logitech", descripcion: "Altavoces estéreo con potencia de 20W", precio: 80 },
    { id:15 ,nombre: "Auriculares inalámbricos", descripcion: "Auriculares con cancelación de ruido y conexión Bluetooth", precio: 150 },
    { id:17 ,nombre: "Proyector Epson", descripcion: "Proyector con resolución Full HD y 3000 lúmenes", precio: 500 },
    { id:18 ,nombre: "Cámara Canon", descripcion: "Cámara réflex con sensor de 24.1MP y grabación de video en 4K", precio: 800 },
];


// Buscamos un producto en especifico
const monitor = items.find((item) => item.nombre === "Webcam Logitech");

console.log(monitor);


// Ejemplo 19: findIndex()
// const posicionDelMonitor = items.findIndex((item) => item.id === 19);
// items[posicionDelMonitor].precio = 250;
// console.log(items[posicionDelMonitor]);

// Se puede abreviar el codigo anterior de la siguiente manera:
items[items.findIndex((item) => item.id === 19)].precio = 250;








// Ejemplo 20: some()
// Determinamos si algun elemento del array es una pizza.
// Como en el array "frutas2" hay una pizza al final, el resultado sera true.
const frutas2 = ["🍎","🍐","🍇","🥭","🥝","🍉", "🍕"];
const algunoEsPizza = frutas2.some((fruta) => fruta === "🍕");


// Ejemplo 21: every(): determinamos si todos los elementos del array son pizzas.
// Como en el array "pizzas" hay una manza, el resultado sera false.
const pizzas = ["🍕","🍕","🍕","🍕","🍕","🍕","🍎"];
const todosSonPizzas = pizzas.every((pizza) => pizza === "🍕");


// Ejemplo 22: fill(): rellenamos los espacios "undefined" con "estudiantes" en el array "cupos".
let cupos = ["estudiante", "estudiante", "estudiante",undefined, undefined, undefined, "estudiante", "estudiante"];
console.log(cupos);

// fill(valorDeRelleno, inicio, finExacto);
cupos.fill("estudiante", 3, 6);
console.log(cupos);

// Ejemplo 22.1: fill(): rellenamos los espacios con mango con helado.
const carrito2 = ["🍎", "🥭","🥭", "🥭", "🍉"];
console.log(carrito2);

carrito2.fill("🍦", 1, 4);
console.log(carrito2);




// Ejemplo 23: concat(): unimos 2 arrays en uno solo.

const frutas3 = ["🍎","🍐","🍇","🥭","🥝","🍉"];
const frutas4 = ["🍍","🍌","🍊","🍋","🍒","🍓"];
const colores3 = ["🟥","🟩","🟦","🟧","🟨","🟪"];
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const frutas5 = frutas3.concat(frutas4, colores3, numeros4);

console.log(frutas5);

// Tambien podemos usar el spread operator para unir arrays
const frutas6 = [frutas3, frutas4, colores3, numeros4];
console.log(frutas6);



// Ejemplo extra: matrices o arrays multidimensionales
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

// Para acceder a un elemento de la matriz, se utilizan 2 indices, el primero para la fila y el segundo para la columna.
console.log(matriz[2][1]); // 8