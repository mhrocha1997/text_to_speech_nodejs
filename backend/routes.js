const CommentController = require('./controllers/CommentController');
const express = require('express');
const watson = require('./api/watson');
const { text_to_speech } = require('./api/watson');


const routes = express.Router();

routes.post('/create',CommentController.insertComment);
routes.get('/comments',CommentController.selectComments);
routes.post('/play',watson.text_to_speech);

module.exports =  routes;