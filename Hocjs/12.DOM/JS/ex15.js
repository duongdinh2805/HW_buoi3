const body = document.querySelector("body");
const btn = document.createElement("button");
btn.innerHTML = "Top";
body.append(btn);

window.addEventListener("scroll", function () {
  positionY = window.scrollY;

  if (positionY > 0) {
    btn.style.display = "block";
  } else if (positionY === 0) {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
