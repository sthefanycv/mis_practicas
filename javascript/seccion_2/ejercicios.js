function juegoSemaforo() {
    // Mensaje inicial para elegir el color
    let colorInput = prompt("Elige un color para iniciar:\n1) VERDE\n2) AMARILLO\n3) ROJO");
    let color;

    // Convertir el número o texto ingresado a color
    if (colorInput.toLowerCase() == "1") {
        color = "verde";
    } else if (colorInput.toLowerCase() == "2") {
        color = "amarillo";
    } else if (colorInput.toLowerCase() == "3") {
        color = "rojo";
    } else {
        alert("Opción no válida.");
        return; // Salir de la función si la opción no es válida
    }

    // Variable para almacenar la acción del usuario
    let accionInput = prompt("El semáforo está de color " + color.toUpperCase() + ", ¿Qué deseas hacer?\n1) Pasar normalmente\n2) Acelerar\n3) Esperar");
    let accion;

    // Convertir el número o texto ingresado a acción
    if (accionInput.toLowerCase() == "1") {
        accion = "pasar normalmente";
    } else if (accionInput.toLowerCase() == "2") {
        accion = "acelerar";
    } else if (accionInput.toLowerCase() == "3") {
        accion = "esperar";
    } else {
        alert("Opción no válida.");
        return; // Salir de la función si la opción no es válida
    }

    // Evaluar la acción según el color
    if (color === "verde") {
        if (accion === "pasar normalmente") {
            alert("¡Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁");
        } else if (accion === "acelerar") {
            alert("¡Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞");
        } else if (accion === "esperar") {
            alert("¡Oh no!, Creaste un bloqueo y los demás conductores están furiosos 🤬, ¡Has Perdido! ❌");
        }
    } else if (color === "amarillo") {
        if (accion === "pasar normalmente") {
            alert("¡Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌");
        } else if (accion === "acelerar") {
            alert("¡Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁");
        } else if (accion === "esperar") {
            alert("¡Oh no!, Creaste un bloqueo y los demás conductores están furiosos 🤬, ¡Has Perdido! 😞");
        }
    } else if (color === "rojo") {
        if (accion === "pasar normalmente") {
            alert("¡Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞");
        } else if (accion === "acelerar") {
            alert("¡Oh no!, Cruzaste mientras autos en otra dirección pasaban y chocaste 💥, ¡Has Perdido! ❌");
        } else if (accion === "esperar") {
            alert("¡Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁");
        }
    }
}

// Llamada a la función para iniciar el juego
juegoSemaforo();


//SE DEBE USAR BREAK DESPUES DE CADA CASO 