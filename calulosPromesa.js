const calculoMagico = (num1, num2) =>{
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            if (num1!==num2){
                res(num1+num2)
            }else{
                rej('Error de ejecucion')
            }
        }, 3000)
    })
}

const imprimirMagico = (imprimir) =>{
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            if  (imprimir===5){
                rej('No se puede imprimir el numero.')
            }else{
                res(imprimir)
            }
        },8000)
    })
}

module.exports={
    calculoMagico,
    imprimirMagico
}