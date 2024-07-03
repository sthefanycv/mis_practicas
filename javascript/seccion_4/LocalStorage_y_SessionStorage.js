/*
    ¿Que es LocalStorage?
    localStorage es una forma de almacenamiento que permite a una aplicación web guardar datos de 
    manera PERSISTENTE en el navegador del usuario. 
    
    Los datos almacenados en localStorage persisten incluso después de que el usuario cierre la ventana del navegador 
    o se apague la computadora.


    Conceptos Importantes
    
    - Límite de Almacenamiento: localStorage proporciona aproximadamente 5MB (5.242.880 bytes) de almacenamiento por dominio. 
    Exceder este límite puede lanzar excepciones de cuota de almacenamiento.

    - Alcance de Dominio: Los datos almacenados en localStorage son específicos para un dominio y un protocolo. 
    a que el protocolo no es el mismo.    Por ejemplo, los datos almacenados en http://mipagina.com NO serán accesibles desde https://mipagina.com debido



    Medotos Importantes

    - setItem(key, value): Agrega un nuevo par clave-valor(tupla) al almacenamiento local.
        NOTA: Es importante saber que si se almacena una variable con el mismo nombre 2 o mas veces,
        se sobreescribira el valor anterior, y perderemos la informacion previa de manera permanente.
    - getItem(key): Obtiene el valor asociado con la clave especificada.
    - removeItem(key): Elimina el par clave-valor asociado con la clave especificada.
    - clear(): Elimina todos los pares clave-valor del almacenamiento local.
*/

// JSON.parse(json): Convierte un string JSON en un objeto JavaScript.
// JSON.stringify(objeto): Convierte un objeto JavaScript en un string JSON.


// Guardar datos

// Ejemplo 1: Guardar datos

// String que queremos guardar
// localStorage.setItem("nombre", "Diego");

// Numero que queremos guardar
// localStorage.setItem("numero", 10);


// Objeto que queremos guardar
const usuario = {
    nombre: "Diego", 
    edad: 25, 
    pais: "España"
};

// localStorage.setItem("persona", JSON.stringify(usuario));



// Array que queremos guardar
const edades = [28, 25, 30, 35, 40];

// localStorage.setItem("edades", JSON.stringify(edades));


// Array de objetos que queremos guardar
const usuarios = [
    {nombre: "Luis", edad: 25, pais: "Italia", rol: "Usuario"},
    {nombre: "Guillermo", edad: 15, pais: "Francia", rol: "Usuario"},
    {nombre: "Carlos", edad: 35, pais: "Alemania", rol: "Usuario"},
    {nombre: "Diego", edad: 25, pais: "España", rol: "Admin"},
    {nombre: "Cristobal", edad: 22, pais: "Chile", rol: "Usuario"},
];

// localStorage.setItem("usuarios", JSON.stringify(usuarios));




// Ejemplo 2: Obtener un objeto

// Obtenemos el array de objetos almacenado en localStorage
// const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
// console.log(usuariosGuardados);

// En este ejemplo evaluaremos los roles de los usuarios para extraer el nombre del admin.
// const nombreAdmin = usuariosGuardados.find((usuario)=> usuario.rol === "Admin").nombre;


// Imprimimos el nombre del admin en el DOM
// document.getElementById("usuarioNombre").innerText = nombreAdmin;






// Ejemplo 3: Eliminar un dato
// localStorage.removeItem("nombre");
// localStorage.removeItem("numero");
// localStorage.removeItem("persona");
// localStorage.removeItem("edades");



// Ejemplo 4: Vaciar el localStorage
// Borramos el localStorage mediante un evento de tipo click
document.getElementById("vaciarLS").addEventListener("click", ()=>{
    localStorage.clear();
    console.log("LocalStorage vaciado");
});







/*
    ¿Que es sessionStorage?
    sessionStorage es similar a localStorage en términos de API y uso, 
    pero con una diferencia fundamental: 

    los datos almacenados en sessionStorage tienen un tiempo de vida LIMITADO
    y están disponibles SOLAMENTE durante la sesión del navegador. 
    Cuando el usuario cierra la ventana o pestaña del navegador, los datos 
    almacenados en sessionStorage se eliminan automaticamente.

    Los metodos de sessionStorage son los mismos que localStorage.
*/


// Guardar datos
document.getElementById("sessionStorage").addEventListener("click", ()=>{sessionStorage.setItem("Nombre2", "Diego 2");});

// Obtener datos
// let nombreSession = sessionStorage.getItem("Nombre2");

// console.log(nombreSession); // Diego 2

// Eliminar datos
// sessionStorage.removeItem("Nombre");

// Vaciar el sessionStorage
// sessionStorage.clear();





// Ejemplo 5: Iniciar Sesion con informacion previamente guardada en el localStorage.
const usuarios2 = [
    {id: 1, nombre: "Luis", email: "luis@gmail.com", clave: "tbl123.", usuario: "thebetterluis"},
    {id: 2, nombre: "Diego", email: "diego@mail.com", clave: "diego456.", usuario: "haonter"},
    {id: 3, nombre: "Guillermo", email: "guillermo@gmail.com", clave: "guille789.", usuario: "nufort15"},
    {id: 4, nombre: "William", email: "william@gmail.com", clave: "algo.321", usuario: "will"},
];

// Guardamos los usuarios en el localStorage
localStorage.setItem("usuarios2", JSON.stringify(usuarios2));


// Agregamos un evento al boton de iniciar sesion que ejecutara la funcion iniciarSesion
document.getElementById("btnLogin").addEventListener("click", iniciarSesion);

function iniciarSesion(){
    // Se extraen los values de los imputs del formulario
    const inputUsuario = document.getElementById("usuario").value;
    const inputClave = document.getElementById("clave").value;

    // Validamos que los inputs no esten vacios
    if(inputUsuario === "" || inputClave === ""){
        alert("Por favor rellena todos los campos");
        return;
    }else{
        // Extraemos los usuarios del localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios2"));

        // Iteramos sobre el array para buscar si el el usuario y la clave de alguna persona coincide con los datos ingresados.
        const usuarioEncontrado = usuariosGuardados.find((usuario)=> usuario.usuario === inputUsuario && usuario.clave === inputClave);
        
        // Si el usuario no existe, mostramos un mensaje al usuario
        if(usuarioEncontrado === undefined){
            alert("Usuario o clave incorrecta");
        }else{
            localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
            
            // Colocamos los cados del usuario actualizado en el DOM
            document.getElementById("usuarioNombre").innerText = usuarioEncontrado.nombre;
        };
    }
};

if(JSON.parse(localStorage.getItem("usuarioActivo")) != undefined){
    document.getElementById("usuarioNombre").innerText = JSON.parse(localStorage.getItem("usuarioActivo")).nombre;
}else{
    document.getElementById("usuarioNombre").innerText = "visitante";
};


// Ejercicio, realiza la logica del boton de cerrar sesion para que elimine del localStorage la key "usuarioActivo"
// y recargue la pagina para que el usuario vuelva a ser "visitante".
// Para recargar la pagina puedes usar window.location.reload(); o location.reload();