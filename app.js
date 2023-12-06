const dadosPizzaria=require('./module/dados_pizzaria')

const listarUsuarios=function(){
    let arrayUsuarios=[]
    let contador=0
    let status=true
    while(contador<dadosPizzaria.usuarios.length){
        arrayUsuarios.push(dadosPizzaria.usuarios[contador].nome)
        contador++
        status=true
    }
    if(status)
        return arrayUsuarios
    else
        return false
}

const listarProdutos=function(){
    let arrayProdutos=[]
    let contador=0
    let status=true
    while(contador<dadosPizzaria.produtos.length){
        arrayProdutos.push(dadosPizzaria.produtos[contador].nome)
        contador++
        status=true
    }
    if(status)
        return arrayProdutos
    else
        return false
}

console.log(listarProdutos())