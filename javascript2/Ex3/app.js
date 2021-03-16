let face = document.querySelector("#face");
let moustache = document.querySelector("#moustache");

face.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  moustache.style.top = `${y - 40}px`;
  moustache.style.left = `${x - 95}px`;
  output = `${x} ${y}`;
  console.log(output);
});
