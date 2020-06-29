import { socket } from "./app.js";
import { fetchApi } from "./fetchApi.js";
import { isLogger } from './auth.js'

const messageList = document.querySelector(".message-list");

const showCommand = (command = "") => {
  if (!command.startsWith("/") && isLogger()) {
    socket.emit("send-message", { message: command });
  }

  command = command.split(" ");

  switch (command[0]) {
    case "/help":
      helpCommand();
      break;
    case "/register":
      registerCommand(command[1], command[2], command[3]);
      break;
    case "/login":
      loginCommand(command[1], command[2]);
      break;
    case "/giphy":
      giphyCommand(command[1]);
      break;
    case "/clear":
      clearCommand();
      break;
  }
};

const helpCommand = () => {
  const listCommands = `
      <div class="command-tools">
        <p>/login [email] [password]</p>
        <p>/register [nickname] [email] [password]</p>
        <p>/giphy [word]</p>
        <p>/clear</p>
      </div>
    `;
  messageList.innerHTML += listCommands;
};

const registerCommand = (nickname, email, password) => {
  const state = fetchApi("http://localhost:4200/signup", "POST", {
    nickname,
    email,
    password,
  });
  console.log(state);
};

const loginCommand = (email, password) => {
  const state = fetchApi("http://localhost:4200/signin", "POST", {
    email,
    password,
  });
  console.log(state);
};

const giphyCommand = (name) => {
  const state = fetchApi(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      name
    )}&limit=10&api_key=9WrQsDF07XFRCx7bswdDfC0NI9j79ISM`
  );
  console.log(state);
};

const clearCommand = () => {
  messageList.innerHTML = "";
};

export { showCommand };
