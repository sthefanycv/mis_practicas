const botonIngresar = document.getElementById('ingresar');

const regexCorreo = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,13}$/; //Los numeros al final indican que se permiten carcaters desde 8 hasta 13 caracteres
const regexClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[._#/,:])[a-zA-Z0-9._#/,:]{8,32}$/ //Se permiten minimo 8 carcateres hasta 32 caracteres



botonIngresar.addEventListener('click', () => {
    const correo = document.getElementById('correo');
    const clave = document.getElementById('clave');

    //aqui decimos que si la clave y correo esta bien, nos lleva el home, sino pasa lo que esta debajo


    if(regexClave.test(clave.value) && regexCorreo.test(correo.value)){
        window.location.href = "./Home.html"; //aqui decimos que si la clave y correo esta bien, nos lleva el home, sino pasa lo que esta debajo
    }else{
        // Validacion para el input del correo
        if (!regexCorreo.test(correo.value)) { // este indica que si el correo es diferente, pasara esto de abajo 
            correo.classList.remove("border-green-600");
            correo.classList.add("border", "border-red-600", "border-solid", "animate__animated", "animate__tada");
            setTimeout(() => { //Indica a que espera unos segundos y luego hace la accion de remover ciertos estilos y se sacuda de acuerdo a la animacion
                correo.classList.remove('animate__animated', 'animate__tada');
            },800); //800 segundos 
        }else{
            correo.classList.remove("border-red-600"); 
            correo.classList.add("border", "border-green-600", "border-solid");
        }
    
        // Validacion para el input de la clave. para las validaciones, hay que estar pendiende de negar el este con (!)
        if (!regexClave.test(clave.value)) {
            clave.classList.remove("border-green-600");
            clave.classList.add("border", "border-red-600", "border-solid", "animate__animated", "animate__tada");
            setTimeout(() => {
                clave.classList.remove('animate__animated', 'animate__tada');
            },800);
        }else{
            clave.classList.remove("border-red-600");
            clave.classList.add("border", "border-green-600", "border-solid");
        }
    }
});