const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()

app.use((request,response,next)=>{
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Methods','GET')
    app.use(cors())
    next()
})

app.get('/usuarios/nome',cors(),async function(request,response,next){
    let controleDadosPizzaria=require('./module/funcoes.js')
    let listaUsuarios=controleDadosPizzaria.getListaDeUsuarios()
    if(listaUsuarios){
        response.json(listaUsuarios)
        response.status(200)
    }
    else{
        response.status(404)
    }
})

app.get('/produtos/nome',cors(),async function(request,response,next){
    let controleDadosPizzaria=require('./module/funcoes.js')
    let listaProdutos=controleDadosPizzaria.getListaDeProdutos()
    if(listaProdutos){
        response.json(listaProdutos)
        response.status(200)
    }
    else{
        response.status(404)
    }
})

app.get('/produtos/nome/avaliacao',cors(),async function(request,response,next){
    let controleDadosPizzaria=require('./module/funcoes.js')
    let listaProdutos=controleDadosPizzaria.getListaDeProdutosBemAvaliados()
    if(listaProdutos){
        response.json(listaProdutos)
        response.status(200)
    }
    else{
        response.status(404)
    }
})

app.get('/categorias/nome',cors(),async function(request,response,next){
    let controleDadosPizzaria=require('./module/funcoes.js')
    let listaCategorias=controleDadosPizzaria.getCategorias()
    if(listaCategorias){
        response.json(listaCategorias)
        response.status(200)
    }
    else{
        response.status(404)
    }
})

app.listen('8080',function(){
    console.log('API no ar!!!')
})