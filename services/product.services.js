const Product = require("../models/Product");

exports.getProductService = async () => {
  const product = await Product.find({});
  return product;
};
exports.createProductService = async (data) => {
  const product = new Product(data);
  const result = await product.save();
  return result;
};
