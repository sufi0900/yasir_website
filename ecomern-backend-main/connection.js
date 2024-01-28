require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = "mongodb://0.0.0.0:27017/yasir_website";

mongoose
  .connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
