const events = require('events')

const desencadenadorEv = new events()

desencadenadorEv.on('saludo',(nombre)=>{
    console.log(`Hola! ${nombre}`)
})

desencadenadorEv.on('despedida',()=>{
    console.log('Adios!')
})

desencadenadorEv.emit('saludo', 'tripulantes')

desencadenadorEv.eventNames()