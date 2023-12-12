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

// const listarProdutosCategoria=function(){
//     let arrayProdutos=[]
//     let contador=0
//     let contador2=0
//     let status=true
//     let filtro='Bebidas'
//     while(contador<dadosPizzaria.produtos.length){
//         if(filtro.toUpperCase()==dadosPizzaria.produtos[contador].categorias[contador2].nome)
//     }
// }

//console.log(listarProdutos())
module.exports={getListaDeUsuarios}