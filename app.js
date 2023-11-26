let blackSection = document.getElementById("blackSection");
// let drop2buttons = document.getElementsByClassName(".drop2buttons");

// Close Button for black section
const closeBlackSection = () => {
  blackSection.style.display = "none";
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

// Dropdown2 Buttons
// drop2buttons.addEventListener('click', function() {
//   this.style.backgroundColor = '#F0F0F0';
// });

// function toggleButtonClick() {
//   let drop2buttons = document.getElementsByClassName("drop2buttons");

//   if (drop2buttons.style.backgroundColor === 'rgb(240, 240, 240)') {
//     drop2buttons.style.backgroundColor = '#FFFFFF'; // Set initial background color
//   } else {
//     drop2buttons.style.backgroundColor = 'red'; // Set background color when clicked
//   }
// }

// For main section progress bar
function updateProgress() {
  var checkboxes = document.querySelectorAll(".checkbox");
  var checkedCount = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  var progress = document.getElementById("progress");
  var progressText = document.getElementById("progress-text");

  progress.value = checkedCount;
  progressText.textContent = checkedCount + "/" + checkboxes.length;
}

let toggleIcon = document.getElementById("OC_icon");
let checkForm = document.getElementById("checkbox-form");

const toggleMain = () => {
  var displayy = checkForm.style.display === "none" ? "flex" : "none";
  checkForm.style.display = displayy;
  toggleIcon.style.transform =
    toggleIcon.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
};

// const rotateArrow = () => {
// }
