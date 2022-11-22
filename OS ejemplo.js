// importando el modulo OS que me permite trabajar con algunos aspectos
// de mi os Operativo
// lo estoy renombrando como os
const os = require ('os')
const fs = require('fs')


// uso os para referirme a OS y accedo a la funcionalidad especifica
// de cpus, que me muestra un objeto con informacion de cada uno de los nucleos
// de mi pc
// let cpu = os.cpus()

// let arquitectura = os.arch()

let rutaTemporal = os.tmpdir()

fs.appendFile('pathTemp.txt',`la ruta temporal es: ${rutaTemporal}`,(err)=>{
    if (err){
        console.log(`error al crear el archivo: ${err}`)
    }
})