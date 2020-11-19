const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err){
    if(err) throw err;
    console.log('Conectado!');
    con.query(" CREATE DATABASE IF NOT EXISTS text_to_speech", function(err, result){
        if (err) throw err;

        console.log('Banco de dados criado!');
    });

    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'text_to_speech'
    });

    var sql = "CREATE  TABLE IF NOT EXISTS comments (comment VARCHAR(255))";
    
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log('Tabela criada!')
    });
});




