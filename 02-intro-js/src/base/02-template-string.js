const nombre = "Leo"
const apellido = "Resendiz"

const nombreCompleto = `${nombre} ${apellido}`  //nombre + " " + apellido
console.log(nombreCompleto);

function getSaludo(nombre){
    return "Hola Mundo " + nombre
}

console.log(`este es un texto ${getSaludo(nombre)}`);