const btn = document.querySelector("button");
const contentEl = document.querySelector(".content p");
const content = contentEl.innerHTML;
let countEl = document.querySelector(".view span");
let count = countEl.innerText;
btn.onclick = function () {
  if (contentEl.innerHTML) {
    count++;
    countEl.innerText = count;
    contentEl.innerHTML = ``;
    btn.innerHTML = `Hiện`;
  } else {
    contentEl.innerHTML = content;
    btn.innerHTML = `Ẩn`;
  }
};
