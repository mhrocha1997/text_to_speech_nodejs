const express=  require('express');
const routes = require('./routes');
const cors = require('cors');
const makeConnection = require('./database/connection');

makeConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(8000,function(){
    console.log('Servidor rodando na url http://localhost:8000');
});

module.exports = app;