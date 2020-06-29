const socket = io();

let user = document.querySelector("#online-users");

socket.on("disconnect", () => {
  console.log("An error has ocurred on server");
});

socket.on("connect", () => {
  console.log("new user conect");
  socket.on("online-users", (resp) => {
    console.log(resp);
    user.innerHTML = resp;
  });
});

socket.on("online-users", (resp) => {
  console.log(resp);

  user.innerHTML = resp;
});

export { socket };
