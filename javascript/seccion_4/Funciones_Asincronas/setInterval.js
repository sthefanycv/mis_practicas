/* 
    ¿Qué es setInterval?
    setInterval es una función que se utiliza para ejecutar una función de callback de forma repetida 
    cada cierto tiempo. Es decir, setInterval es una función asíncrona.

    Recibe dos argumentos:
    - La función (de callback) que se ejecutará.
    - El tiempo en milisegundos que debe transcurrir para que se ejecute la función nuevamente.

    Ejemplo:   |         Primer Parametro       || Segundo Parametro |
    setInterval(() => {console.log("Hola Mundo");}, 3000);

    // Esto imprimirá "Hola Mundo" en la consola cada 3 segundos.

    Nota: Para detener la ejecución de setInterval, se debe utilizar la función clearInterval.



    ¿Qué es clearInterval?
    clearInterval es una función que se utiliza para detener la ejecución de setInterval.
    Recibe un argumento:
    - El identificador del intervalo que se desea detener, es decir, la variable que almacena el setInterval.



    Extra:

    ¿Que es el constructor Date?
    El constructor Date se utiliza para crear objetos que representan fechas y horas en JavaScript.
    Se puede utilizar para obtener la fecha y hora actual, así como para establecer fechas y horas específicas.

    Metodos del objeto Date:
    - getTime(): Retorna el tiempo epoch en milisegundos.
    - getMilliseconds(): Retorna los milisegundos.
    - getSeconds(): Retorna los segundos.
    - getMinutes(): Retorna los minutos.
    - getHours(): Retorna las horas.
    - getDay(): Retorna el día de la semana (0-6). Ejemplo: 0 = Domingo, 1 = Lunes, 2 = Martes, etc.
    - getDate(): Retorna el día del mes.
    - getMonth(): Retorna el mes (0-11). Ejemplo: 0 = Enero, 1 = Febrero, 2 = Marzo, etc.
    - getFullYear(): Retorna el año.
    - toLocaleDateString(): Retorna la fecha en formato local.
    - toLocaleTimeString(): Retorna la hora en formato local.
    - toLocaleString(): Retorna la fecha y hora en formato local.
    - toISOString(): Retorna la fecha y hora en formato ISO.
    - toString(): Retorna la fecha y hora en formato de cadena.
    - toDateString(): Retorna la fecha en formato de cadena.
    - setTime(milisegundos): Establece la fecha y hora del objeto Date.
    - setMilliseconds(milisegundos): Establece los milisegundos.
    - setSeconds(segundos): Establece los segundos.
    - setMinutes(minutos): Establece los minutos.
    - setHours(horas): Establece las horas.
    - setDate(dia): Establece el día del mes.
    - setMonth(mes): Establece el mes.
    - setFullYear(año): Establece el año.
    - toUTCString(): Retorna la fecha y hora en formato UTC.



    *** DATO DE INTERES ***
    - El tiempo epoch es el momento en el que se inicia el tiempo en la computadora, es decir, el 1 de enero de 1970.
    Este tiempo se mide en milisegundos y se basa en la el numero maximo que se puede representar con 32 bits.

    Esto da origen al denominado problema del año 2k38 (2038), que es similar al problema del año 2k, específicamente
    el 19 de enero de 2038 a las 03:14:07 UTC, en el que el tiempo epoch llegará a su límite y se reiniciará a 0.
*/


const botonInterval = document.getElementById("btn2");
const botonDetenerInterval = document.getElementById("btn3");

let cronometro;

function contarConInterval(){ 
    cronometro = setInterval(() => {
        // Se instancia un objeto de tipo Date para obtener la información de la fecha y hora actual.
        const horaActual = new Date();
        document.getElementById('span1').innerText = horaActual.getTime();
    }, 10);
};

function detenerInterval(){
    // Para detener la ejecución de setInterval, se debe utilizar la función clearInterval y hacer referencia
    // al intervalo que se desea detener, es decir la variable que almacena el setInterval.
    clearInterval(cronometro);
};

botonInterval.addEventListener("click", contarConInterval);
botonDetenerInterval.addEventListener("click", detenerInterval);