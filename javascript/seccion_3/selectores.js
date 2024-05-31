/*
    ¿Que son los selectores?
    Los selectores son métodos del DOM (Document Object Model) que nos permiten seleccionar elementos 
    para poder manipularlos con JavaScript.

    Existen varios selectores que podemos utilizar para seleccionar elementos del DOM,
    estos son:

    - Selector de ID: Permiten seleccionar un elemento por su ID.
    - Selector de clase: Permiten seleccionar elementos por su clase.
    - Selector de etiqueta: Permiten seleccionar elementos por su etiqueta.
    - Selector de name: Permiten seleccionar elementos por su atributo name.


    ¿Como usar selectores?
    Para seleccionar un elemento del DOM, usamos la siguiente sintaxis:
    document.getElementById('selector'); / document.getElementsByClassName('selector'); / document.getElementsByTagName('selector');
    o tambien
    document.querySelector('#selector'); / document.querySelectorAll('.selector'); / document.querySelectorAll('etiqueta');

    Aqui, "document" es el objeto principal del DOM(Modelo de Objeto del Documento) que representa el 
    documento HTML actual en una página.
*/


const titulo = document.getElementById('titulo');




// Medotos usados con selectores:
// elemento.getAttribute: obtiene el(los) valor(es) del atributo indicado en el elemento seleccionado.
let clasesElemento = titulo.getAttribute('class'); // Devuelve el valor del atributo class (o cualquiera indicado) del elemento seleccionado. En si devueve las valores dentro de la class de Titulo

//     En el HTML:   <h1 id="titulo" class="Titulos_de_Ejemplo clase2 clase3 clase4">Selectores</h1> 

console.log(`Las clases del elemento son: ${clasesElemento}`);



// elemento.setAttribute: establece un atributo con su valor en el elemento seleccionado.
titulo.setAttribute("style", "font-size: 35px;");



// elemento.innerText: obtiene o establece el contenido de texto de un elemento seleccionado.
titulo.innerText = "Aprendiendo a usar selectores en JavaScript - Lexpin";


// elemento.innerHTML: obtiene o establece el contenido HTML de un elemento seleccionado.
let caja = document.getElementById('caja-prueba');
console.dir(caja);
// Agrega un boton al contenido de la caja.
caja.innerHTML += "<button class='bg-yellow-500 rounded-xl px-3 py-2'>Click me!</button>"; 



// elemento.style: permite acceder y manipular las propiedades CSS del elemento seleccionado.
caja.style.borderRadius = "15px";
caja.style.paddingLeft = "25px";




// elemento.classList: permite agregar(add), eliminar(remove), verificar(contains), 
// alternar(toggle) y reemplazar(replace) clases de un elemento seleccionado.

//    variable           selector_por_ID(id del elemento)
const parrafo1 = document.getElementById("parrafo-1");
const parrafo2 = document.getElementById("parrafo-2");
const parrafo3 = document.getElementById("parrafo-3");
const parrafo4 = document.getElementById("parrafo-4");
const parrafo5 = document.getElementById("parrafo-5");



// Verificamos las clases de los elementos seleccionados.
// contains retorna un valor booleano, es decir, true si el elemento tiene la clase indicada y false si no la tiene.
console.log(`El parrafo 1 contiene la clase "text-3xl": ${parrafo1.classList.contains("text-lg")}`); // true
console.log(`El parrafo 2 contiene la clase "font-bold": ${parrafo2.classList.contains("font-bold")}`); // false
console.log(`El parrafo 3 contiene la clase "font-['Arial']": ${parrafo3.classList.contains("font-['Arial']")}`); // true
console.log(`El parrafo 4 contiene la clase "text-blue-700": ${parrafo4.classList.contains("text-blue-700")}`); // false
console.log(`El parrafo 5 contiene la clase "lexpin": ${parrafo5.classList.contains("lexpin")}`); // true




// Eliminamos una clase de un elemento si existe y agregamos una nueva.

// Verificamos si el parrafo 1 contiene la clase "text-3xl" y si es asi, 
// la eliminamos y agregamos la clase "text-lg".
if(parrafo1.classList.contains("text-3xl")){
    // Eliminamos la clase "text-3xl"
    parrafo1.classList.remove("text-3xl");
    // Agregamos la clase "text-lg".
    parrafo1.classList.add("text-lg");
};


