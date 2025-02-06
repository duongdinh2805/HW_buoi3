const submitButton = document.querySelector("#submit");
const input = document.querySelector("#new-task");
const toDoList = document.querySelector("#to-do-list");
function addTask() {
  const taskText = input.value.trim();
  if (taskText) {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <i class="fa-regular fa-square-check"></i>
      <i class="fa-solid fa-square-check" style="display: none;"></i>
      <input type="checkbox" id="listwork" style="display: none;"/>
      <label for="listwork">
        <span>${taskText}</span>
      </label>
      <button><i class="fa-solid fa-x"></i></button>
    `;

    // Thêm sự kiện cho checkbox
    const checkbox = newTask.querySelector("#listwork");
    const faRegular = newTask.querySelector(".fa-regular");
    const faSolid = newTask.querySelector(".fa-solid");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        faRegular.style.display = "none";
        faSolid.style.display = "inline";
        newTask.querySelector("span").style.textDecoration = "line-through";
      } else {
        faRegular.style.display = "inline";
        faSolid.style.display = "none";
        newTask.querySelector("span").style.textDecoration = "none";
      }
    });

    toDoList.appendChild(newTask);
    input.value = "";
  }
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
