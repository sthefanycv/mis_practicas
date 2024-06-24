/*
    Realizamos un cajero automtico con UI interactiva utilizando el DOM, Selectores y Eventos.
*/

// Variables
let cuentaAhorros = 800;
let cuentaCorriente = 640;
let claveActual = 5555;
let intentos = 1;

// Seleccionamos los botones especiales manualmente
const botonCancelar = document.getElementById("btnCancel");
const botonLimpiar = document.getElementById("btnClear");
const botonEnter = document.getElementById("btnEnter");

// Funcion para animar la insercion de la tarjet, ocultar la pantalla inicial y mostrar la pantalla de solicitud de clave
function insertarTarjeta() {
  console.log("Insertar Tarjeta");
  // Removemos el evento click de la ranura superior para evitar que se inserte otra tarjeta
  ranuraSuperior.removeEventListener("click", insertarTarjeta);

  // Agregamos la clase animarTarjeta al elemento con id Tarjeta
  document.getElementById("Tarjeta").classList.add("animarTarjeta");

  // Ocultamos la pantalla inicial despues de 3.5 segundos
  // setTimeout(funcion, tiempo en milisegundos)
  setTimeout(() => {
    // Ocultamos la pantalla inicial
    document.getElementById("interaccion1").classList.add("hidden");
    // Mostramos la pantalla de solicitud de clave
    document.getElementById("validarClave").classList.remove("hidden");

    // Asignamos el evento click y la funcion validarClave al boton Enter
    botonEnter.addEventListener("click", validarClave);
  }, 3500);
}

// Seleccionamos el elemento con id ranuraSup y asignamos un evento click a la funcion insertarTarjeta
let ranuraSuperior = document.getElementById("ranuraSup");
ranuraSuperior.addEventListener("click", insertarTarjeta);

// Seleccionamos los botones (divs) del teclado y asignamos un evento click a cada uno

// Usamos un ciclo for para recorrer seleccionar los botones del 0 al 9 y asignar un evento click a cada uno
//PD: Esto nos evita hacer 9 seleccotes y asignaciones de eventos
for (let i = 0; i <= 9; i++) {
  const boton = document.getElementById(`btn${i}`);
  boton.addEventListener("click", () => {
    agregarNumero(`${i}`, "clave");
  });
}

// Agregamos los eventos a los botones especiales
botonLimpiar.addEventListener("click", () => {
  document.getElementById("clave").value = "";
});

// Definimos la funcion que realizara la validacion de la clave
function validarClave() {
  let claveIngresada = document.getElementById("clave").value;
  if (claveIngresada == claveActual) {
    document.getElementById("validarClave").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    botonEnter.removeEventListener("click", validarClave);

    // - Menú interactivo (asignar evento de teclas para mover la flecha del menu)
    // Añadimos una escucha de evento al DOM para que detecte cuando se presione la tecla de ArrowUp o ArrowDown
    document.addEventListener("keydown", (event) => {
      // Si la tecla presionada es la de ArrowUp usando code
      if (event.code === "ArrowUp") {
        // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 1 entonces la flecha se movera a la opcion 5
        // y vaciamos la opcion 1
        if (document.getElementById("flecha-1").innerText == "➤") {
          document.getElementById("flecha-1").innerText = "";
          document.getElementById("flecha-5").innerText = "➤";
        }
        // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 2 entonces la flecha se movera a la opcion 1
        // y vaciamos la opcion 2
        else if (document.getElementById("flecha-2").innerText == "➤") {
          document.getElementById("flecha-2").innerText = "";
          document.getElementById("flecha-1").innerText = "➤";
        }
        // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 3 entonces la flecha se movera a la opcion 2
        // y vaciamos la opcion 3
        else if (document.getElementById("flecha-3").innerText == "➤") {
          document.getElementById("flecha-3").innerText = "";
          document.getElementById("flecha-2").innerText = "➤";
        }
        // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 4 entonces la flecha se movera a la opcion 3
        // y vaciamos la opcion 4
        else if (document.getElementById("flecha-4").innerText == "➤") {
          document.getElementById("flecha-4").innerText = "";
          document.getElementById("flecha-3").innerText = "➤";
        }
        // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 5 entonces la flecha se movera a la opcion 4
        else if (document.getElementById("flecha-5").innerText == "➤") {
          document.getElementById("flecha-5").innerText = "";
          document.getElementById("flecha-4").innerText = "➤";
        }
      } else if (event.code === "ArrowDown") {
        // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 1 entonces la flecha se movera a la opcion 2
        // y vaciamos la opcion 1
        if (document.getElementById("flecha-1").innerText == "➤") {
          document.getElementById("flecha-1").innerText = "";
          document.getElementById("flecha-2").innerText = "➤";
        }
        // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 4 entonces la flecha se movera a la opcion 5
        // y vaciamos la opcion 4
        else if (document.getElementById("flecha-2").innerText == "➤") {
          document.getElementById("flecha-2").innerText = "";
          document.getElementById("flecha-3").innerText = "➤";
        }
        // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 3 entonces la flecha se movera a la opcion 4
        // y vaciamos la opcion 3
        else if (document.getElementById("flecha-3").innerText == "➤") {
          document.getElementById("flecha-3").innerText = "";
          document.getElementById("flecha-4").innerText = "➤";
        }
        // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 4 entonces la flecha se movera a la opcion 5
        // y vaciamos la opcion 4
        else if (document.getElementById("flecha-4").innerText == "➤") {
          document.getElementById("flecha-4").innerText = "";
          document.getElementById("flecha-5").innerText = "➤";
        }
        // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 5 entonces la flecha se movera a la opcion 1
        // y vaciamos la opcion 5
        else if (document.getElementById("flecha-5").innerText == "➤") {
          document.getElementById("flecha-5").innerText = "";
          document.getElementById("flecha-1").innerText = "➤";
        }
      }
    });

    // - Validar la opcion seleccionada
    // Añadimos un evento click a la tecla enter para validar la opcion seleccionada
    botonEnter.addEventListener("click", validarOpcion);
  } else {
    document.getElementById("clave").value = "Clave Incorrecta";
    setTimeout(() => {
      document.getElementById("clave").value = "";
      // Aqui haremos el incremento del contador de intentos.
    }, 2000);
  }
}

