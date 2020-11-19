const express = require('express');
const app = express();
const db = require('./database/connection');


app.get('/',function(req,res){
    res.send('Bem vindo')
});

app.get('sobre',function(req,res){
    res.send('')
})

app.listen(8000,function(){
    console.log('Servidor rodando na url http://localhost:8000');
});