// Funcion asincrona que espera que fetch termine para continuar
// Posteriormente se espera que la respuesta sea convertida a JSON
// y por ultimo se imprime en consola.
async function buscarJuegos(){
    try{
        let respuesta = await fetch('https://rps101.pythonanywahere.com/api/v1/objects/all');
        let datos = await respuesta.json();
        console.log(datos);
    }catch(error){
        console.error(error);
    }
};

buscarJuegos();

console.log("El codigo no se detuvo");