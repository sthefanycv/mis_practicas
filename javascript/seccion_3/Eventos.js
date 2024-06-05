/*
    ¿Qué son Eventos?
    Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes y define el 
    comportamiento de la página cuando estos se produzcan. 

    Cuando un usuario visita una página web e interactúa con ella se producen los eventos y con Javascript podemos 
    definir qué queremos que ocurra cuando se produzcan los eventos.

    Para entender los eventos es necesario conocer algunos conceptos básicos:

    •	Evento: Es algo que ocurre. Generalmente los eventos ocurren cuando el usuario interactúa con el 
        documento, pero podrían producirse por situaciones ajenas al usuario, como el caso en el que una 
        imagen no este disponible. // Es algo que ocurre es como el disenio de una interfaz

    •	Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón o
        el envío de un formulario. Cada tipo de elemento de la página ofrece diversos tipos de eventos de JavaScript. 

    •	Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta a un 
        evento. Se especifica mediante una función, que se asocia a un tipo de evento en concreto. 
        Una vez asociado el manejador a un tipo de evento sobre un elemento de la página, y cada vez que 
        ocurre ese tipo de evento sobre ese elemento en concreto, se ejecutará el manejador de evento asociado.
    
    Formas de manejar eventos:

    •	Mediante atributos HTML: <button onClick="miFuncion ()">Presiona Aquí!</button>

    •	Mediante propiedades JavaScript: elemento.onClick = miFuncion (){ …código… }

    •	Mediante addEventListener():  la forma más recomendable es hacer uso del método .addEventListener(), 
        el cuál es mucho más potente y versatil para la mayoría de los casos.

    Con el método .addEventListener() podemos añadir una escucha del evento indicado en el primer parámetro, 
    y en el caso de que ocurra, se ejecutará la función asociada indicada en el segundo parámetro. Se puede quitar y agregar eventos con esta opcion
*/


// Esta funcion se ejecuta cuando el usuario desencadena el evento click en el boton con el id "boton1",
// mediante manejo de eventos por Atributos HTML
function saludar(){
    alert('Hola mundo - evento onClick');
};

function saludar2(){
    alert('Hola mundo 2 - evento onMouseOver');
};



// Eventos con addEventListener
// Seleccionamos el boton con el id "boton3"
const boton3 = document.getElementById('boton3');

let evento1 = ()=>{ //Funcion de flecha
    document.getElementById('parrafo').innerText = "Se ejecuto el evento click";
}
let evento2 = ()=>{
    document.getElementById('parrafo').innerText = "Hola, estas aprendiendo JavaScript.";
}

//                      tipo Evento, funcion a ejecutar
boton3.addEventListener('mousedown', evento1); //Al dar click le ejecuta el evento 1
boton3.addEventListener('mouseup', evento2); //Al quitar el click le ejecuta el evento 2



// Ejemplo usando eventos de propiedades JavaScript
const botonTema = document.getElementById('boton2');
botonTema.onclick = ()=>{
    // Validamos si el body tiene la clase "from-yellow-400", es decir, si el tema actual es el tema amarillo
    if(document.body.classList.contains("from-yellow-400")){
        // De ser asi lo cambiamos a tema verde
        document.body.classList.remove("from-yellow-400");
        document.body.classList.remove("to-yellow-900");
        
        document.body.classList.add("from-green-400");
        document.body.classList.add("to-green-900");

        boton3.removeEventListener('mousedown', evento1);
        boton3.removeEventListener('mouseup', evento2); 

        /* ESTO SE LEE: Si el elemento tiene la clase "from-yellow-400", quitame el amarillo y agrega "from-green-400" (document.body.classList.add("from-green-400");) y al dar click, ejecuta el evemto 1  
        
        evento 1: let evento1 = ()=>{ //Funcion de flecha
    document.getElementById('parrafo').innerText = "Se ejecuto el evento click";

    y al quitar el click, ejecuta el evento 2

    let evento2 = ()=>{
    document.getElementById('parrafo').innerText = "Hola, estas aprendiendo JavaScript.";
}
        */

    }else{
        // De se lo contrario lo cambiamos a tema amarillo
        document.body.classList.remove("from-green-400");
        document.body.classList.remove("to-green-900");
        
        document.body.classList.add("from-yellow-400");
        document.body.classList.add("to-yellow-900");

        boton3.addEventListener('mousedown', evento1);
        boton3.addEventListener('mouseup', evento2); 
    }
};

      //ESTO SE LEE: esto se lee, luego si esta activado el tema verde, cambia alamariillo en forma de reversa

