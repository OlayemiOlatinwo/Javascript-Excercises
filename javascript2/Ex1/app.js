let image = document.querySelector("#image");
let msg = document.querySelector("#message");

console.log(image);
console.log(msg);

image.addEventListener("click", () => {
  msg.innerHTML = `I've been clicked`;
});
