/*
    ¿Que son Promesas?
    Las promesas son la forma mas sencilla de manejar la asincronía.
    
    Pueden tener tres estados: 
        - Pendiente (pending): Cuando se esta ejecutando, es el estado inicial, ni cumplido ni rechazado.
        - Cumplida (fulfilled): Cuando la operacion se realiza satisaftoriamente.
        - Rechazada (rejected): Cuando la operacion fallo.

    Una promesa representa el resultado de una operación que aún no ha finalizado, pero que eventualmente 
    producirá un resultado o un error. Tal como en la vida cotidiana, una promesa es un hecho que estara
    pendiente y que puede cumplirse o no.

    Una vez que una promesa cambia a un estado cumplido o rechazado, su valor se mantiene y NO puede cambiar.

    Una promesa se crea usando la palabra clave new y la función constructora Promise ( new Promise() ).
    La función constructora recibe como argumento una función que acepta dos callbacks, resolve y reject. 
        - resolve: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta satisfactoria.
        - reject: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta de error.

    La función que se pasa a la promesa debe realizar la operación asíncrona y, una vez terminada, 
    llamara a resolve si todo fue bien o a reject si ocurrió algún error.



    Sintaxis: 

    - Con funcion de flecha:
    const miPromesa = new Promise( (resolve, reject)=> { ... } );

    - Con funcion anonima:
    const miPromesa =  new Promise( function(resolve, reject){ ... } ); 



    Una vez creada la promesa, se pueden suscribir a ella los métodos .then, .catch y .finally.

    .then (entonces): es un metodo que recibe como argumento una función que será llamada cuando la 
    promesa se resuelva (es decir, cuando se llame a resolve) y se le pasará como argumento el resultado 
    de la operación asíncrona. 

    .catch (atrapar/capturar): es un metodo que recibe como argumento una función que será llamada cuando la promesa sea 
    rechazada (es decir, cuando se llame a reject) y se le pasará como argumento el error producido.

    .finally (finalmente/Por ultimo): es un metodo OPCIONAL que recibe como argumento una función que será llamada cuando la promesa se
    resuelva o se rechace, es decir, siempre se ejecutara al final de la promesa.
    Se suele usar para realizar tareas de limpieza o para realizar acciones que deben ejecutarse tanto si la
    promesa se resuelve como si se rechaza.

    Las promesas permiten manejar de forma elegante y sencilla la asincronía en JavaScript, 
    permitiendo encadenar operaciones y controlar los errores de manera eficiente.
*/




// Ejemplo 1 (Promesa sincrona (NO Asincrona) que evalua igualdad de tipo de datos y retorna una respuesta).

// Definicion de una promesa.
// NOTA: Se guarda en una variable para poder usar metodos al realizar el manejo.
// NOTA-2: estar atento con los resultados que arroja QUOKKA, existen bugs, (Mejor usar la consola del navegador).

// let EvaluarIgualdad = new Promise((resolve, reject) => {
//     let resultado = 5 === 5;
//     if (resultado) { // Esta condicion es equivalente a if(resultado === true)
//         resolve('La promesa se cumplio\nLos numeros son iguales');
//     } else {
//         reject('La promesa se rechazo\nLos numeros son diferentes');
//     }
// });

// EvaluarIgualdad
//     .then((respuesta) => {
//         console.log(respuesta);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('La promesa ha finalizado');
//     });







// Ejemplo 2 (Promesa asincrona, usando setTimeout()).
// Es la misma promesa del ejemplo anterior solo que se ejecuta asincronamente.

// let EvaluarIgualdadAsincrona = new Promise( (resolve, reject) => {
//     setTimeout(function(){
//         let resultado = 5 === 5;
//         if(resultado){
//             resolve('La promesa se cumplio\nLos numeros son iguales');
//         }else{
//             reject('La promesa se rechazo\nLos numeros son diferentes');
//         }
//     }, 5000);
// });


// EvaluarIgualdadAsincrona
//     .then((respuesta) => {
//         console.log(respuesta);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('La promesa ha finalizado');
//     });


// console.log('Inicio de la promesa');






// Ejemplo 3 (Objeto y setTimeout) .
// De un un array de objetos llamado "peliculas", donde cada objeto es una pelicula, 
// extráe asincronamente con una promesa llamada "tomarPeliculas" los ID´s y titulos y guardalos 
// en un nuevo array llamado "peliculas2".

