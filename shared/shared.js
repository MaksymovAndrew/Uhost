const backdrop = document.querySelector(".backdrop");
const selectButtons = document.querySelectorAll(".button-choose-plan");
const modal = document.querySelector(".modal");
const buttonNO = document.querySelector("#button_no");
const toggleButton = document.querySelector(".toggle-button");
const mobileNavigator = document.querySelector(".mobile-nav");

for (let i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  // mobileNavigator.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  mobileNavigator.classList.remove("open");
});

if (buttonNO) {
  buttonNO.addEventListener("click", function () {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
    mobileNavigator.classList.remove("open");
  });
}

toggleButton.addEventListener("click", function () {
  backdrop.classList.add("open");
  mobileNavigator.classList.add("open");
});
