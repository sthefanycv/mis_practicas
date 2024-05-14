/*
    Iniciemos con un ejemplo:

    Hay una fiesta de niños y una caja de juguetes.

    Si el niño de la casa donde se realiza la fiesta tiene la caja de juguetes en su habitación, 
    solo las personas que en su habitación podrán jugar con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope local en la fiesta.

    Pero si el niño lleva la caja de juguetes al patio, todos los niños presentes podrán jugar 
    con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope global en la fiesta.

    Para resumir, el scope local se refiere a algo que solo se puede acceder en un lugar específico, 
    como la habitación del niño, mientras que el scope global se refiere a algo que se puede acceder
    desde otros lugares, como el patio con otros niños.

*/



// Ejemplo 1

let numero = 10; //Variables externas
let numero2 = 20;

function sumar(){
    let numero = 5;
    let numero2 = 10;

    return numero + numero2;
}

console.log(sumar());
console.log(numero + numero2);





// Ejemplo 2: En este ejemplo se usa anidamiento/nesting de funciones y se muestra el scope de cada una de ellas.

//SCOPE SUPER GLOBAL
let nombre = "Diego"; 
let apellido = "Gomez";

//PRIMERA FUNCION - PRIMER SCOPE 
function saludar(){ 

    let apellido = "Rodriguez";


//SEGUNDA FUNCION - SEGUNGO SCOPE
    function saludar2(){ 
        let rol = "Profesor";

        console.log(rol);//LLAMA LA SEGUNDA FUNCION
        console.log(apellido); //LLAMA LA PRIMERA FUNCION
        console.log(nombre);// LLAMA LA SCOPE SUPER GLOBAL
    } 
    // FIN DE LA SEGUNDA FUNCION - SEGUNDO SCOPE
    
    saludar2(); //lLAMA LA SEGUNDA FUNCION 

    //CARGA LAS VARIABLES DEL SCOPE SUPER GLOBAL 
    console.log(apellido);
    console.log(nombre);

    // console.log(rol)    // AQUI INTENTA LLAMAR LA VARIABLE  PERO NO SE PUEDE PORQUE ESTA DENTRO DEL SEGUNDO SCOPE O SEGUNDA FUNCION
    // La variable "rol" no es accesible debido a que se encuentra en 
    // un scope inferior al de la función saludar.
}

//AQUI YA ESTAMOS DENTRO DEL SUPER SCOPE GLOBAL, POR LO QUE NO PODEMOS LLAMAR A NINFUNA VARIABKE O FUNCION DEL PRIMERO O SEGUNDO SCOPE 
saludar();

// La funcion saludar2 no es accesible debido a que se encuentra en
// un scope inferior al scope actual.
// saludar2();


console.log(nombre);
console.log(apellido);



