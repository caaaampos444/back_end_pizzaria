const dadosPizzaria=require('./dados_pizzaria')

const getListaDeUsuarios=function(){
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

const getListaDeProdutos=function(){
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

const getListaDeProdutosBemAvaliados=function(){
    let arrayProdutos=[]
    let contador=0
    let status=true
    while(contador<dadosPizzaria.produtos.length){
        if(dadosPizzaria.produtos[contador].avaliacao>=4)
            arrayProdutos.push(dadosPizzaria.produtos[contador].nome)
        contador++
        status=true
    }
    if(status)
        return arrayProdutos
    else
        return false
}

//console.log(listarProdutos())
console.log(getListaDeProdutosBemAvaliados())
module.exports={getListaDeUsuarios,getListaDeProdutos,getListaDeProdutosBemAvaliados}