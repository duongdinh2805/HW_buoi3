const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".priev-btn");
const dot = document.querySelector(".dot");

images.forEach(() => {
  const circleBtn = document.createElement("span");
  circleBtn.innerHTML = `<i class="fa-regular fa-circle"></i>`;
  dot.append(circleBtn);
});

const dots = document.querySelectorAll(".dot span");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? "block" : "none";
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}
