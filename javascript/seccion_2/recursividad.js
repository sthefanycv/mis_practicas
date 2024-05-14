/*
    Recursividad: la recursividad es una función que se llama a sí misma. 
    Piensa en ello como una alternativa al bucle.
*/


// Utilizaremos esta variable para almacenar el incremento de una cuenta usando una
// función recursiva.
let contador = 0;


function incrementar(){
    // Se incrementa la variable contador en 1.
    contador = contador + 1;
    // Es lo mismo pero mas breve hacer: contador += 1;
    //  Es aun mas breve hacer: contador++;

    // Se imprime el valor actual de la variable contador.
    console.log(contador);

    // Evaluamos el contador para detener la recursividad cuando llegue a 10.
    if(contador < 10){
        // Se llama a la función incrementar.
        incrementar();
    }else{
        // Se imprime un mensaje de que la recursividad ha terminado.
        console.log("Recursividad terminada.");
    };
};

// Ejecutamos la función incrementar.
incrementar();









/* 
    Realizar la logica de un cajero automatico que realice lo siguiente:
    A) Solicitar clave
        - Validar la clave y en caso de no coincidir con la clave actual mostrar un mensaje y volver a solicitarla.
        Si la clave se solicita mas de 3 veces bloquear la cuenta.

        - Si la clave coincide, mostrar un menú (B)

    B) Mostrar un menú
        1. Retirar
        2. Consultar Saldo
        3. Depositar
        4. Transferir
        5. Cambiar clave
        6. Salir

    1-   En caso de retirar, debe solicitar el monto, realizar la deduccion y mostrar el saldo final.
        Posteriormente volver a mostrar el menú.

    2-   En caso de consultar saldo, mostrar el saldo disponible.
        Posteriormente volver a mostrar el menú.

    3-   En caso de depositar, solicitar el monto, realizar la adición y mostrar el saldo final.
        Posteriormente volver a mostrar el menú.

    4-   En caso de transferir, solicitar la cuenta destino (La cuenta destino es estatica) y el monto, realizar la deduccion y mostrar el saldo final.
        Posteriormente volver a mostrar el menú.

    5-  En caso de salir, mostrar un mensaje y cerrar el programa.
*/



// Definimos las variables que usaremos en el ejercicio.

// Clave de la cuenta.
let clave = "5050";

// Saldo inicial de la cuenta corriente y de ahorros.
let saldoCtaCorriente = 1000;
let saldoCtaAhorros = 500;

// Contador de intentos para la clave.
let intentos = 1;



function validarClave(){
    // Solicitamos la clave al usuario.
    let claveUsuario = prompt("Ingrese su clave:");
    
    if(claveUsuario === clave && intentos <= 3){
        // Si la clave es correcta, mostramos el menu.
        menu();
    }else if(intentos < 3){
        // Si la clave es incorrecta, incrementamos el contador de intentos en 1.
        intentos++;
        // intentos += 1;
        // intentos = intentos + 1;
        
        // Si la clave es incorrecta, mostramos un mensaje de error.
        alert(`Clave incorrecta, intente nuevamente.\nIntentos restantes: ${4 - intentos}`);
        
        // Llamamos nuevamente a la función validarClave.
        validarClave();
    }else{
        // Si el usuario supera los 3 intentos, bloqueamos la cuenta.
        alert(`Su cuenta ha sido bloqueada.`);
    }
};


function menu(){
    alert("Bienvenido a Lexpin Bank");
    let opcion = prompt(`Seleccione una opción:
    1. Retirar
    2. Consultar Saldo
    3. Depositar
    4. Transferir
    5. Cambiar Clave
    6. Salir`);
    
    // Evaluamos la opción seleccionada por el usuario.
    switch(opcion){
        case "1":
            // Si la opción es 1, llamamos a la función retirar. ✅✅
            retirar();
            break;
        case "2":
            // Si la opción es 2, llamamos a la función consultar.  ✅✅
            consultar();
            break;
        case "3":
            // Si la opción es 3, llamamos a la función depositar. ✅✅
            depositar();
            break;
        case "4":
            // Si la opción es 4, llamamos a la función transferir. ✅✅
            transferir();
            break;
        case "5":
            // Si la opción es 5, llamamos a la función cambiarClave.
            cambiarClave();
            break;
        case "6":
            // Si la opción es 6, llamamos a la función salir.  ✅✅
            salir();
            break;
        default:
            alert("Opción no válida.");
            menu();
    };
};