function validarOpcion() {
  // Al seleccionar una opcion del menu principal el boton ENTER no se comportara igual
  // por lo que debemos remover el evento de validarOpcion para evitar errores, y agregar
  // el evento de aceptarCuenta.
  botonEnter.removeEventListener("click", validarOpcion);
  botonEnter.addEventListener("click", aceptarCuenta);

  // Si la flecha esta en la opcion 1
  if (document.getElementById("flecha-1").innerText == "➤") {
    seleccionCuentas("Consultar");
    // consultar();
  }
  // Si la flecha esta en la opcion 2
  else if (document.getElementById("flecha-2").innerText == "➤") {
    seleccionCuentas("Retirar");
    // retirar();
  }
  // Si la flecha esta en la opcion 3
  else if (document.getElementById("flecha-3").innerText == "➤") {
    seleccionCuentas("Depositar");
    // depositar();
  }
  // Si la flecha esta en la opcion 4
  else if (document.getElementById("flecha-4").innerText == "➤") {
    seleccionCuentas("Transferir");
    // transferir();
  }
  // Si la flecha esta en la opcion 5
  else if (document.getElementById("flecha-5").innerText == "➤") {
    // cambiarClave();
  }
}

botonCancelar.addEventListener("click", () => {
  document.getElementById("clave").value = "";
  document
    .getElementById("Tarjeta")
    .classList.replace("animarTarjeta", "removerTarjeta");
  setTimeout(() => {
    window.location.reload(); // Esta linea permite recargar la pagina
  }, 3000);
});

// Esta es la funcion que agrega la funcionalidad de escritura a los botones del teclado
function agregarNumero(numero, entrada) {
  let input = document.getElementById(entrada);
  if (input.value.length <= 3) {
    input.value += numero;
  }
}

// *** Funciones de las opciones del menu ***

