const sectionEl = document.querySelectorAll("section");
const section = document.querySelector("section");
const btns = document.querySelectorAll("button");
const btn = document.querySelector("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const hash = this.dataset.target;
    const sectionEl = document.querySelector(hash);
    if (sectionEl) {
      const offsetTop = sectionEl.offsetTop;
      window.scroll({
        top: offsetTop - 40,
        behavior: "smooth",
      });
    }
  });
});
const documentHeight = document.body.clientHeight;

window.addEventListener("scroll", function () {
  positionY = window.scrollY;
  let foundEl = null;
  sectionEl.forEach(function (section) {
    const rec = section.getBoundingClientRect();

    if (rec.top >= 0 && rec.bottom <= documentHeight) {
      if (!foundEl) {
        foundEl = section;
      }
    }
  });
  if (foundEl) {
    const id = foundEl.id;

    btns.forEach(function (btn) {
      if (btn.dataset.target === `#${id}`) {
        btn.style.color = "red";
      } else {
        btn.style.color = "";
      }
    });
  }
});
