const mysql = require('mysql');

async function makeConnection(){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    });
    
    con.connect(function(err){
        if(err) throw err;
        con.query(" CREATE DATABASE IF NOT EXISTS text_to_speech", function(err, result){
            if (err) throw err;
    
        });
    
        con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: 'text_to_speech'
        });
    
        var sql = "CREATE  TABLE IF NOT EXISTS comments (id int not null AUTO_INCREMENT,comment VARCHAR(255),PRIMARY KEY (id))";
        
        con.query(sql, function(err,result){
            if(err) throw err;
        });
    });
}


module.exports = makeConnection;




