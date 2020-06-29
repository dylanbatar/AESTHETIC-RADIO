const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/radio", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("bd is work");
  })
  .catch((err) => {
    console.log("error to connect with db");
  });

module.exports = mongoose;