// Esta funcion esconde el menu principal y muestra el menu de seleccion de cuentas
// ademas agrega la funcionalidad de mover la flecha entre las opciones de cuentas.
function seleccionCuentas(accionPorRealizar) {
  document.getElementById("accion").innerText = accionPorRealizar;
  document.getElementById("menu").classList.add("hidden"); // Volvemos a ocultar el menu agregado la clase hidden (de Tailwind)
  document.getElementById("cuentas").classList.remove("hidden"); // Mostramos la pantalla de cuentas

  document.addEventListener("keydown", (event) => {
    // Si la tecla presionada es la de ArrowUp usando code
    if (event.code === "ArrowUp") {
      // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 1 entonces la flecha se movera a la opcion 2
      // y vaciamos la opcion 1
      if (document.getElementById("fcuenta-1").innerText == "➤") {
        document.getElementById("fcuenta-1").innerText = "";
        document.getElementById("fcuenta-2").innerText = "➤";
      }
      // Si la tecla presionada es ArrowUp, y la flecha esta en la opcion 2 entonces la flecha se movera a la opcion 1
      // y vaciamos la opcion 2
      else if (document.getElementById("fcuenta-2").innerText == "➤") {
        document.getElementById("fcuenta-2").innerText = "";
        document.getElementById("fcuenta-1").innerText = "➤";
      }
    } else if (event.code === "ArrowDown") {
      // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 1 entonces la flecha se movera a la opcion 2
      // y vaciamos la opcion 1
      if (document.getElementById("fcuenta-1").innerText == "➤") {
        document.getElementById("fcuenta-1").innerText = "";
        document.getElementById("fcuenta-2").innerText = "➤";
      }
      // Si la tecla presionada es ArrowDown, y la flecha esta en la opcion 2 entonces la flecha se movera a la opcion 1
      // y vaciamos la opcion 2
      else if (document.getElementById("fcuenta-2").innerText == "➤") {
        document.getElementById("fcuenta-2").innerText = "";
        document.getElementById("fcuenta-1").innerText = "➤";
      }
    }
  });
}

// fcuenta1 ahorro
// fcuenta2 corriente

function aceptarCuenta() {
  let accion = document.getElementById("accion").innerText; // Aqui seleccionamos el tipo de accion que se va a realizar

  switch (accion) {
    case "Consultar":
      consultar();
      break;
    case "Retirar":
      validarMontoRetiro();
      break;
    case "Depositar":
      validarMontoDeposito();
      break;
    case "Transferir":
      alert("Transferir");
      break;
    default:
      alert("Opcion no valida");
  }
}