/* 
    Esta es una lista de algunos de los eventos mas usados mediante el uso de propiedades JavaScrip y Atributos HTML:
        - onclick: ocurre cuando el usuario hace clic sobre el elemento.
        - ondblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
        - onmousedown: ocurre cuando el usuario presiona el botón del ratón en un elemento.
        - onmouseup: ocurre cuando el usuario libera el botón pulsado del ratón sobre un elemento.
        - onmouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
        - onmouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
        - onmousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.
        - onkeydown: ocurre cuando el usuario presiona una tecla.
        - onkeypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
        - onkeyup: ocurre cuando el usuario libera la tecla.
        - onchange: ocurre cuando el valor de un elemento cambia.
        - onfocus: ocurre cuando el elemento gana el foco.
        - onblur: ocurre cuando el elemento pierde el foco.
        - onsubmit: ocurre cuando el usuario envía un formulario.
    
    
    Esta es una lista de algunos de los eventos mas usados con el método .addEventListener():
        - focus: ocurre cuando el elemento gana el foco.
        - blur: Cuando el elemento pierde el foco.
        - click: ocurre cuando el usuario hace clic sobre el elemento.
        - dblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
        - mousedown: ocurre cuando el usuario presiona (y mantiene) el botón del ratón en un elemento.
        - mouseup: ocurre cuando el usuario libera el (levanta el dedo del) botón pulsado del ratón sobre un elemento.
        - mouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
        - mouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
        - mousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.
        - keydown: ocurre cuando el usuario presiona una tecla.
        - keypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
        - keyup: ocurre cuando el usuario libera la tecla.
        - change: ocurre cuando el valor de un elemento cambia.
        - submit: ocurre cuando el usuario envía un formulario.
        - scroll: ocurre cuando el usuario desplaza la barra de desplazamiento de un elemento.
*/



// Ejemplo capturando y mostrando valores de inputs
const botonRegistrar = document.getElementById('registro');

botonRegistrar.addEventListener('click', ()=>{
    // Capturamos los valores de los inputs
    let nombre = document.getElementById('nombre').value;
    let clave = document.getElementById('clave').value;

    // Mostramos los valores en un alert
    console.log(`El valor del input nombre es: ${nombre}\nEl valor del input clave es: ${clave}`);
});


let inputRango = document.getElementById('rango');
inputRango.addEventListener('change', ()=>{
    console.log(`El valor del input rango es: ${inputRango.value}`);
});


let inputNumero = document.getElementById('numero');
inputNumero.addEventListener('focus', ()=>{ //Focus cuando el Mouse esta selecionando para escribir en el inpunt
    console.log(`Se gano el foco`);
});
inputNumero.addEventListener('blur', ()=>{
    console.log(`Se perdio el foco`);
});
inputNumero.addEventListener('change', ()=>{ //Change aparece cuando se cambia el valor
    console.log(`El valor del input numero es: ${inputNumero.value}`);
});



// Ejemplo cambiando los colores del degradado de fondo con 2 inputs de tipo color
let inputColor1 = document.getElementById('color1');
let inputColor2 = document.getElementById('color2');

inputColor1.addEventListener('change', ()=>{
    console.log(inputColor1.value)
    document.body.classList.remove("from-yellow-400");
    document.body.classList.add(`from-[${inputColor1.value}]`)
});

inputColor2.addEventListener('change', ()=>{
    console.log(inputColor2.value)
    document.body.classList.remove("to-yellow-900");
    document.body.classList.add(`to-[${inputColor2.value}]`)
});
