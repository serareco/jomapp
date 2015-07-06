// Dependecies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var Game = require('../models/game');
var Film = require('../models/film');
//var List = require('../models/list');

// Routes
Product.methods(['get','put','post','delete']);
Product.register(router,'/products');

Game.methods(['get','put','post','delete'])
Game.register(router,'/games');

Film.methods(['get','put','post','delete'])
Film.register(router,'/films');

//List.methods(['get'])
//List.register(router,'/list');

// Return router
module.exports = router;