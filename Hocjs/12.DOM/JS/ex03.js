// const box = document.querySelector(".box");
// const fadeOut = document.querySelector(".fadeoutbtn");
// const fadeIn = document.querySelector(".fadeinbtn");
// const cssFadeOut = {
//   opacity: "0",
//   transition: "1s ease",
//   transitionProperty: "opacity",
// };
// const cssFadeIn = {
//   opacity: "1",
//   transition: "1s ease",
//   transitionProperty: "opacity",
// };
// const cssHidden = {
//   display: "none",
// };

// fadeOut.onclick = function () {
//   setTimeout(function () {
//     Object.assign(box.style, cssHidden);
//   }, 1000);
//   Object.assign(box.style, cssFadeOut);
// };
// fadeIn.onclick = function () {
//   setTimeout(function () {
//     box.style.display = ``;
//   }, 1000);
//   Object.assign(box.style, cssFadeIn);
// };
const box = document.querySelector(".box");
const fadeoutBtn = document.querySelector(".fadeoutbtn");
const fadeintBtn = document.querySelector(".fadeinbtn");
const cssFadeout = {
  opacity: "0",
  transition: "1s ease",
  transitionProperty: "opacity",
};
const cssFadein = {
  opacity: "1",
  transition: "1s ease",
  transitionProperty: "opacity",
};
const cssHidden = {
  display: "none",
};
fadeoutBtn.onclick = function () {
  Object.assign(box.style, cssFadeout);
  setTimeout;
};
