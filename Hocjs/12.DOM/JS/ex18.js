const rangeEl = document.querySelector(".range");
const processEl = document.querySelector(".process");
const processSpanEl = document.querySelector(".process span");
let initalX = 0;
let offsetLeft = 0;
rangeEl.addEventListener("mousedown", function (e) {
  const offsetX = e.offsetX;
  const width = this.clientWidth;
  const rate = (offsetX / width) * 100;
  processEl.style.width = `${rate}%`;
  initalX = e.clientX;
  offsetLeft = offsetX;
  document.addEventListener("mousemove", handleDrag);
});
rangeEl.addEventListener("mouseup", function (e) {
  document.removeEventListener("mousemove", handleDrag);
});
processSpanEl.addEventListener("mousedown", function (e) {
  document.addEventListener("mousemove", handleDrag);
  e.stopPropagation();
  initalX = e.clientX;
  offsetLeft = this.offsetLeft;
});
const handleDrag = function (e) {
  const clientX = e.clientX;
  let distance = clientX - initalX;

  const width = rangeEl.clientWidth;
  let rate = ((distance + offsetLeft) / width) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  processEl.style.width = `${rate}%`;
};
