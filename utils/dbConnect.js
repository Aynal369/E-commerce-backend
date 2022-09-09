const mongoose = require("mongoose");

dbConnect = () => {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log(`Mongoose connection is successfully`);
  });
};

module.exports = dbConnect;
