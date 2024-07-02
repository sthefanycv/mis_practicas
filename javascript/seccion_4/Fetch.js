/*
    ¿Que es una API?
    Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y definiciones que permiten 
    que diferentes aplicaciones se comuniquen entre sí. 
    
    Las API permiten que la comunicacion entre apps sin necesidad de que los usuarios sepan cómo están programadas.


    ¿Que es JSON?
    JSON (JavaScript Object Notation - Notación de Objetos de JavaScript) es un formato ligero de intercambio de datos
    que es fácil de leer y escribir para los humanos y fácil de analizar y generar para las máquinas.

    JSON es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son
    familiares para los programadores de la familia de lenguajes C, incluidos C, C++, C#, Java, JavaScript, TypeScript, 
    Perl, Python y muchos otros.

    ¿Que es Fetch?
    Fetch es una Web API que proporciona una interfaz para manejar peticiones y respuestas HTTP,
    permitiendo a los usuarios enviar y recibir datos a través de la red.
    Dispone de un método global llamado fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona.

    Metodos de Fetch(url):
    - fetch(url) : Permite hacer peticiones a un servidor.
        * Recibe como parametro la URL a la que se va a hacer la petición.
        * Devuelve una promesa que se resolverá cuando la petición sea exitosa o se rechazará si hay un error.

    - then() : Permite encadenar promesas.
        * Recibe como parametro una función callback que se ejecutará cuando la promesa se cumpla.
    
    - catch() : Permite capturar errores.
        * Recibe como parametro una función callback que se ejecutará cuando la promesa sea rechazada.

    - finally() : Permite ejecutar código despues de que la promesa se haya cumplido o rechazado.
        * No recibe parametros.
*/


// Ejemplo de fetch() con la API de Rick and Morty / usando manejo de promesas con then() y catch().




// Esta variable nos permitira manejar la paginacion de la API.
let pagina = 1;

// Estas variables se cargaran con las paginas siguiente y anterior disponibles actualmente.
let siguienteActual;
let anteriorActual;

// Esta variable nos permitira manejar la cantidad de personajes que se mostraran en la cuadricula.
let cantidad = 10;

// Con este input de rango podremos seleccionar la cantidad de personajes que se mostraran en la cuadricula.
document.getElementById('cantidad').addEventListener('change', (event) => {
    cantidad = event.target.value;
    document.getElementById('cantidadLabel').innerText = cantidad;
    consumirAPI(false, null, pagina, cantidad);
});




