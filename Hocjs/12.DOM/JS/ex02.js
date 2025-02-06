const btnCong = document.querySelector("button.cong");
console.log(btnCong);
const btnTru = document.querySelector("button.tru");
console.log(btnTru);
let countEl = document.querySelector("h1 span");
let count = countEl.innerText;
btnCong.onclick = function () {
  count++;
  countEl.innerText = count;
};
btnTru.onclick = function () {
  count--;
  countEl.innerText = count;
};