function consultar() {
  if (document.getElementById("fcuenta-1").innerText == "➤") {
    document.getElementById("cuentas").classList.add("hidden");
    document.getElementById("tipoCuentaSaldo").innerText = "Ahorros";
    document.getElementById("saldoDisponible").classList.remove("hidden");
    document.getElementById("saldo").innerText = cuentaAhorros;
  } else if (document.getElementById("fcuenta-2").innerText == "➤") {
    document.getElementById("cuentas").classList.add("hidden");
    document.getElementById("tipoCuentaSaldo").innerText = "Corriente";
    document.getElementById("saldoDisponible").classList.remove("hidden");
    document.getElementById("saldo").innerText = cuentaCorriente;
  }

  // Estas 3 funciones asincronas hacen lo siguiente:
  // 1. Muestran un mensaje que indica que para salir se debe presionar Cancel (despues de 3 segundos)
  // 2. Muestran un mensaje que indica que se esta saliendo del sistema (despues de 25.5 segundos)
  // 3. Recargan la pagina (despues de 1.5 segundos)
  // De esta manera se simula el cierre de la aplicacion transcurridos 30 segundos
  setTimeout(() => {
    let mensajeSalir = document.createElement("p");
    mensajeSalir.setAttribute("id", "mensajeSalir");
    mensajeSalir.innerText = "Presione Cancel para salir";
    document.getElementById("saldoDisponible").appendChild(mensajeSalir);
    setTimeout(() => {
      document.getElementById("mensajeSalir").innerText = "Saliendo...";
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 25500);
  }, 3000);
}

function validarMontoRetiro() {
  let tipoCuenta =
    document.getElementById("fcuenta-1").innerText == "➤"
      ? "Ahorros"
      : "Corriente";

  for (let i = 0; i <= 9; i++) {
    const boton = document.getElementById(`btn${i}`);
    boton.removeEventListener("click", () => {
      agregarNumero(`${i}`, "clave");
    });
  }

  for (let i = 0; i <= 9; i++) {
    const boton = document.getElementById(`btn${i}`);
    boton.addEventListener("click", () => {
      agregarNumero(`${i}`, "montoRet");
    });
  }

  document.getElementById("cuentas").classList.add("hidden");
  document.getElementById("montoRetiro").classList.remove("hidden");
  botonEnter.removeEventListener("click", aceptarCuenta);
  botonEnter.addEventListener("click", retirar);
}

function retirar() {
  let montoRetiro = document.getElementById("montoRet").value;
  if (montoRetiro <= cuentaAhorros) {
    cuentaAhorros -= montoRetiro; // Deducimos el monto retirado de la cuenta de ahorros
    document.getElementById("montoRetiro").classList.add("hidden");
    document.getElementById("saldoDisponible").classList.remove("hidden");
    document.getElementById("saldo").innerText = cuentaAhorros;
  } else {
    document.getElementById("montoRet").value = "Monto insuficiente";
    setTimeout(() => {
      document.getElementById("montoRet").value = "";
    }, 2000);
  }

  // Estas 3 funciones asincronas hacen lo siguiente:
  // 1. Muestran un mensaje que indica que para salir se debe presionar Cancel (despues de 3 segundos)
  // 2. Muestran un mensaje que indica que se esta saliendo del sistema (despues de 25.5 segundos)
  // 3. Recargan la pagina (despues de 1.5 segundos)
  // De esta manera se simula el cierre de la aplicacion transcurridos 30 segundos
  setTimeout(() => {
    let mensajeSalir = document.createElement("p");
    mensajeSalir.setAttribute("id", "mensajeSalir");
    mensajeSalir.innerText = "Presione Cancel para salir";
    document.getElementById("saldoDisponible").appendChild(mensajeSalir);
    setTimeout(() => {
      document.getElementById("mensajeSalir").innerText = "Saliendo...";
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 25500);
  }, 3000);
}

function validarMontoDeposito() {
  for (let i = 0; i <= 9; i++) {
    const boton = document.getElementById(`btn${i}`);
    boton.removeEventListener("click", () => {
      agregarNumero(`${i}`, "clave");
    });
  }

  for (let i = 0; i <= 9; i++) {
    const boton = document.getElementById(`btn${i}`);
    boton.addEventListener("click", () => {
      agregarNumero(`${i}`, "montoDep");
    });
  }

  document.getElementById("cuentas").classList.add("hidden");
  document.getElementById("montoDeposito").classList.remove("hidden");
  botonEnter.removeEventListener("click", aceptarCuenta);
  botonEnter.addEventListener("click", depositar);
}

function depositar() {
  let montoDeposito = document.getElementById("montoDep").value;
  if (montoDeposito <= 0) {
    document.getElementById("montoDep").value = "Monto debe ser mayor a 0";
    setTimeout(() => {
      document.getElementById("montoDep").value = "";
    }, 2000);
  } else {
    cuentaAhorros += +montoDeposito; // Sumamos el monto depositado a la cuenta de ahorros
    document.getElementById("montoDeposito").classList.add("hidden");
    document.getElementById("saldoDisponible").classList.remove("hidden");
    document.getElementById("saldo").innerText = cuentaAhorros;
  }

  // Estas 3 funciones asincronas hacen lo siguiente:
  // 1. Muestran un mensaje que indica que para salir se debe presionar Cancel (despues de 3 segundos)
  // 2. Muestran un mensaje que indica que se esta saliendo del sistema (despues de 25.5 segundos)
  // 3. Recargan la pagina (despues de 1.5 segundos)
  // De esta manera se simula el cierre de la aplicacion transcurridos 30 segundos
  setTimeout(() => {
    let mensajeSalir = document.createElement("p");
    mensajeSalir.setAttribute("id", "mensajeSalir");
    mensajeSalir.innerText = "Presione Cancel para salir";
    document.getElementById("saldoDisponible").appendChild(mensajeSalir);
    setTimeout(() => {
      document.getElementById("mensajeSalir").innerText = "Saliendo...";
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 25500);
  }, 3000);
}

// PENDIENTE:
/* 
    - Crear funcionalidades para cada opcion del menu
        - Crear pantalla de consulta de saldo --------------------- (Listo)
        - Crear pantalla de retiro de efectivo --------------------- (Listo)
        - Crear pantalla de deposito de efectivo --------------------- (Listo)

    - Extra: 
        - Crear pantalla de cambio de clave
        - Crear pantalla de transferencia de saldo
        - Crear pantalla de salida del sistema
        - Crear pantalla de finalizacion de transaccion
        - Crear pantalla de validacion de cancelacion de transaccion (Si/No)
        - Agregar funcionalidad al reloj y calendario
        - Realizar diseño responsivo
        - Finiquitar aspectos visuales (estilos, animaciones, imagenes, etc...)
*/
