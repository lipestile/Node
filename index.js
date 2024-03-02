const express = require('express');
const app = express()

app.get('/', function(req, res){
    res.send('Rota Principal')
})
app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})
app.get('/nome', function(req, res){
    res.send('Felipe Carvalho Balbino Da Silva')
})

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
})