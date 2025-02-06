const box = document.querySelector(".box");
const ul = document.querySelector("ul");
const li = document.createElement("li");
const span = document.createElement("span");
const btn = document.createElement("button");
btn.innerHTML = `Add`;
box.append(btn);
let count;
for (let i = 1; i < 5; i++) {
  count = i;
  const li = document.createElement("li");
  li.innerHTML = `Item ${count}`;
  ul.append(li);
}

// let count = li.children.length;
console.log(count);

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  count++;
  li.innerText = `Item ${count}`;
  ul.append(li);
});
