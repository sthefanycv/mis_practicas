/* 
    Async-Await es en escencia lo mismo que las promesas, azucar sintactica, es decir es una manera
    mas facil de interpretar las promesas, sin dejar de ser un proceso asincronico.

    la palabra async se coloca antes de una funcion para que esta retorne una promesa,
    es decir, una funcion se puede convertir en una funcion asincrona si se le agrega
    la palabra async antes de la palabra function.
    - Ejemplo: async function miFuncion(){ ... };

    la palabra await se coloca antes de una promesa para que esta espere a que la promesa se resuelva
    o se rechace.
    - Ejemplo: async function miFuncion(){ let resultado = await promesa; };
*/


// Ejemplo 1:

// Creamos una variable que contenga un array de objetos, donde cada objeto es un usuario
// que contiene id, nombre, apellido, sexo y edad, foto(URL).

const usuarios = [
    {
        id: 1,
        nombre: "Guillermo",
        apellido: "Gonzalez",
        sexo: "Masculino",
        edad: 25,
        foto: "https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
    },{
        id: 2,
        nombre: "Victor",
        apellido: "Hernandez",
        sexo: "Masculino",
        edad: 17,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Desktop_Acerca_De_Covalto_V1_79ce51b800.webp"
    },{
        id: 3,
        nombre: "Edward",
        apellido: "Ventura",
        sexo: "Masculino",
        edad: 24,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Invierte_Ahora_V4_3e5c745c7d.webp"
    },{
        id: 4,
        nombre: "Luis",
        apellido: "Tarifa",
        sexo: "Masculino",
        edad: 20,
        foto: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Pagare_Lealtad_V2_4c1bb0820b.jpg"
    },{
        id: 5,
        nombre: "Ana",
        apellido: "Lopez",
        sexo: "Femenino",
        edad: 22,
        foto: "https://www.mundopsicologos.com/site/article/62173/52366/13-habitos-que-te-ayudaran-a-ser-una-persona-mas-feliz-0_ai1.jpg"
    },{
        id: 6,
        nombre: "Luisa",
        apellido: "Gomez",
        sexo: "Femenino",
        edad: 18,
        foto: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    },{
        id: 7,
        nombre: "Mayra",
        apellido: "Perez",
        sexo: "Femenino",
        edad: 30,
        foto: "https://www.mundopsicologos.com/site/article/62173/52366/13-habitos-que-te-ayudaran-a-ser-una-persona-mas-feliz-0_ai1.jpg"
    },{
        id: 8,
        nombre: "Susana",
        apellido: "Garcia",
        sexo: "Masculino",
        edad: 29,
        foto: "https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg"
    },{
        id: 9,
        nombre: "Carla",
        apellido: "Gonzalez",
        sexo: "Masculino",
        edad: 27,
        foto: "https://www.mundopsicologos.com/site/article/62173/52366/13-habitos-que-te-ayudaran-a-ser-una-persona-mas-feliz-0_ai1.jpg"
    }
];



// Creamos una promesa, la cual se resuelve si el array de usuarios
// tiene menos de 11 usuarios, en caso contrario se rechaza la promesa.

// Si el array de usuarios tiene menos de 11 usuarios, se recorre el array de usuarios y se almacena
// el nombre y foto de cada usuario en un array llamado misDatos, luego se resuelve la promesa con un mensaje


const miPromesa = new Promise((resolve, reject)=>{
    let misDatos = []; //Nuevo array para almacenar los datos
    // console.log("Se esta resolviendo la promesa...");
    if(usuarios.length < 11){
        setTimeout(()=>{
            usuarios.forEach(usuario => {
                misDatos.push(
                    {
                        nombre: usuario.nombre,
                        foto: usuario.foto
                    }
                );
            });
            // console.log("Promesa resuelta");
            resolve(misDatos); // Aqui retornamos el array con los datos de los usuarios cuando se resuelve la promesa.
        },3500);
    }else{
        // console.log("Promesa rechazada");
        reject("No se cumple la promesa porque hay mas de 10 usuarios");
    };
});


// Para poder ver los datos que se resuelven en la promesa, debemos ejecutar la funcion asincrona
// y almacenar el resultado en una variable, luego imprimir la variable.

// obtenerUsuarios()
//     .then((resultado)=> {
//         console.log(resultado);
//     })
//     .catch((error)=> {
//         console.log(error);
//     })
//     .finally(()=> {
//         console.log("Proceso finalizado");
//     });

// Esto seria el manejo de una promesa con los metodos que la misma proporciona, pero tambien se puede
// utilizar async-await para manejar las promesas de una manera mas facil de entender.




// Ejemplo 2:
// Esta funcion utiliza async-await para esperar a que la promesa se resuelva para continuar con el codigo
// en caso de que la promesa se resuelva, se imprime una cuadricula con los datos recibidos, en caso contrario
// se imprime un mensaje de error.

async function buscarDatos(){
    // Se abre un bloque try-catch para manejar los errores(excepciones) que se puedan presentar.
    try{
        // Esperamos a que la promesa se resuelva
        const datosObtenidos = await miPromesa;

        const cuadricula = document.getElementById("usuarios");
        datosObtenidos.forEach(usuario => {
            cuadricula.innerHTML += `
                <div class="border border-solid rounded-lg border-black hover:shadow-lg flex flex-col gap-2 items-center p-2">
                    <img class="w-64 rounded-lg" src="${usuario.foto}" alt="Foto de ${usuario.nombre}">
                    <h3>${usuario.nombre}</h3>
                </div> 
            `;
            //Cargamos este div por ada usuario usando inner html
        });
    }catch(error){
        console.log(error);
    };
};

buscarDatos();




/*  Ejercicio para realizar en casa:
    
    Crear un array de objetos que contenga los datos de 20 productos, donde cada producto tenga
    un id, nombre, precio, descripcion y foto(URL).

    Crear una promesa que se resuelva cuando se presione un boton, que diga "Mostrar Productos",
    La promesa se recuelve despues de 2.5s y se rechaza si el array de productos tiene mas de 20 productos.

    Crear una funcion asincrona (buscarProductos) que espere a que la promesa se resuelva, en caso de que se resuelva
    imprimir una cuadricula con los datos de los productos, en caso contrario imprimir un mensaje de error.

    Crear un boton que al ser presionado ejecute la funcion asincrona buscarProductos.

    Extra: desactiva el boton despues de que se presione para que no vuelva a buscar los productos.
*/
