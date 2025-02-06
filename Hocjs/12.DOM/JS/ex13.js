const box = document.querySelector(".box");
const btn = document.createElement("button");
const item = document.querySelectorAll("#item");

item.addEventListener("change", function () {
  if (item.cheked) {
    for (let i = 0; i++; i < 4) {
      count++;
      console.log(count);

      //   btn.innerHTML = `Xoá đã chọn ${count}`;
      //   box.append(btn);
    }
  }
});
