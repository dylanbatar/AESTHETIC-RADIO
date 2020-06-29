const btn = document.querySelector("#message-toggle");

const toggle = () => {
  let chatBox = document.querySelector("#message-box");
  chatBox.classList.toggle("toggle");
};

btn.addEventListener("click", toggle);
