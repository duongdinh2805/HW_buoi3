const box = document.querySelector("box");
const btn = document.createElement(".box button");
const item = document.querySelector("#item");
let count;
btn.innerHTML = `Xoá đã chọn ${count}`;
box.append(btn);
item.addEventListener("change", function () {
  if (item.cheked) {
    count;
  }
});