function retirar(){
    let cuenta = prompt(`Seleccione en la cuenta desde la que desea retirar:
    1. Cuenta Corriente
    2. Cuenta de Ahorros`);

    let monto = +prompt("Ingrese el monto a retirar:");

    // Evaluamos que el saldo a depositar se mayor a 1.
    if(monto < 1){
        alert(`No puedes retirar menos de 1$`);
        retirar();
    }else{
        switch(cuenta){
            case "1":
                // Mostramos el saldo previo al deposito
                alert(`Saldo actual de la Cuenta Corriente: $${saldoCtaCorriente}`);

                // Realizamos la operación de retiro
                if(saldoCtaCorriente - monto < 0){
                    alert("Saldo insuficiente.");
                }
                else{
                    // Mostramos el saldo actual de la cuenta corriente.
                    saldoCtaCorriente -= monto;
                    alert(`Saldo actualizado de la Cuenta Corriente: $${saldoCtaCorriente}`);
                };
                break;
            case "2":
                // Mostramos el saldo previo al deposito
                alert(`Saldo actual de la Cuenta de Ahorros: $${saldoCtaAhorros}`);
                
                // Realizamos la operación de retiro
                if(saldoCtaAhorros - monto < 0){
                    alert("Saldo insuficiente.");
                }else{
                    saldoCtaAhorros -= monto;
                    // Mostramos el saldo actual de la cuenta de ahorros.
                    alert(`Saldo actualizado de la Cuenta de Ahorros: $${saldoCtaAhorros}`);
                }
                break;
            default:
                alert("La cuenta indicada NO existe");
                retirar();
        };
    };

    // preguntamos al usuario que desea hacer a continuación.
    let opcion = prompt(`¿Como desea continuar?
    1- Ir al menu principal
    2- Realizar otro retiro
    3- Salir`);

    switch(opcion){
        case "1":
            menu();
            break;
        case "2":
            retirar();
            break;
        default:
            alert("Saliendo...");
            salir();
    };
};


function consultar(){
    alert("Consultar Saldo");
    
    let accion = prompt(`Que cuenta desea consultar:
    1. Cuenta Corriente
    2. Cuenta de Ahorros`);

    if(accion === "1" || accion === "corriente"){
        alert(`Saldo Cuenta Corriente: $${saldoCtaCorriente}`);
    }else if(accion === "2" || accion === "ahorros"){
        alert(`Saldo Cuenta de Ahorros: $${saldoCtaAhorros}`);
    }else{
        alert("La cuenta indicada NO existe");
        consultar();
    };

    // preguntamos al usuario que desea hacer a continuación.
    let opcion = prompt(`¿Como desea continuar?
    1- Ir al menu principal
    2- Realizar otra consulta
    3- Salir`);

    switch(opcion){
        case "1":
            menu();
            break;
        case "2":
            consultar();
            break;
        default:
            alert("Saliendo...");
            salir();
    };
};


function depositar(){
    alert("Depositar");

    let cuenta = prompt(`Seleccione la cuenta en la que desea depositar:
    1. Cuenta Corriente
    2. Cuenta de Ahorros`);

    let monto = +prompt("Ingrese el monto a depositar:");

    // Evaluamos que el saldo a depositar se mayor a 1.
    if(monto < 1){
        alert(`No puedes depositar menos de 1$`);
        depositar();
    }else{
        switch(cuenta){
            case "1":
                // Mostramos el saldo previo al deposito
                alert(`Saldo actual de la Cuenta Corriente: $${saldoCtaCorriente}`);

                // Realizamos la operación de deposito.
                // saldoCtaCorriente = saldoCtaCorriente + monto;
                saldoCtaCorriente += monto;

                // Mostramos el saldo actual de la cuenta corriente.
                alert(`Saldo actualizado de la Cuenta Corriente: $${saldoCtaCorriente}`);
                break;
            case "2":
                // Mostramos el saldo previo al deposito
                alert(`Saldo actual de la Cuenta de Ahorros: $${saldoCtaAhorros}`);
                
                // Realizamos la operación de deposito.
                // saldoCtaAhorros = saldoCtaAhorros + monto;
                saldoCtaAhorros += monto;

                // Mostramos el saldo actual de la cuenta de ahorros.
                alert(`Saldo actualizado de la Cuenta de Ahorros: $${saldoCtaAhorros}`);
                break;
            default:
                alert("La cuenta indicada NO existe");
                depositar();
        };
    };

    // preguntamos al usuario que desea hacer a continuación.
    let opcion = prompt(`¿Como desea continuar?
    1- Ir al menu principal
    2- Realizar otro deposito
    3- Salir`);

    switch(opcion){
        case "1":
            menu();
            break;
        case "2":
            depositar();
            break;
        default:
            alert("Saliendo...");
            salir();
    };
};


