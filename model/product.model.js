var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    product: String,
    price: String,
    amount: String,
    created_at: {type: Date, default: Date.now }
    });
var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;

module.exports.createProduct = (newProduct)=>{
    newProduct.save()  
};