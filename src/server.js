const express = require("express");
const { info } = require("console");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// config
require("./config/config");

// db
require("./db");

// server config
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// socket config
io.on("connection", (client) => {
  client.emit("online-users", onlineUser());
  client.broadcast.emit("online-users", onlineUser());

  client.on("disconnect", () => {
    client.broadcast.emit("online-users", onlineUser());
  });

  client.on("send-message", (data) => {
    io.emit("history", { data });
  });
});

const onlineUser = () => {
  let users = io.sockets.clients();
  let keys = Object.keys(users.connected);
  return keys.length;
};

// routes config
app.use(require("./routes/index.routes"));

// running server
http.listen(process.env.PORT, () => {
  console.log("Server is running");
});
