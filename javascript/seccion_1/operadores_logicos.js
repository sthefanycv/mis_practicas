/* 
    ¿Que son los operadores lógicos?
    Los operadores lógicos son simbolos que se utilizan para realizar operaciones lógicas entre 
    dos valores, estos operadores devuelven un valor booleano(true o false).

    Existen tres operadores lógicos en JavaScript:
    - AND (&&): Devuelve true si ambos valores son verdaderos.
    - OR (||): Devuelve true si al menos uno de los valores es verdadero.
    - NOT (!): Devuelve true si el valor es falso y false si el valor es verdadero, es decir, devuelve el valor contrario.

*/



//   AND (&&): devuelve true si AMBOS operandos son true;
//  de lo contrario, devuelve false.

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && (4==4));
console.log('uno' && 'dos');
console.log(false && 'uno');
console.log('uno' && false);
console.log('uno' && true);
console.log((4 == "4") && (30 === 15*2));

//  OR (||): devuelve true si AL MENOS UNO de los operandos es true
//  de lo contrario, devuelve false. 
//Cuando este detecta valores no booleanos, retorna el primer valor


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('uno' || 'dos');
console.log(false || 'uno');
console.log('uno' || false);
console.log(null || true);
console.log(true || "uno");
console.log((4 == "4") || (30 === 15*2));
console.log((7.5*2 == "15") || ("50" * 2 == "100"));
console.log(("130" === 1 + "30") || (true));


// Ejemplo, simulacion de un login usando operador logico OR (||), AND (&&) y el operador de igualdad estricta (===).

// Estas variables simulan los datos guardados en una base de datos.
const usuario = 'elProfe';
const correo = 'elprofe@mail.com'
const password = 'elProfe123';


// Estas variables simulan los datos ingresados por el usuario en un formulario.
const usuarioIngresado = prompt("Ingresa tu usuario o correo");
const passwordIngresado = prompt("Ingresa tu contraseña");

// Si el usuario o correo y la contraseña son correctos, se muestra un mensaje que indica true o false si los datos no son correctos.
alert(((usuario === usuarioIngresado) || (correo === usuarioIngresado)) && (password === passwordIngresado));




//  NOT ! : Devuelve false si su ÚNICO operando se puede convertir a true. 
//  de lo contrario, devuelve true.
!false; // true
!true; // false
!0;    // true
!1;    // false
