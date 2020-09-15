
const Product = require('../model/product.model');

product = async (req, res) => {
    var products = await Product.find({})
        res.render('products/product', {
        products
      })
};

postProduct = (req, res) => {
    res.render('products/post-product')
};

getEditProduct = async (req, res) => {
    var id = req.params.id;
    var products = await Product.find({ _id: id});
    res.render('products/update-product', {
         products
  })
};

postCreateProduct = (req, res) => {
    var newProduct = new Product({
        product: req.body.product,
        price: req.body.price,
        amount : req.body.amount
  
    })
    Product.createProduct(newProduct);
    res.redirect('/products');
};

editProduct = async (req, res) => {
    var id = req.params.id
    await Product.findByIdAndUpdate({ _id: id},{ 
        $set: {
                product: req.body.product,
                price: req.body.price,
                amount: req.body.amount
              }
            })
      res.redirect('/products')
};
  
deleteProduct = async(req, res) => {
    var id = req.params.id;
    await Product.remove({ _id:id });
    res.redirect('/products')
};

module.exports = {
    product,
    postProduct,
    getEditProduct,
    postCreateProduct,
    editProduct,
    deleteProduct
}