const Product = require('../../model/product.model');

module.exports.product = async (req, res) => {
    var products = await Product.find()
    res.json(products);
};
