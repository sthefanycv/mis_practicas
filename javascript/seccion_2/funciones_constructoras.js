/*
    Funcion Constructora: 
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinida(plantilla)

    las funciones constructoras son la forma más antigua de crear objetos en JavaScript. 
    Se definen utilizando la palabra clave "function" seguida del nombre de la función.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia. 
    Dentro de la función, se asignan valores a las propiedades del objeto instanciado utilizando "this".

    ¿Que es una instancia?
    Una instancia es un objeto que se crea a partir de una función constructora, es decir,
    un objeto basado en una plantilla.

    Por que se definen con la primera letra en mayuscula?
    Por convencion, las funciones constructoras se definen con la primera letra en mayuscula,
    esto para diferenciarlas de las funciones normales.

*/


// Ejemplo 1
function Usuario(nombre, apellido, email, telefono, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.edad = edad;
};

const cristobal = new Usuario('Cristobal', 'Cabello', 'cristobal@gmail.com', '5691234567', 18);
const paul = new Usuario('Paul', 'Rodriguez', 'paul@gmail.com', '4121234567', 30);
const mayra = new Usuario('Mayra', 'Carache', 'mayra@gmail.com', '4242345678', 24);


console.log(cristobal);
console.log(paul);
console.log(mayra);






//Ejemplo 2
function Persona(nombre, edad, sexo, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.pais = pais;

    this.saludar = function () {
        return (`Hola, me llamo ${nombre}, tengo ${edad} años, y vivo en ${pais}`);
    }
}

let diego = new Persona("Diego", 30, "Masculino", "Venezuela");
let daniela = new Persona("Daniela", 27, "Femenino", "España");
let marcos = new Persona("Marcos", 25, "Masculino", "E.E.U.U.");

console.log(diego.saludar());
console.log(daniela.saludar());
console.log(marcos.saludar());





// Ejemplo proporcionado por Jose Gonzales
function Producto(nombre, precio, color, talla) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.talla = talla;

    this.agregarCarrito = function (cart) {
        cart.push(this);
    };
}

// Crear productos
const camiseta = new Producto("Camiseta básica", 20, "blanco", "M");
const pantalon = new Producto("Jeans rotos", 50, "azul", "32");
const zapatos = new Producto("Zapatillas deportivas", 80, "negro", "42");
const reloj = new Producto('Reloj', 200, 'Cromado', 'L')

// Agregar productos al carrito
const carrito = [];
camiseta.agregarCarrito(carrito);
pantalon.agregarCarrito(carrito);
zapatos.agregarCarrito(carrito);
reloj.agregarCarrito(carrito);

// Mostrar información del carrito
console.log("Carrito de compras:");
for (const elemento of carrito) {
    console.log(`\n${ elemento.nombre }: ${ elemento.precio }`);
}


console.log(carrito);