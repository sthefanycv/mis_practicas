/*
    ¿Qué es setTimeout?
    setTimeout es una función que se utiliza para ejecutar una función solo una vez después de transcurrir 
    un tiempo determinado. Es decir, setTimeout es una función asíncrona.

    Recibe dos argumentos:
    - La función (de callback) que se ejecutará.
    - El tiempo en milisegundos que debe transcurrir para que se ejecute la función.

    Ejemplo:   |         Primer Parametro       || Segundo Parametro |
    setTimeout(() => {console.log("Hola Mundo");}, 3000);

    // Esto imprimirá "Hola Mundo" en la consola después de 3 segundos.
*/


const boton1 = document.querySelector("#btn");


// Ejemplo 1
function saludarConTimeout(){
    setTimeout(() => {
        document.querySelector("#salida1").innerText = "hola despues de 3 segundos.";
    }, 3000);
};


// Agregando el evento click al botón
boton1.addEventListener("click", saludarConTimeout);