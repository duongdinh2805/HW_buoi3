const h1 = document.querySelector("h1");
h1.addEventListener("mousedown", function (event) {
  {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    document.addEventListener("mousemove", handleDrag);
  }
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
let offsetX;
let offsetY;
const handleDrag = function (event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  //   const offsetX = event.offsetX;
  //   const offsetY = event.offsetY;

  Object.assign(h1.style, {
    left: `${clientX - offsetX}px`,
    top: `${clientY - offsetY}px`,
  });
};