let peliculas = [
    {
        id: 1,
        titulo:"Dr. Strange 2",
        fecha: 2022,
        protagonista: "Benedict Cumberbatch"
    },
    {
        id: 2,
        titulo:"Black Adam",
        fecha: 2022,
        director: "Jaume Collet-Serra"
    },
    {
        id: 3,
        titulo:"Eternals",
    },
    {
        id: 4,
        titulo:"¡Shazam!",
        fecha: 2019,
        director: "David F. Sandberg"
    },
    {
        id: 5,
        titulo:"Venom",
        fecha: 2018
    },
    {
        id: 6,
        titulo: "Iron Man",
        fecha: 2008,
        protagonista: "Robert Downey Jr."
    }
    ,{
        id: 7,
        titulo: "Spider Man",
        director: "Sam Raimi",
        protagonista: "Tobey Maguire"
    },
    {
        id: 8,
        titulo: "Thor",
        fecha: 2011,
    },
    {
        id: 9,
        titulo: "Wonder Woman",
    },
    {
        id: 10,
        titulo: "Justice League",
        fecha: 2017,
    },
    {
        id: 11,
        titulo: "Deadpool",
        fecha: 2016,
    },{
        id: 12,
        titulo: "Captain America",
        fecha: 2011,
    },
    {
        id: 13,
        titulo: "Titanic",
        fecha: 1997,
    }
];

let peliculas2 = [];

class Pelicula {
    constructor(id, titulo){
        this.id = id;
        this.titulo = titulo;
    }
};

function buscarPeliculas(){

    document.getElementById('loader').classList.remove('hidden');

    const tomarPeliculas = new Promise((resolve, reject) => {
        setTimeout(()=>{
            peliculas2 = peliculas.map( (pelicula) => {
                return new Pelicula(pelicula.id, pelicula.titulo);
            });
    
            if(peliculas2.length > 0){
                resolve();
            }else{
                reject();
            }
    
            // peliculas2.length > 0 ? resolve() : reject();
        },2000);
    });
    
    tomarPeliculas
        // Cuando la promesa se resuelva, mostramos las peliculas en la consola. 
        .then(() => {
            console.table(peliculas2);
        })
        // Despues de mostrar las peliculas en la consola, iteramos sobre el array de peliculas2
        // y agregamos las filas a la tabla que tenemos en el DOM.
        .then(()=>{
            document.getElementById('loader').classList.add('hidden');
            let tabla = document.getElementById('tbody');
            peliculas2.forEach((pelicula)=>{
                // Creamos los nodos (Fila y celdas)
                let fila = document.createElement('tr');
                let celdaID = document.createElement('td');
                let celdaTitulo = document.createElement('td');
    
                // Cargamos de informacion a las celdas
                celdaID.innerText = pelicula.id;
                celdaTitulo.innerText = pelicula.titulo;
    
                // Estilizamos las celdas
                celdaID.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold");
                celdaTitulo.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold");
    
                // Agrergamos las celdas a la fila.
                fila.appendChild(celdaID);
                fila.appendChild(celdaTitulo);
    
                // Agregamos la fila a la tabla.
                tabla.appendChild(fila);
            });
        })
        // En caso de que la promesa sea rechazada, mostramos un mensaje de error en la consola.
        .catch((error) => {
            console.log(error);
        })
        // Por ultimo, mostramos un mensaje en la consola indicando que la promesa ha finalizado.
        .finally(() => {
            console.log('La promesa ha finalizado');
        });
};

document.getElementById("buscar").addEventListener('click', buscarPeliculas);












/*
    Ejercicio para realizar en casa.
    Crear una promesa que simule la obtencion de datos de un servidor,
    la promesa debe tener un tiempo de espera de 15 segundos.

    La promesa debe iterar sobre un array de objetos llamado "empleados" que contiene 10 objetos,
    donde cada objeto es un empleado, que tiene las siguientes propiedades:

    - Nombre (String)
    - Apellido (String)
    - Edad (Numero)
    - Pais (String)
    - Ciudad (String)
    - Profesion (Programador, Diseñador, Tester, Analista, etc)
    - Salario (Numero)
    - Estado civil (Soltero, Casado, Divorciado, Viudo)
    - Hobbies (Array de strings)
    - Fecha de nacimiento (DD/MM/AAAA)
    - Genero (M-F / Masculino-Femenino / Hombre-Mujer / H-M)
    - Codigo de empleado (EF-001 / ET-001 / P-001, o como quieran hacerlo)

    Se deben extraer los datos: nombre, apellido, edad, pais, ciudad, salario y codigo de empleado.

    La promesa debe retornar un array de objetos con la siguiente estructura:
    - Nombre
    - Apellido
    - Edad
    - Pais
    - Ciudad
    - Salario
    - Codigo de empleado

    Cada objeto se debe crear en base a una clase llamada "Persona"
    y ser guardado en un array llamado "personas".
    Luego de obtener los datos, mostrarlos en una tabla en el DOM.

    Debe existir un loader que se muestre mientras se obtienen los datos y que se oculte 
    cuando se muestren los datos en la tabla.

    Todo esto debe suceder al momento de persionar un boton en la web que diga
    "Obtener datos de empleados".
    
    Todo debe estar estilizado con CSS, TailwindCSS o SASS.

    EXTRA: Publica este ejercicio en tu repositorio de GitHub y comparte el URL del deploy en el grupo 
    de WhatsApp.
*/


