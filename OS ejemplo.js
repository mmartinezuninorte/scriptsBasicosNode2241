// importando el modulo OS que me permite trabajar con algunos aspectos
// de mi os Operativo
// lo estoy renombrando como os
const os = require ('os')
const fs = require('fs')
const events = require('events')
const constants = require('constants')

const desencadenador = new events()

let arquitectura = os.arch()
let rutaTemporal = os.tmpdir()

desencadenador.on('pathTemp',(rutaTemporal, arquitectura)=>{
    fs.appendFile('pathTemp.txt',`la ruta temporal es: ${rutaTemporal}, y ademas
            mi arquitectura es ${arquitectura}`, (err)=>{
        if (err){
            console.log(`error al crear el archivo: ${err}`)
        }
    })
})

desencadenador.on('delete',(path)=>{
    fs.unlink(path,(err)=>{
        if(err){
            console.log("este es un error:")
            console.log(err)
        }
    })
})

fs.access('pathTemp.txt', constants.F_OK, (err)=>{
    if (err){
        desencadenador.emit('pathTemp', rutaTemporal, arquitectura)
    }else{
        desencadenador.emit('delete','./pathTemp.txt')
    }
})

// desencadenador.emit('pathTemp', rutaTemporal, arquitectura)
// desencadenador.emit('delete','./pathTemp.txt')