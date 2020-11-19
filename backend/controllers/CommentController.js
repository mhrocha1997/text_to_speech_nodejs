import {connection} from '..database/connection.js';

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'text_to_speech'
});


async function insertComment(text){
    con.connect(function(err){
        console.log('conectado');
        var sql = "INSERT INTO comments(comment) VALUES ?";

        con.query(sql,text,function(err,result){
            if (err) throw err;
            console.log('Commentário cadastrado')
        });
        
    });
    
}


async function selectComments(){
    con.connect(function(err){
        con.query('SELECT * FROM comments',function(err, result, fields){
            if(err) throw err;
            return result;
        });
    });
}

module.exports = {selectComments,insertComment}