/*
    ¿Que es la desestructuración?
    La desestructuración es una tecnica que simplifica la extracción de valores de un objeto o un array.
*/

// Objeto simple
const persona = {
    nombre: "Diego",
    edad: 30,
    pais: "Venezuela",
    profesion: "Desarrollador",
    salario: 1000,
    telefono: "1234567890",
    email: "diego@mail.com",
    direccion: {
        calle: "Calle 1",
        ciudad: "Caracas",
        estado: "Distrito Capital"
    }
};


// Desestructuración de objetos
const {nombre, telefono, direccion} = persona;
const {calle, ciudad, estado} = direccion;

console.log(`El nombre de la persona es: ${nombre}`);
console.log(`El telefono de la persona es: ${telefono}`);
console.log(`La ciudad de la persona es: ${ciudad}`);







// Array de objetos
const usuarios = [
    {nick: "William", edad: 25, pais: "Colombia", profesion: "Diseñador"},
    {nick: "Ana", edad: 35, pais: "Argentina", profesion: "Ingeniera"},
    {nick: "Carlos", edad: 40, pais: "Mexico", profesion: "Contador"},
    {nick: "Mayra", edad: 28, pais: "Peru", profesion: "Abogada"},
    {nick: "Luis", edad: 22, pais: "Chile", profesion: "Estudiante"},
];

const [usuario1, usuario2, usuario3, usuario4, usuario5] = usuarios;
const {nick, pais} = usuario3;

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);

console.log(`El nickName del usuario es: ${nick}`);
console.log(`El pais del usuario es: ${pais}`);