const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this product"],
      unique: [true, "Title should be unique"],
      minLength: [3, "Title must be at least 3 characters"],
      maxLength: [100, "Title is too large"],
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    discount: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status can't be {VALUE}",
      },
    },
    categories: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    productImage: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

// mongoose middleware for saving data : pre / post

/* productSchema.pre("save", function (next) {
  console.log("Before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
}); */
/* productSchema.post("save", function (doc, next) {
  console.log("After saving data");
  next();
}); */

// SCHEMA --> MODEL --> QUERY
const Product = mongoose.model("product", productSchema);

module.exports = Product;
