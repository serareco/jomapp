// Dependecies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var filmSchema = new mongoose.Schema({
	name: String,
	image: String,
	code: String,
	support: String,
	category: String,
	quality: String,
	description: String,
	comments: String,
	dateInsert: Date
});

// Return model
module.exports = restful.model('Films',filmSchema);