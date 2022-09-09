require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const app = require("./app");

dbConnect();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`E-commerce listening on port ${port}`);
});
