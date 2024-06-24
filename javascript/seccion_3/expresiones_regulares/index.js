/*
  Las expresiones regulares
  Son una secuencia de caracteres que forma un patrón de búsqueda,
  principalmente utilizada para la búsqueda de patrones de cadenas de
  caracteres u operaciones de sustituciones.
*/

// Sintaxis
// /patrón/modificadores;
new RegExp('hola', 'i');
const exp1 = /hola/i;

// Ejemplo
let texto = 'Hola Mundo';

console.log(exp1.test(texto)); // true

if(exp1.test(texto)) {
  console.log('Efectivamente la palabra hola existe en el texto');
}

/*
  Modificadores
  i - Insensitive
  g - Global
*/

/*
  Caracteres
  [] - Grupo
  - - Rango
  ^ - Inicio
  {} - Cantidad
  | - O
  $ - Al final de una expresión
  \ - Escape
  d - Números
  w - Caracteres
  s - Espacios en blanco
  . - Cualquier caracter
*/

// Validar un número de teléfono
const exp2 = /^\d{10}$/;
// Otra forma de escribirlo
const exp3 = /^[0-9]{10}$/;
const exp = /^dddd-ddddddd$/; // 1234-1234567
const exp4 = /^\d{4}-\d{7}$/;
const exp5 = /^\+52\d{10}$/; // +521234567890
if(exp5.test('+521234567890')) {
  console.log('Número de teléfono válido');
}
let telefono = 1234567890;
if(exp2.test(telefono)) {
  console.log('Número de teléfono válido');
}

// Validar un correo electrónico
const exp6 = /^\w+@\w+\.\w+$/;
const exp7 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const exp8 = /^\w+@\w+\.\w{2,3}$/;
const exp9 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(exp6.test('hola22@gmail.com')) {
  console.log('Correo electrónico válido');
}

// Validar una contraseña
const exp10 = /^\w{8,}$/;
const exp11 = /^\w{8,}[\d]+$/;
const exp12 = /^\w{8,}[\d]+[\W]+$/;
//Validar una contraseña con al menos una mayúscula, una minúscula, un número y un caracter especial
const exp13 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
if(exp13.test('Hola1234$')) {
  console.log('Contraseña válida');
}

export function regex(id, exp, message){
  let element = document.getElementById(id);
  if(new RegExp(exp).test(element.value)){
    element.style.border = '1px solid green';
    document.getElementById('error').innerHTML = '';
    return true;
  } else {
    element.style.border = '1px solid red';
    document.getElementById('error').innerHTML = message;
    return false;
  }
}