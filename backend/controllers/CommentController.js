const mysql = require('mysql');
const config = require('../config.json');

const con = mysql.createConnection({
    host: "localhost",
    user: `${config.user}`,
    password: `${config.password}`,
    database: 'text_to_speech'
});


async function insertComment(request,response){
    const {comment} = request.body;
   
    con.connect(function(err){
        var sql = `INSERT INTO comments(comment) VALUES ('${comment}')`;

        con.query(sql,function(err,result){
            if (err) throw err;
            return result
        });
        
    });
    
    return response.json(comment);
}


async function selectComments(request,response){
    con.connect(function(err){
        con.query('SELECT * FROM comments',function(err, result, fields){
            if(err) throw err;
            return response.json(result);
        });
    });
}

module.exports = {selectComments,insertComment};

