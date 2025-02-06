const items = document.querySelectorAll("ul a");
// const menu = document.querySelectorAll("menuchildren");

items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const li = this.parentElement;
    const lichildren = li.children;
    if (lichildren.length !== 1) {
      const list = lichildren[1];
      //   Object.assign(list.style, ulstyle);
      //   //   console.log(lichildren);
      const itemVisible = document.querySelector(".menuvisible");
      list.classList.toggle("menuvisible");
      if (itemVisible) {
        itemVisible.classList.remove("menuvisible");
      }

      console.log(itemVisible);
    }
  });
});
