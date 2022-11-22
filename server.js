"use strict"
const http = require('http')

const servidor = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type':'text/plain'})
    response.end('Hola Tripulantes!')
})

servidor.listen(8009)
console.log("Servidor levantado")
console.log("Escuchando peticiones en http://localhost:8009")