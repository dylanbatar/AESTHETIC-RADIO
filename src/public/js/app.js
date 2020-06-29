const socket = io();

socket.on("disconnect", () => {
  console.log("An error has ocurred on server");
});

socket.on("connect", () => {
  console.log("new user conect");
});

export { socket };
