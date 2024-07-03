/*
    ¿Que son Cookies?
    Son pequeños fragmentos de datos que un servidor web envía al navegador del usuario para almacenar en el lado del cliente. 

    A diferencia de localStorage y sessionStorage, las cookies tienen la capacidad de establecer 
    un tiempo de vida, y pueden ser configuradas para persistir incluso después de que el usuario cierre la ventana del navegador.

    Las cookies se utilizan para almacenar información sobre el usuario, como preferencias personales,
    datos de inicio de sesión, carritos de compras, y otra información similar.

    Sintaxis:
    
    // Crear una cookie con valor
    document.cookie = "nombre=valor"; 
    NOTA: Esta cookie al no tener tiempo de expiracion, por defecto se elimina al cerrar el navegador o cerrar la pestaña,
    es decir, se comportara como sessionStorage.


    // Crear una cookie con valor, fecha de expiración
    document.cookie = "nombre=valor; expires=fecha";
    NOTA: La fecha se maneja en formato UTC, ejemplo: 
        "Thu, 01 Jan 1970 00:00:00 UTC"
        "dia, d/Mes mes año hor:min:seg UTC"
    
    // Crear una cookie con valor, fecha de expiración, directorio
    document.cookie = "nombre=valor; expires=fecha; path=directorio";

    // Crear una cookie con valor, fecha de expiración, directorio, dominio
    document.cookie = "nombre=valor; expires=fecha; path=directorio; domain=dominio";

    // Crear una cookie con valor, fecha de expiración, directorio, dominio y seguridad
    document.cookie = "nombre=valor; expires=fecha; path=directorio; domain=dominio; secure";
*/




// Guardando un valor
// ¿Que es una tupla?
// Es un conjunto ordenado de elementos, en este caso, el nombre de la cookie y el valor de la cookie.
document.cookie = "nombre=Diego";



// Guardando un valor con fecha de expiración personalizada.
// Para ello nos ayudaremos con el constructor Date() de JavaScript.

// Establecemos la fecha de expiración en base al tiempo epoch.
// El tiempo epoch es el tiempo que ha transcurrido desde el 1 de enero de 1970 00:00:00 UTC.
let fecha = new Date();

// Establecemos la fecha de expiración en 50s. donde 1000ms = 1s.
fecha.setTime(fecha.getTime() + (240000));


document.cookie = `nombre2=Diego; expires=${fecha.toUTCString()}`;
// El metodo toUTCString() convierte la fecha en formato UTC.


// Crear una cookie con valor, fecha de expiración, directorio
document.cookie = `nombre3=Diego; expires=${fecha.toUTCString()}; path=/`;
document.cookie = `nombre4=Diego; expires=${fecha.toUTCString()}; path=/JavaScript/Seccion_4/ScopeLimitado`;
document.cookie = `nombre5=Diego; expires=${fecha.toUTCString()}; path=/JavaScript/Seccion_4/ScopeLimitado/ScopeLimitado2`;



// Crear una cookie con valor, fecha de expiración, directorio, dominio
document.cookie = `nombre6=Diego; expires=${fecha.toUTCString()}; path=/; domain=127.0.0.1`;



// Crear una cookie con valor, fecha de expiración, directorio, dominio y seguridad
document.cookie = `nombre7=Diego; expires=${fecha.toUTCString()}; path=/; domain=127.0.0.1; secure`;
/*
    ¿Que hace la propiedad secure?
    La propiedad secure es un booleano que indica si la cookie solo debe ser enviada a 
    través de una conexión segura.

    Si la propiedad secure es true, la cookie solo será enviada a través de una conexión segura
    como HTTPS. De lo contrario, la cookie será enviada a través de cualquier conexión.
*/





// Antes de ver como leer una cookie, vamos a seleccionar un elemendo del DOM
// poder imprimirla, en este caso el elemento "h3".
let nombreUsuario = document.getElementById("nombre");

// Si el usuario acepta iniciar sesion, se creara una cookie con el nombre de usuario
// y se imprimira en el elemento "h3", de lo contrario se imprimira un valor por defecto.
if(confirm("Desea iniciar sesion?")) {
    // Crear una fecha de expiración
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + 60000); // 60 segundos
    
    // Crear una cookie con valor, fecha de expiración
    document.cookie = `usuario=Diego; expires=${fecha.toUTCString()}` ;
    
    // Mensaje de alerta
    alert("Sesion iniciada");

    // Obtener la cookie del usuario
    let usuario = document.cookie.split(";").find(cookie => cookie.includes("usuario"));

    // Imprimir la cookie
    nombreUsuario.innerText = usuario.split("=")[1];
}else{
    // Mensaje de alerta
    alert("Sesion no iniciada");

    // Imprimir valor por defecto
    nombreUsuario.innerText = "Usuario";
}


// leer una cookie
let cookies = document.cookie;
console.log(cookies); // Aqui veremos una cadena con todas las cookies que se han creado

cookies = cookies.split(";"); // Aqui convertimos la cadena en un array cortando por el punto y coma
// seguido de un espacio "; "
console.log(cookies); // Aqui veremos un array con todas las cookies que se han creado

// Aqui buscamos una cookie en especifico en este caso la cookie "usuario"
cookieBuscada = cookies.find(cookie => cookie.startsWith(" usuario")); 
console.log(cookieBuscada); // Aqui veremos la cookie que buscamos

// Aqui separamos el nombre de la cookie del valor de la cookie cortando por el signo de igual ""="
cookieBuscada = cookieBuscada.split("=");
console.log(cookieBuscada); // Aqui veremos un array con el nombre de la cookie y el valor de la cookie

// Aqui seleccionamos el valor de la cookie
cookieBuscada = cookieBuscada[1];
console.log(cookieBuscada); // Aqui veremos el valor de la cookie


// // Leyendo una cookie específica
// let cookie = document.cookie.split(";").find(cookie => cookie.includes("nombre"));