/*
    Realizamos un cajero automtico con UI interactiva utilizando el DOM, Selectores y Eventos.
*/

// Variables
let saldoBase = 1000;
let cuentaAhorros = 0;
let cuentaCorriente = 0;
let claveActual = 5555;
let intentos = 1;

// Funcion para animar la insercion de la tarjet, ocultar la pantalla inicial y mostrar la pantalla de solicitud de clave

function insertarTarjeta() {
    console.log('Insertar Tarjeta')
    // Removemos el evento click de la ranura superior para evitar que se inserte otra tarjeta
    ranuraSuperior.removeEventListener('click', insertarTarjeta);

    // Agregamos la clase animarTarjeta al elemento con id Tarjeta
    document.getElementById('Tarjeta').classList.add('animarTarjeta');

    // Ocultamos la pantalla inicial despues de 3.5 segundos
    // setTimeout(funcion, tiempo en milisegundos)
    setTimeout(()=>{
        // 1- Ocultamos la pantalla inicial
        document.getElementById('interaccion1').classList.add('hidden');
        // 2- Mostramos la pantalla de solicitud de clave
        document.getElementById('validarClave').classList.remove('hidden');

        // 3- Asignamos el evento click y la funcion validarClave al boton Enter
        botonEnter.addEventListener('click', validarClave);
    },3500);
};

// Seleccionamos el elemento con id ranuraSup y asignamos un evento click a la funcion insertarTarjeta
let ranuraSuperior = document.getElementById('ranuraSup');
ranuraSuperior.addEventListener('click', insertarTarjeta);