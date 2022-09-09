const {
  getProductService,
  createProductService,
} = require("../services/product.services");

exports.getProduct = async (req, res, next) => {
  try {
    const products = await getProductService();
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
