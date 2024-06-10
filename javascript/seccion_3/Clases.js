/* CLASES:
    Una clase es una plantilla o molde para crear objetos(instancias), 
    que tienen propiedades y métodos en común. 

    Una clase se define utilizando la palabra clave "class" (class Persona{...}), seguida del nombre de la clase. 
    Dentro de las llaves se definen las propiedades y métodos de la clase.

    - Constructor: es un método especial de la clase que se ejecuta automáticamente cuando 
    se crea una nueva instancia, su rol principal es inicializar los atributos de la clase con los 
    valores pasados como argumentos al crear una nueva instancia, usando la palabra reservada new.
    Ej: let persona = new Persona('William', 24);

    - Instancia: es un objeto creado a partir de una clase, es decir un objeto copia elaborado a partir de una plantilla (clase).

    - Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    El método Saludo está fuera del scope del constructor, pero puede acceder a 
    los atributos de la clase que se han declarado en el constructor a través de 
    la palabra clave this. Esto es posible porque this se refiere a la instancia actual de la clase.

    - this: hace referencia al elemento padre, es decir al objeto instanciado.
    

    NOTA:
        Es una convención común en JavaScript declarar las clases con la 
        primera letra de cada palabra en mayúscula. Ejemplo "Persona" o "Usuario",
        sin embargo es solo una buena practica, no evita el buen funcionamiento de las clases.
        
        Esto se realiza con la finalidad de diferenciar de manera mas facil cuando
        se emplea una clase, una variable o una funcion.

    ¿En que situaciones es mas recomendable usar clases que funciones constructoras?
    - Cuando se requiere un mayor control de los objetos.
    - Cuando se requiere una estructura mas compleja.
    - Cuando se requiere un mayor orden en el codigo.

    ¿En que situaciones es mas recomendable usar funciones constructoras que clases?
    - Cuando se requiere una estructura mas simple.
    - Cuando se requiere un menor control de los objetos.
    - Cuando se requiere un menor orden en el codigo.
*/




// En este ejemplo, la clase "Persona" tiene un constructor que se utiliza para asignar valores a las 
// propiedades "nombre" y "edad" al crear una nueva instancia de la clase, esto quiere decir al crear un nuevo objeto. 
// También tiene un método que es una funcion llamada "saludo" que retorna un mensaje.

class Persona {
    constructor(userName, userAge) {
    //  propiedad = valor;
        this.nombre = userName;
        this.edad = userAge;
    }

    //Metodo: es una funcion (puede ser opcional) que retorna (con retun) logica.
    saludo() {
        return (`Hola, Me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }

    nacimiento() {
        return (`Naci en el año ${2024 - this.edad}.`);
    }
};


const diego = new Persona("Diego", 28);
const luis = new Persona('Luis', 27);
const lizzy = new Persona('Lizzy', 20);
const paul = new Persona('Paul', 27);


console.log(diego.saludo());
console.log(luis.saludo());
console.log(lizzy.nacimiento());
console.log(paul.saludo());






// ***** EJERCICIO *****
// Crea un formulario basico que solicite nombre, apellido y edad, tambien debe contar con un boton(basico) 
// para registrar. Crea una funcion que obtenga los datos del formulario y cree nuevas instancias de una clase 
// llamada Usuarios y las aloje en un array llamado instancias.


// Este array va a almacener las instancias (objetos) de la clase Usuarios
const instancias = [];

// Esta es la clase Usuarios (El molde de objetos)
class Usuarios{
    constructor(nombre, apellido, edad, telefono, correo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.correo = correo;
    }
};

// Esta es la funcion que se encarga de obtener los datos del formulario y crear una nueva instancia de la clase Usuarios
// y añadirla al array instancias cuando se haga click en el boton de registro
function obtenerDatos(){
    // Extraemos el valor de cada imput del formulario
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    // Creamos un objeto (instancia) con los valores obtenidos
    const usuario = new Usuarios(nombre, apellido, edad, telefono, correo);

    // Añadimos el objeto al final del array llamado "instancias"
    instancias.push(usuario);

    // Mostramos el array en la consola para verificar que si se agrego
    console.log(instancias);

    // Limpiamos los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
};

// Seleccionamos el boton de registro
const btnRegistro = document.getElementById('registrar');

// Agregamos un evento de click al boton de registro
btnRegistro.addEventListener('click', obtenerDatos);






// Seleccionamos el boton Ver Registros para imprimir los usuarios registrados directamente en el DOM
// y gregamos un evento de click.
const btnVerRegistros = document.getElementById('verRegistros');

btnVerRegistros.addEventListener("click", ()=>{
    const contenedor = document.getElementById('registros');
    contenedor.innerHTML = "";

    // Iteramos sobre el array de instancias y crear un nodo de tipo parrafo para cada objeto
    // posteriormente cargar el innerText del nodo con la informacion del usuario, para que
    // como ultimo paso este sea añadido al contenedor con el id "registros".

    instancias.forEach((usuario)=>{
        const p = document.createElement('p');
        p.innerText = `Nombre: ${usuario.nombre} ${usuario.apellido} - Edad: ${usuario.edad} - Telefono: ${usuario.telefono} - Correo: ${usuario.correo}`;
        p.classList.add('text-white', "font-bold");
        
        contenedor.classList.replace('hidden', 'flex')
        contenedor.appendChild(p);
    });
});





// Actividad extra: Agregar animaciones con animate.css usando eventos y selectores.
const titulo = document.getElementById('titulo')

titulo.addEventListener('click', ()=>{
    titulo.classList.add('animate__animated', 'animate__rubberBand');
    // setTimeout(()=>{
    //     titulo.classList.remove('animate__animated', 'animate__rubberBand');
    // }, 650);
});





// Elabora un formulario como un Semi-PRO, con animaciones, responsive design, clases y eventos, etc...
// El formulario debe permitir realizar un registro en 2 steps.

// El primer step debe solicitar:
// - nombre (de producto)
// - precio
// - cantidad
// - descripcion

// El segundo step debe solicitar:
// - Fabricante
// - Fecha de fabricacion
// - Fecha de recibo
// - Validar con un ternario si el producto es consumible o no:
//   - Si es consumible, solicitar fecha de caducidad
//   - Si no es consumible, solicitar tiempo de garantia

// Por ultimo, al finalizar el registro, mostrar un mensaje de exito y limpiar los campos del formulario, almacener el producto
// en un array de productos y mostrarlo en el DOM solo si se ha registrado al menos un producto.

// NOTA: Puedes usar la libreria de animate.css para las animaciones.

// IMPORTANTE: No debe permitir avanzar al segundo step si no se han completado TODOS los campos del primer step.
// IMPORTANTE: No debe permitir registrar un producto si no se han completado TODOS los campos del segundo step.
