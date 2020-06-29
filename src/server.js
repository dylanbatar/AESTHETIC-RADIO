const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// db
require('./db')

// server config
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// socket config
io.on("connection", (client) => {
  console.log(client.id);

  client.on("disconnect", () => {
    console.log("user disconnected", client.id);
  });

  client.on("send-message", (data) => {
    console.log(data);

    io.emit("history", { data });
  });
});

// routes config
app.use(require("./routes/index.routes"));

// running server
http.listen(4200, () => {
  console.log("Server is running");
});
