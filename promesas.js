// const promesa = new Promise ((response, reject)=>{
//     //response ('Respuesta exitosa')
//     //reject ('Respuesta de error, ocurrio algun error')
// })

// promesa.then((resultadoPromesa)=>{
//     console.log(resultadoPromesa)
// },(error)=>{
//     console.log('Ha ocurrido un error')
//     console.log(error)
// })

const moduloExterno = require('./calulosPromesa')

moduloExterno.calculoMagico(1,3)
    .then((respuesta)=>moduloExterno.imprimirMagico(respuesta))
    .then((respuestaImprimir)=>console.log(respuestaImprimir))
    .catch((err)=>console.log(err))