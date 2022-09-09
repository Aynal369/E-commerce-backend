const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// Global route
app.get("/", (req, res) => {
  res.send("welcome to e-commerce project");
});

// routes
const productRoute = require("./routes/product.route");
app.use("/app/v1/product", productRoute);

module.exports = app;
