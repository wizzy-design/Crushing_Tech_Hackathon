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

    // Handles Meu and Aria
    const menuTrigger = document.querySelector("#dav_coll");
    const menu = document.querySelector("#dropdownMenu2");

    const allMenuItems = menu.querySelectorAll('[role="menuitem"]');

    function closeMenu() {
      menuTrigger.ariaExpanded = "false";
      menuTrigger.focus();
    }

    function handleMenuEscapeKeypress(event) {
      // if user pressed escape key
      if (event.key === "Escape") {
        toggleMenu();
      }
    }

    function handleMenuItemArrowKeyPress(event, menuItemIndex) {
      // create some helpful variables : isLastMenuItem, isFirstMenuItem
      const isLastMenuItem = menuItemIndex === allMenuItems.length - 1;
      const isFirstMenuItem = menuItemIndex === 0;

      const nextMenuItem = allMenuItems.item(menuItemIndex + 1);
      const previousMenuItem = allMenuItems.item(menuItemIndex - 1);

      // if the user pressed arrow right or arrow down
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        // if user is on last item, focus on first menuitem
        if (isLastMenuItem) {
          allMenuItems.item(0).focus();

          return;
        }
        // then focus on next menu item
        nextMenuItem.focus();
      }

      // if the user pressed arrow up or arrow left
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        if (isFirstMenuItem) {
          allMenuItems.item(allMenuItems.length - 1).focus();
          return;
        }

        previousMenuItem.focus();
      }
      // then focus on the previous menu item
      // if the user is on first menu item, focus on last menuitem
    }

    function openMenu() {
      menuTrigger.ariaExpanded = "true";
      allMenuItems.item(0).focus();

      menu.addEventListener("keyup", handleMenuEscapeKeypress);

      // for each menu item, register an event listener for the keyup event
      allMenuItems.forEach(function (menuItem, menuItemIndex) {
        menuItem.addEventListener("keyup", function (event) {
          handleMenuItemArrowKeyPress(event, menuItemIndex);
        });
      });
    }
    function toggleMenu() {
      const isExpanded =
        menuTrigger.attributes["aria-expanded"].value === "true";
      menu.classList.toggle("menu-active");

      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    menuTrigger.addEventListener("click", toggleMenu);
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

// Get all 'li' elements with the class "checklist"
let listItems = document.querySelectorAll(".checklist");
// Get all 'info' elements with the class "checklist"
let infoItems = document.querySelectorAll(".info");

// Function to handle the click event
function handleItemClick(event) {
  // Reset background color for all 'li' elements
  listItems.forEach((item) => {
    item.style.backgroundColor = "";
  });

  // Reset display of info sections
  infoItems.forEach((info) => {
    info.style.display = "none";
  });

  // Get the parent 'li' element of the clicked button or label
  let listItem = event.target.closest(".checklist");

  // Set the background color to red for the clicked 'li' element
  if (listItem) {
    listItem.style.backgroundColor = "#F3F3F3";

    // Find the corresponding infoItem (adjust this based on your HTML structure)
    let infoItem = listItem.querySelector(".info");

    // Check if infoItem is found and set its display to flex
    if (infoItem) {
      infoItem.style.display = "flex";
    }
  }
}

// Add click event listener to each checkButton
listItems.forEach((item) => {
  let checkButton = item.querySelector(".shopping-item-checkbox");
  if (checkButton) {
    checkButton.addEventListener("click", handleItemClick);
  }

  // Add click event listener to each checkLabel
  let checkLabel = item.querySelector(".shopping-item-label");
  if (checkLabel) {
    checkLabel.addEventListener("click", handleItemClick);
  }
});
