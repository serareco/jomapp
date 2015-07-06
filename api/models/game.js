// Dependecies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var gameSchema = new mongoose.Schema({
	name: String,
	image: String,
	code: String,
	platform: String,
	support: String,
	chip: String,
	description: String,
	size: Number,
	price: Number,
	dateInsert: Date
});

// Return model
module.exports = restful.model('Games',gameSchema);