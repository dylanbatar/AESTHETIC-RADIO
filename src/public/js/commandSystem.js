import { socket } from "./app.js";
import { fetchApi } from "./fetchApi.js";
import { isLogger, signIn } from "./auth.js";

const messageList = document.querySelector(".message-list");

const showCommand = (command) => {
  if (!command.trimLeft().startsWith("/") && isLogger()) {
    socket.emit("send-message", {
      message: command,
      user: sessionStorage.getItem("aesthetic-radio"),
    });
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

const registerCommand = async (nickname, email, password) => {
  if (isLogger()) {
    return;
  }

  const state = fetchApi("http://localhost:4200/signup", "POST", {
    nickname,
    email,
    password,
  });

  console.log(state);
};

const loginCommand = async (email, password) => {
  const state = await fetchApi("http://localhost:4200/signin", "POST", {
    email,
    password,
  });

  if (state?.ok) signIn(email);

  console.log(state);
};

const giphyCommand = async (name) => {
  const state = await fetchApi(
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
