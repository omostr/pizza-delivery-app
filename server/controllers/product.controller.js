const Product = require('../models/product.model');

exports.getProducts = (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) next(err);
    res.json(products);
  });
};

exports.getProductById = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) next(err);
    res.json(product);
  });
};
