// Nacimiento de funciones asincronas

function primera (){
    console.log('ejecutarse despues de setTimeOut')
    console.log('Otras instrucciones')
}

function segunda (callback){
    setTimeout(()=>{
        console.log('despues de 3000 ms')
        callback()
    },3000)
}

segunda(primera)


