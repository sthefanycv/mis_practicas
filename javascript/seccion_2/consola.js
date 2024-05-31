/* 
    ¿Que es la consola?
    console es un objeto global que proporciona métodos para interactuar con la consola del entorno de ejecución. 
    Este objeto es ampliamente utilizado para depurar y registrar información durante el desarrollo de aplicaciones, 
    ya sea en el navegador o en entornos como Node.js.

    Entre los metodos mas usados tenemos:
    - log(): Imprime un mensaje en la consola.
    - error(): Imprime un mensaje de error en la consola.
    - warn(): Imprime un mensaje de advertencia en la consola.
    - info(): Imprime un mensaje de información en la consola.
    - debug(): Imprime un mensaje de depuración en la consola.
    - assert(): Escribe un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no pasa nada.
    - count(): Registra el número de veces que se ha llamado a count() con la etiqueta dada.
    - countReset(): Restablece el contador de una etiqueta específica.
    - dir(): Muestra una lista interactiva de las propiedades de un objeto JavaScript específico.
    - clear(): Limpia la consola.
    - group(): Crea un nuevo grupo en la consola.
    - groupEnd(): Finaliza el grupo actual.
    - time(): Inicia un temporizador con un nombre específico como parámetro.
    - timeEnd(): Detiene el temporizador especificado y registra el tiempo transcurrido.
    - trace(): Imprime el rastreo del trazo de la pila de un bloque específico de código.
    - table(): Muestra datos tabulares en forma de tabla.
*/


// log()
console.log("Esto es un mensaje de log / registro");

// error() solo da los estilos graficos de un error, pero  no es un error real
console.error("Esto es un mensaje de error");

// warn()
console.warn("Esto es un mensaje de advertencia");

// info()
console.info("Esto es un mensaje de información");

// debug() Un mensaje de depuracion: Es u mensaje que aparece cuando alguien realiza una actualizacion en el codigo
console.debug("Esto es un mensaje de depuración");

// assert()
console.assert(5 > 10, 'El primer número no es mayor que el segundo.');

// count()
for (let i = 0; i < 20; i++) {
    console.count('Se ejecuto el bloque count');
}

// countReset()
console.countReset('Se ejecuto el bloque count');
// En este segundo loop, el contador se habra reiniciado
for (let i = 0; i < 20; i++) {
    console.count('Se ejecuto el bloque count');
}


// dir() Desglosa una lista de os elementos de un array en la consola, tambien con los indices. Permite desglosar todos los arrays dentro de arrays
const persona = {
    nombre: 'Nestor', 
    apellido: "Valbuena" ,
    pais: "Venezuela"
};
console.dir(persona);


// Podemos ver lo que contiene un array
const frutas = ['manzana', 'pera', 'uva', 'fresa'];
console.dir(frutas);


// Incluso con un array de objetos
const comidas = [
    {nombre: 'Hamburguesa', precio: 10, tallas: ["S", "M", "L"]},
    {nombre: 'Pizza', precio: 15, tallas: ["S", "M", "L"]},
    {nombre: 'Hot Dog', precio: 5, tallas: ["S", "M", "L"]},
    {nombre: 'Tacos', precio: 12, tallas: ["S", "M", "L"]},
    {nombre: 'Sushi', precio: 20, tallas: ["S", "M", "L"]}
];
console.dir(comidas);


// clear()
console.clear();


// group() y groupEnd() crear un grupo de mensajes en la consola 
console.group('Mi grupo de mensaje en la consola');
    console.log('Mensaje 1');
    console.warn('Mensaje 2');
    console.error('Mensaje 3');
    console.debug('Mensaje 4');
console.groupEnd(); 


// Ejemplo creando una lista de instrucciones
console.group('Instrucciones');
    console.log('Paso 1: Abrir la caja');
    console.log('Paso 2: Sacar el contenido');
    console.log('Paso 3: Leer las instrucciones');
    console.log('Paso 4: Realizar la tarea');
    console.log('Paso 5: Guardar el contenido');
    console.warn('Paso 6: Tenca cuidado con el contenido');
    console.error('Paso 7: Si se riega el contenido, acuda al medico lo antes posible');
console.groupEnd();


console.clear();


// time() y timeEnd()medimos el tiempo de ejecucion 
console.time('Tiempo transcurrido');
    // Código para medir el tiempo (incrementar el valor de una variable con for)
    let contador = 0;
    
    // for (let i = 0; i < 1000; i++) {
    //     contador += 1;
    //     console.log(contador);
    // }; 

    // while (contador < 1000) {
    //     contador += 1;
    //     console.log(contador);
    // }

    console.log("Hola");
console.timeEnd('Tiempo transcurrido');


console.clear();

// trace() traza como se ejecutan las funciones desde la primera hasta la ultima. En este ejemplo, inicia en C y va por acda una
function funcionA() {
    funcionB();
}
function funcionB() {
    funcionD();
}
function funcionC() {
    funcionA();
}
function funcionD() {
    console.trace();
}

funcionC();



console.clear();



// table() permite crear una tabla interactiva en la consola que se puede mover de  lado a lado como si fuera de excel. Muestra arrays de objetos o un objeto en cuestion
const productos = [
    { nombre: 'Producto 1', precio: 100, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 2', precio: 200, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 3', precio: 300, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 4', precio: 400, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 5', precio: 500, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 6', precio: 600, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 7', precio: 700, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 8', precio: 800, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 9', precio: 900, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 10',precio: 1000, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 1', precio: 100, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 2', precio: 200, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 3', precio: 300, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 4', precio: 400, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 5', precio: 500, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 6', precio: 600, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 7', precio: 700, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 8', precio: 800, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 9', precio: 900, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 10',precio: 1000, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 1', precio: 100, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 2', precio: 200, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 3', precio: 300, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 4', precio: 400, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 5', precio: 500, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 6', precio: 600, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 7', precio: 700, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 8', precio: 800, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 9', precio: 900, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 10',precio: 1000, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 1', precio: 100, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 2', precio: 200, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 3', precio: 300, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 4', precio: 400, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 5', precio: 500, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 6', precio: 600, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 7', precio: 700, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 8', precio: 800, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 9', precio: 900, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 10',precio: 1000, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 1', precio: 100, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 2', precio: 200, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 3', precio: 300, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 4', precio: 400, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 5', precio: 500, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 6', precio: 600, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 7', precio: 700, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 8', precio: 800, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 9', precio: 900, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
    { nombre: 'Producto 10',precio: 1000, descripcion: "Esta es la descripcion", stock: 20, algo: "Algo por aqui", otraCosa: "Otra cosa, etc..."},
];

console.table(productos);