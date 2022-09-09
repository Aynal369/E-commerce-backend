const express = require("express");
const productController = require("../controllers/product.controllers");
const router = express.Router();

router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProduct);

module.exports = router;