function transferir(){
    alert("Transferir");

    // Solicitamos el cliente que indique el par de cuentas a operar
    let parCuentas = prompt(`Seleccione el par de cuentas a operar:
    1. Cuenta Corriente -> Cuenta de Ahorros
    2. Cuenta de Ahorros -> Cuenta Corriente`);

    let monto;

    switch(parCuentas){
        case "1":
            alert(`Saldo disponible en Cuenta Corriente: $${saldoCtaCorriente}`);

            monto = +prompt("Ingrese el monto a transferir:");

            if(monto < 1){
                alert(`No puedes transferir menos de 1$`);
                transferir();
            }else{
                if(saldoCtaCorriente - monto < 0){
                    alert("Saldo insuficiente para realizar la operación.");
                    transferir();
                }else{
                    // Descontamos el monto de la cuenta corriente y lo sumamos a la cuenta de ahorros.
                    saldoCtaCorriente -= monto;
                    saldoCtaAhorros += monto;
                    alert(`Transferencia realizada con éxito.\n
                    Saldo Cuenta Corriente: $${saldoCtaCorriente}
                    Saldo Cuenta de Ahorros: $${saldoCtaAhorros}`);
                };
            };
            break;
        case "2":
            alert(`Saldo disponible en Cuenta Ahorros: $${saldoCtaAhorros}`);

            monto = +prompt("Ingrese el monto a transferir:");

            if(monto < 1){
                alert(`No puedes transferir menos de 1$`);
                transferir();
            }else{
                if(saldoCtaAhorros - monto < 0){
                    alert("Saldo insuficiente para realizar la operación.");
                    transferir();
                }else{
                    // Descontamos el monto de la cuenta de ahorros y lo sumamos a la cuenta corriente.
                    saldoCtaAhorros -= monto;
                    saldoCtaCorriente += monto;
                    alert(`Transferencia realizada con éxito.\n
                    Saldo Cuenta Ahorro: $${saldoCtaAhorros}
                    Saldo Cuenta de Corriente: $${saldoCtaCorriente}`);
                };
            };
            break;
        default:
            alert("Opción no válida.");
            transferir();
    };


    // preguntamos al usuario que desea hacer a continuación.
    let opcion = prompt(`¿Como desea continuar?
    1- Ir al menu principal
    2- Realizar otra transferencia
    3- Salir`);

    switch(opcion){
        case "1":
            menu();
            break;
        case "2":
            transferir();
            break;
        default:
            alert("Saliendo...");
            salir();
    };
};


function cambiarClave(){
    alert("Cambiar Clave");
    
    let claveActual = prompt("Ingrese su clave actual:");
    
    if(claveActual === clave){
        let nuevaClave = prompt("Ingrese su nueva clave:");
        clave = nuevaClave;
        alert("Clave actualizada con éxito, inicie sesión nuevamente.");
        validarClave();
    }else{
        alert("Clave incorrecta, intente nuevamente.");
        cambiarClave();
    }
};


function salir(){
    alert(`Gracias por utilizar Lexpin Bank App.`);

    // Reseteamos la variable intentos.
    intentos = 1;
};








/* Ejercicio para realizar en casa - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    VERDE, AMARILLO, ROJO.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: Elige un color para iniciar:
    1) VERDE
    2) AMARILLO
    3) ROJO
    OTRO) Opcion no valida


    Luego crea otro mensaje en pantalla que muestre una situacion con el color ingresado previamente
    y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        - El semaforo esta de color ROJO, ¿Que desea hacer?
        1) Pasar normalmente
        2) Acelerar
        3) Esperar
        OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    Si la luz es VERDE evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta no valida.
    
    
    Si la luz es AMARILLO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta no valida.


    Si la luz es ROJO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta no valida.


    PISTA: en algun momento necesitaras usar if y AND/&&
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/