function consumirAPI(urlDinamico, url, pag, cant){
    document.getElementById('buscar').disabled = true; // Deshabilitamos el boton de buscar para evitar multiples clicks.

    let datosRecibidos;

    if(urlDinamico == true){
        datosRecibidos = fetch(`${url}`);
    }else{
        // La variable "datosRecibidos" se carga con la respuesta de fetch(), fetch() hace una petición a la API de Rick and Morty
        // y devuelve una promesa.
        // const datosRecibidos = fetch('https://rickandmortyapi.com/api/character'); // Por defecto fetch() hace una petición GET.
        datosRecibidos = fetch(`https://dragonball-api.com/api/characters?page=${pag}&limit=${cant}`); // Por defecto fetch() hace una petición GET.
    }

    // console.log(datosRecibidos);

    // fetch devuelve una promesa, sin embargo los datos que queremos se encuentran en la propiedad .json() de la respuesta.
    // por lo que necesitamos encadenar otra promesa con el metodo .then() para obtener los datos
    // y convertirlos a un objeto de JavaScript.
    datosRecibidos
        .then( (res) => res.json() ) // Convertimos la respuesta a JSON.
        .then( (res) =>{ 
            console.log(res);
            document.getElementById('personajes').innerHTML = '';
            return res;
        }) // Limpiamos el contenedor de personajes.
        .then( (res) =>{ 

            console.log(res.links.next);
            console.log(res.links.previous);

            // Actualizamos las variables de paginacion.
            siguienteActual = res.links.next;
            anteriorActual = res.links.previous;

            const contenedorPersonajes = document.getElementById('personajes'); // Seleccionamos el contenedor de personajes.

            // Iteramos sobre el array de personajes para mostrarlos en el DOM.
            res.items.forEach( (personaje) => {
                // Creamos los nodos necesarios para mostrar la informacion de los personajes.
                let contenedor = document.createElement('div');
                let id = document.createElement('p');
                let imagen = document.createElement('img');
                let nombre = document.createElement('h3');
                let boton = document.createElement('button');

                // Estilizamos los nodos
                contenedor.classList.add('flex', 'flex-col', 'items-center', 'p-2', 'w-72', 'bg-slate-500', 'rounded-xl');
                id.classList.add('font-bold');
                imagen.classList.add('rounded', 'h-64');
                boton.classList.add('bg-green-600', 'hover:bg-green-800');

                // Agregamos el contenido a los nodos.
                id.innerText = personaje.id;
                imagen.src = personaje.image;
                nombre.innerText = personaje.name;
                boton.innerText = 'Detalles';

                // Agregamos el evento click a cada boton
                boton.onclick = (() => {
                    const datosDelPersonaje = fetch(`https://dragonball-api.com/api/characters/${personaje.id}`);

                    datosDelPersonaje
                        .then( (res) => res.json() )
                        .then( (res) => {
                            // Ocultamos la cuadricula y mostramos el section dedicado al personaje individual
                            document.getElementById('cuadricula').classList.add('hidden');
                            document.getElementById('personajeIndividual').classList.remove('hidden');
                            

                            // Añadimos el contenido al section del personaje individual.
                            document.getElementById('personajeIndividual').innerHTML = `
                                <div class="flex flex-col items-center bg-slate-700 p-3 gap-2">
                                    <img class="h-72" src="${res.image}" alt="${res.name}">
                                    <p class="font-bold">${res.id}</p>
                                    <h3 class="text-2xl font-bold">${res.name}</h3>
                                    <div class="grid grid-cols-3">
                                        <p class="font-bold">Genero: <span class="font-medium">${res.gender}</span> </p>
                                        <p class="font-bold">Raza: <span class="font-medium">${res.race}</span> </p>
                                        <p class="font-bold">Afiliacion: <span class="font-medium">${res.affiliation}</span> </p>

                                        <p class="font-bold">Ki: <span class="font-medium">${res.ki}</span> </p>
                                        <p class="font-bold">Ki Maximo: <span class="font-medium">${res.maxKi}</span> </p>
                                        <p class="font-bold">Planeta de Origen: <span class="font-medium">${res.originPlanet.name}</span> </p>
                                    </div>
                                    <p class="w-[400px] font-bold font-consolas text-lg">Descripcion: <span class="font-medium text-sm text-center">${res.description}</span></p>
                                </div>
                            `;

                            // Boton para volver a la cuadricula
                            let regresar = document.createElement('button');
                            regresar.innerText = 'Regresar';
                            regresar.classList.add('bg-blue-600', 'hover:bg-blue-800');
                            console.dir(regresar);
                            regresar.onclick = (() => {
                                document.getElementById('cuadricula').classList.remove('hidden');
                                document.getElementById('personajeIndividual').classList.add('hidden');
                            });
                            document.getElementById('personajeIndividual').appendChild(regresar);
                        })
                        .catch( (error) => console.log(error) );
                });

                // Agregamos los nodos al contenedor.
                contenedor.appendChild(id);
                contenedor.appendChild(imagen);
                contenedor.appendChild(nombre);
                contenedor.appendChild(boton);

                // Agregamos el personaje al contenedor de personajes.
                contenedorPersonajes.appendChild(contenedor);
            });
        }) 
        .catch( (error) => console.log(error) ); // Capturamos errores.
};


// Seleccionamos los botones de paginacion.
const siguiente = document.getElementById('siguiente');
const anterior = document.getElementById('anterior');

// Funciones que manejaran la paginacion.
function siguientePagina(){
    // Se hace la peticion a la url dinamica, esta url se obtiene de la respuesta de la API tras la primera peticion (Boton de buscar)
    consumirAPI(true, siguienteActual);
};

function anteriorPagina(){
    // Se hace la peticion a la url dinamica, esta url se obtiene de la respuesta de la API tras la primera peticion (Boton de buscar)
    consumirAPI(true, anteriorActual);
};

// Agregamos los eventos click a los botones de paginacion.
siguiente.addEventListener('click', siguientePagina);
anterior.addEventListener('click', anteriorPagina);


// Seleccionamos el boton de buscar y le agregamos un evento click para consumir la API.
document.getElementById('buscar').addEventListener('click', consumirAPI);