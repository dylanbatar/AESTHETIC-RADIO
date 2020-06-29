const socket = io();

socket.on("disconnect", () => {
  console.log("An error has ocurred on server");
});

socket.on("connect", () => {
  console.log("new user conect");
});

socket.on("history", ({ data }) => {
  console.log(data.message);
});

export { socket };
