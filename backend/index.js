const express=  require('express');
const routes = require('./routes');
const cors = require('cors');
const makeConnection = require('./database/connection');
const open = require('open');
const path = require('path');


makeConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/', express.static(__dirname + '/../frontend'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../frontend/index.html'));
    
});

open('http://localhost:8000');

app.listen(8000);

module.exports = app;