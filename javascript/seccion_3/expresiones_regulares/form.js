//import { regex } from './index.js';

function validate(){
    // Validar nombre con espacios
    let expName = /^[a-zA-Z\s]+$/;
    let expEmail = /^\w+@\w+\.\w{2,3}$/;
    let expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    let password = document.getElementById('password').value;
    let password_confirmation = document.getElementById('password_confirmation').value;
  
    if(!regex('name', expName, 'El nombre solo puede contener letras y espacios')) return false;
    if(!regex('email', expEmail, 'El correo electrónico no es válido')) return false;
    if(!regex('password', expPassword, 'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un caracter especial')) return false;
    
    if(password === password_confirmation){
      document.getElementById('password_confirmation').style.border = '1px solid green';
      document.getElementById('error').innerHTML = '';
    } else {
      document.getElementById('password_confirmation').style.border = '1px solid red';
      document.getElementById('error').innerHTML = 'Las contraseñas no coinciden';
      return false;
    }
  
    alert('Formulario enviado correctamente');
  }
  
  function regex(id, exp, message){
    let element = document.getElementById(id);
    if(exp.test(element.value)){
      element.style.border = '1px solid green';
      document.getElementById('error').innerHTML = '';
      return true;
    } else {
      element.style.border = '1px solid red';
      document.getElementById('error').innerHTML = message;
      return false;
    }
  }
  
  /*
    Ejercicios para practicar
    1) Crea un formulario de pago que tenga los siguientes campos:
    - Nombre del titular
    - Número de tarjeta
    - Fecha de expiración
    - CVV
    - Código postal
    - Correo electrónico
    - Contraseña
    - Confirmar contraseña
  
    2) Crea una expresion regular para validar una cedula de Venezuela) 
    Ej: v-12.345.678 o v12.345.678
  
    3) Crea una expresion regular que valide el numero de un pasaporte
  */