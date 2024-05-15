

// Mensaje inicial para elegir color
let color = prompt(`Elige un color para iniciar:
1) VERDE
2) AMARILLO
3) ROJO
OTRO) Opción no válida`);

// Validación de la entrada del color
if (color === "1" || color === "VERDE") {
    color = "VERDE";
} else if (color === "2" || color === "AMARILLO") {
    color = "AMARILLO";
} else if (color === "3" || color === "ROJO") {
    color = "ROJO";
} else {
    alert("Respuesta no válida. Intenta nuevamente.");
    return; // Termina el juego si la opción de color es inválida
}

// Mensaje de situación y opciones de acción
let accion = prompt(`El semáforo está de color ${color}, ¿qué deseas hacer?
1) Pasar normalmente
2) Acelerar
3) Esperar
OTRO) Opción no válida`);

// Validación de la entrada de la acción
if (accion === "1" || accion === "PASAR NORMALMENTE") {
    accion = "PASAR NORMALMENTE";
} else if (accion === "2" || accion === "ACELERAR") {
    accion = "ACELERAR";
} else if (accion === "3" || accion === "ESPERAR") {
    accion = "ESPERAR";
} else {
    alert("Respuesta no válida. Intenta nuevamente.");
    return; // Termina el juego si la opción de acción es inválida
}

// Lógica del juego usando Switch-Case
switch (color) {
    case "VERDE":
        switch (accion) {
            case "PASAR NORMALMENTE":
                console.log("¡Bien hecho! Pasaste en el momento adecuado ✅, ¡Has ganado! ");
                break;
            case "ACELERAR":
                console.log("¡Oh no! Aceleraste demasiado y chocaste , ¡Has perdido! ");
                break;
            case "ESPERAR":
                console.log("¡Oh no! Creaste un bloqueo y los demás conductores están furiosos , ¡Has perdido! ❌");
                break;
            default:
                console.log("Respuesta no válida.");
        }
        break;

    case "AMARILLO":
        switch (accion) {
            case "PASAR NORMALMENTE":
                console.log("¡Oh no! No aceleraste lo suficiente y te han chocado , ¡Has perdido! ❌");
                break;
            case "ACELERAR":
                console.log("¡Bien hecho! Pasaste en el momento justo ✅, ¡Has ganado! ");
                break;
            case "ESPERAR":
                console.log("¡Oh no! Creaste un bloqueo y los demás conductores están furiosos , ¡Has perdido! ");
                break;
            default:
                console.log("Respuesta no válida.");
        }
        break;

    case "ROJO":
        switch (accion) {
            case "PASAR NORMALMENTE":
                console.log("¡Oh no! Pasaste en el momento indebido ❌, ¡Has perdido! ");
                break;
            case "ACELERAR":
                console.log("¡Oh no! Cruzaste mientras autos en otra dirección pasaban y chocaste , ¡Has perdido! ❌");
                break;
            case "ESPERAR":
                console.log("¡Bien hecho! Esperaste en el momento adecuado ✅, ¡Has ganado! ");
                break;
            default:
                console.log("Respuesta no válida.");
        }
        break;

    default:
        console.error("Error: Color del semáforo no reconocido.");
}
