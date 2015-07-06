// Dependecies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
	name: String,
	barCode: String,
	code: String,
	price: Number,
	stock: Number
});

// Return model
module.exports = restful.model('Products',productSchema);