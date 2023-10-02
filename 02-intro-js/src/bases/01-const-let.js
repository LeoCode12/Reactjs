const nombre = "leo"
let apellido = "resendiz"

let valorDado = 2
valorDado = 5

console.log(nombre, apellido, valorDado)

//Variables Scope
if(true){
    let valorDado = 8
    console.log(valorDado)
}

console.log(valorDado);