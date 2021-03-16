let canvas = document.querySelector("#canvas");
let dot = document.querySelector("#dot");
let msg = document.querySelector("#msg");
let theBody = document.querySelector("#theBody");

canvas.addEventListener("mousemove", (e) => {
  let dott = document.createElement("div");
  dott.style.cssText =
    "background : black; width : 1em; height : 1em; border-radius : 7px; position : absolute";

  let x = e.clientX;
  let y = e.clientY;
  dott.style.left = `${x}px`;
  dott.style.top = `${y}px`;
  msg.textContent += "Hi ";

  console.log(dott);

  theBody.appendChild(dott);
});

// #dot {
//  background: black;
//  width: 1em;
//  height: 1em;
//  border-radius: 7px;
//  position: absolute;
//  top: 50px;
//  left: 20px;
// }
