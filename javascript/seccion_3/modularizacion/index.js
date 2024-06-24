/*
    En este archivo vamos a utilizar las funciones de la libreria que acabamos de crear "LexpinMath.js"
*/


// Para importar un módulo, se utiliza la palabra reservada import seguida del nombre lo que se desea importar y la ruta del archivo.
import {sumar, restar, dividir, multiplicar, potenciar, tablaMultiplicar, promedioArray} from './lexpinMath.js';

// Añadimos la escucha de evento keydown para las teclas de flecha arriba y abajo que permitiran mover 
// las flechas de la lista de navegación.
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        for (let i = 1; i <= 9; i++) {
            if (document.getElementById(`flecha-${i}`).innerText === '➤') {
                document.getElementById(`flecha-${i}`).innerText = '';
                document.getElementById(`flecha-${i === 1 ? 9 : i - 1}`).innerText = '➤';
                break;
            }
        }
    } else if (event.code === 'ArrowDown') {
        for (let i = 1; i <= 9; i++) {
            if (document.getElementById(`flecha-${i}`).innerText === '➤') {
                document.getElementById(`flecha-${i}`).innerText = '';
                document.getElementById(`flecha-${i === 9 ? 1 : i + 1}`).innerText = '➤';
                break;
            }
        }
    }

    if(event.code === 'Enter'){
        // Llamamos a la función correspondiente según la opción seleccionada y mostramos el contenedor correspondiente.
        let menu = document.getElementById('menu');
        if(document.getElementById('flecha-1').innerText === '➤'){
            menu.classList.add('hidden');
            document.getElementById('primeras5').classList.remove('hidden');
            document.getElementById('titulo1').innerText = 'Sumar';
            document.getElementById('operar1').innerText = 'Sumar';
            // Se agrega un evento de tipo click al boton operar1 que ejecutara la función sumar y mostrara el resultado 
            // en el contenedor resultado1. La funcion sumar viene de nuestra libreria.
            document.getElementById('operar1').addEventListener('click', () => {
                let a = document.getElementById('numero1').value;
                let b = document.getElementById('numero2').value;
                document.getElementById('resultado1').innerText = `La suma de ${a} y ${b} es ${sumar(a, b)}`;
            });
        }else if(document.getElementById('flecha-2').innerText === '➤'){
            menu.classList.add('hidden');
            document.getElementById('primeras5').classList.remove('hidden');
            document.getElementById('titulo1').innerText = 'Restar';
            document.getElementById('operar1').innerText = 'Restar';
            document.getElementById('operar1').addEventListener('click', () => {
                let a = document.getElementById('numero1').value;
                let b = document.getElementById('numero2').value;
                document.getElementById('resultado1').innerText = `La resta de ${a} y ${b} es ${restar(a, b)}`;
            });
        }else if(document.getElementById('flecha-3').innerText === '➤'){
            menu.classList.add('hidden');
            document.getElementById('primeras5').classList.remove('hidden');
            document.getElementById('titulo1').innerText = 'Dividir';
            document.getElementById('operar1').innerText = 'Dividir';
            document.getElementById('operar1').addEventListener('click', () => {
                let a = document.getElementById('numero1').value;
                let b = document.getElementById('numero2').value;
                document.getElementById('resultado1').innerText = `La división de ${a} y ${b} es ${dividir(a, b)}`;
            });
        }else if(document.getElementById('flecha-4').innerText === '➤'){
            menu.classList.add('hidden');
            document.getElementById('primeras5').classList.remove('hidden');
            document.getElementById('titulo1').innerText = 'Multiplicar';
            document.getElementById('operar1').innerText = 'Multiplicar';
            document.getElementById('operar1').addEventListener('click', () => {
                let a = document.getElementById('numero1').value;
                let b = document.getElementById('numero2').value;
                document.getElementById('resultado1').innerText = `La multiplicación de ${a} y ${b} es ${multiplicar(a, b)}`;
            });
        }else if(document.getElementById('flecha-5').innerText === '➤'){
            menu.classList.add('hidden');
            document.getElementById('primeras5').classList.remove('hidden');
            document.getElementById('titulo1').innerText = 'Potenciar';
            document.getElementById('operar1').innerText = 'Potenciar';
            document.getElementById('operar1').addEventListener('click', () => {
                let a = document.getElementById('numero1').value;
                let b = document.getElementById('numero2').value;
                document.getElementById('resultado1').innerText = `${a} elevado a la ${b} es ${potenciar(a, b)}`;
            });
        }else if(document.getElementById('flecha-6').innerText === '➤'){
            menu.classList.add('hidden');
            document.getElementById('tablaMultiplicar').classList.remove('hidden');
            document.getElementById('operar2').addEventListener('click', () => {
                let a = document.getElementById('numeroTabla').value;
                document.getElementById('resultado2').innerText = tablaMultiplicar(a);
            });
        }else if(document.getElementById('flecha-7').innerText === '➤'){
            const array = [];
            menu.classList.add('hidden');
            document.getElementById('promedio').classList.remove('hidden');
            document.getElementById('operar3').addEventListener('click', () => {
                array.push(+document.getElementById('operando').value);
                document.getElementById('operandos').innerText = `Los números ingresados son: ${array}`;
                document.getElementById('operando').value = '';
            });
            document.getElementById('operar4').addEventListener('click', () => {
                document.getElementById('resultado3').innerText = `El promedio de los números ingresados es ${promedioArray(array)}`;
            });
        }
    };
});




// Ejercicio para realizar en casa:
//  Terminar las operaciones para validar si un numero es par o impar
//  Agragar el boton de volver al menu en cada operacion
//  Agregar una operacion personalizada (Puedes hacer la funcion el el archivo LexpinMath.js y llamarla desde aqui)