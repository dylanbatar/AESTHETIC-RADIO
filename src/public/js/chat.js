import { showCommand } from "./commandSystem.js";
import { socket } from "./app.js";

const messageInput = document.querySelector("#message-input");
const messageBox = document.querySelector(".message-list");

messageInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    showCommand(messageInput["value"]);
  }
});

socket.on("history", ({data}) => {
  console.log(data)
  drawMessage(data.message, data.user);
});

const drawMessage = (message, user) => {
  const NEW_MESSAGE = `
  <li>
    <div class="texto">
      <h4 class="message-user">${user}</h4>
      <p class="message">${message}</p>
    </div>
  </li>`;
  messageBox.innerHTML += NEW_MESSAGE;
};

// TODO HACER QUE EL SCROOL BAJE AUTOMATICAMENTE
