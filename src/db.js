const mongoose = require("mongoose");
require("./config/config");

mongoose
  .connect(process.env.URI_DB, {
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