// Tambien podemos reemplazar una clase por otra.
parrafo1.classList.replace("text-green-700", "text-purple-700");



function modoNoche(){
    document.body.classList.toggle("bg-slate-700");
    titulo.classList.toggle("text-white");
    
    let imagen = document.getElementById("gh");
    // console.dir(imagen)
    
    if(imagen.src === "https://i.pinimg.com/736x/a7/0c/7b/a70c7b0d52c17255df278bbc5cb82693.jpg"){
        imagen.src = "https://media.istockphoto.com/id/1165372462/es/foto/perro-como-hacker-al-lado-de-la-libreta-con-gafas-de-sol-y-chaqueta-con-capucha-concepto-de.jpg?s=170667a&w=0&k=20&c=elvZ_o1t2oKyKiNVj_0ajdqGhFao6_kZRVq8aJrqr1I="
    }else{
        imagen.src = "https://i.pinimg.com/736x/a7/0c/7b/a70c7b0d52c17255df278bbc5cb82693.jpg"
    }
};




/* 
    Asi como podemos seleccinar nodor y editarlos, tambien podemos crear nuevos nodos y agregarlos al DOM.
    Para esto, usamos los siguientes metodos:

    - createElement("etiqueta_del_Nodo"): Crea un nuevo elemento HTML.
    - appendChild(nodoHijo): Agrega un nodo al final de la lista de nodos hijos de un nodo padre.
    - removeChild(nodoHijo): Elimina un nodo hijo de un nodo padre.

    Otros metodos que podemos usar para acciones adicionales son:
    - parentNode: Devuelve el nodo padre de un nodo.
    - childNodes: Devuelve una lista de los nodos hijos de un nodo.
    - firstChild: Devuelve el primer nodo hijo de un nodo.
    - lastChild: Devuelve el ultimo nodo hijo de un nodo.
    - before(nodo_a_Agregar): Inserta un nodo antes de otro nodo.
    - after(Nodo_a_Agregar): Inserta un nodo despues de otro nodo.
*/


const contenedor = document.getElementById("contenedor");
let contador = 1;

function agregar(){
    console.dir(contenedor)

    // Primero se crea un nuevo nodo
    let nuevoParrafo = document.createElement("p");

    // Añadimos contenido a este elemento
    nuevoParrafo.innerText = `Parrafo ${contador}`;
    
    // Incrementamos el contador
    contador++;

    // Añaadimos el nuevo nodo hijo al nodo padre (contenedor)
    contenedor.appendChild(nuevoParrafo);
};

function eliminar(){
    // Seleccionamos el ultimo nodo hijo del contenedor
    let ultimoNodo = contenedor.lastChild;

    console.dir(ultimoNodo)

    // Validamos el "id" del ultimo nodo para evitar borrar de mas.
    if(ultimoNodo.id === "ultimo"){
        alert("No se pueden borrar mas")
    }else{
        // Eliminamos el nodo hijo seleccionado
        contenedor.removeChild(ultimoNodo);

        // Decrementamos el contador para mantener la coherencia con los parrafos.
        contador--;
    }

}










// Ejercicios para realizar en casa:

// 1- Crear un contenedor con un id "contenedor" y agregarlo al body.

// 2- Crear un nuevo parrafo con el texto "TuNombre TuApellido - Grupo XVI - Lexpin",
//    dale estilos con CSS y agregarlo al contenedor creado en el punto 1.

// 3- Crear una nueva imagen, asignale un src con una imagen de tu elección, dale estilos con Tailwind
//    y agregarla al contenedor creado en el punto 1 arriba del parrafo.

// 4- Crea un boton que permita añadir elementos al final del contenedor del punto 1 y a añade el boton al final del mismo contenedor.
// Asegurate que cada nuevo elemento que añada el boton se agregue siempre sobre el boton de "agregar mas".

// 5- Crea un titulo y agregalo arriba de la imagen del punto 3.

// 6- Edita los estilos del parrafo creado en el punto 2 con JavaScript y el metodo classList.

// 7- Crea un alert que indique si un elemento tiene una clase especifica o no.io