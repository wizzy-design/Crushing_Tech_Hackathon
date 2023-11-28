function app() {
  const HIDDENCLASS = "hidden";
  const MARKASDONE = "checkbox-done";
  const todoLists = document.querySelectorAll(".shopping-item");
  const taskCountElement = document.getElementById("task-count");
  taskCount = 5;
  let completedTasks = 0;
  const progressBar = document.querySelector(".progress-bar");
  const progressBarFill = progressBar.querySelector(".progress-bar-fill");

  function updateTaskCount() {
    const percent = (completedTasks / taskCount) * 100;
    progressBarFill.style.width = `${percent}%`;
    progressBar.ariaLabel = `${percent}% completed`;

    taskCountElement.textContent = `${completedTasks}`;
  }
  console.log(updateTaskCount, taskCountElement);

  function handleMarkAsDone(button) {
    const notCompletedIcon = button.querySelector(".not-completed-icon");
    const completedIcon = button.querySelector(".completed-icon");
    const loadingSpinnerIcon = button.querySelector(".loading-spinner-icon");

    notCompletedIcon.classList.add(HIDDENCLASS);
    loadingSpinnerIcon.classList.remove(HIDDENCLASS);

    setTimeout(() => {
      loadingSpinnerIcon.classList.add(HIDDENCLASS);
      completedIcon.classList.remove(HIDDENCLASS);
      button.classList.add(MARKASDONE);

      // Increment the completed task count
      completedTasks++;
      updateTaskCount();
    }, 700);
  }

  function handleMarkAsNotDone(button) {
    const completedIcon = button.querySelector(".completed-icon");
    const loadingSpinnerIcon = button.querySelector(".loading-spinner-icon");

    completedIcon.classList.add(HIDDENCLASS);
    loadingSpinnerIcon.classList.remove(HIDDENCLASS);

    setTimeout(() => {
      loadingSpinnerIcon.classList.add(HIDDENCLASS);
      button.querySelector(".not-completed-icon").classList.remove(HIDDENCLASS);
      button.classList.remove(MARKASDONE);

      // Decrement the completed task count
      completedTasks--;
      updateTaskCount();
    }, 700);
  }

  function handleToggle(button) {
    const markedAsDone = button.classList.contains(MARKASDONE);

    if (markedAsDone) {
      handleMarkAsNotDone(button);
    } else {
      handleMarkAsDone(button);
    }
  }

  function handleButtonClick(event) {
    const button = event.target.closest(".shopping-item-checkbox");
    if (button) {
      handleToggle(button);
    }
  }

  // Attach a single click event listener to a common parent element
  todoLists.forEach((list) => {
    list.addEventListener("click", handleButtonClick);
  });
}

app();

// BlackSection
let blackSection = document.getElementById("blackSection");

// Close Button for black section
const closeBlackSection = () => {
  blackSection.style.visibility = "hidden";
};

// Popup buttons
document.addEventListener("DOMContentLoaded", () => {
  var button1 = document.getElementById("bell");
  var menu1 = document.getElementById("dropdownMenu1");

  var button2 = document.getElementById("dav_coll");
  var menu2 = document.getElementById("dropdownMenu2");

  function hideAllMenus() {
    // Hide all dropdown menus
    menu1.style.display = "none";
    menu2.style.display = "none";
  }

  button1.addEventListener("click", function () {
    if (menu1.style.display === "flex") {
      menu1.style.display = "none";
    } else {
      hideAllMenus();
      menu1.style.display = "flex";
    }
  });

  button2.addEventListener("click", function () {
    if (menu2.style.display === "flex") {
      menu2.style.display = "none";
    } else {
      hideAllMenus();
      menu2.style.display = "flex";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !button1.contains(event.target) &&
      !menu1.contains(event.target) &&
      !button2.contains(event.target) &&
      !menu2.contains(event.target)
    ) {
      hideAllMenus();
    }
  });
});

let toggleIcon = document.getElementById("OC_icon");
let checkForm = document.getElementById("checkbox-form");

// To toggle the dropdown main section
const toggleMain = () => {
  var displayy = checkForm.style.display === "none" ? "flex" : "none";
  checkForm.style.display = displayy;
  toggleIcon.style.transform =
    toggleIcon.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
};

let listItem = document.querySelectorAll("li");

listItem.forEach((li, index) => {
  li[index].addEventListener("click", () => {
    li.style.backgroundColor = "red";
  });
});
