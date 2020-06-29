import { showCommand } from "./commandSystem.js";

const messageInput = document.querySelector("#message-input");
const messageBox = document.querySelector("#message-box");

messageInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    showCommand(messageInput["value"]);
  }
});


// TODO HACER QUE EL SCROOL BAJE AUTOMATICAMENTE