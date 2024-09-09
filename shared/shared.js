const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const buttonNO = document.querySelector("#button_no");
const selectButtons = document.querySelectorAll(".button-choose-plan");
const toggleButton = document.querySelector(".toggle-button");
const mobileNavigator = document.querySelector(".mobile-nav");

for (let i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function () {
  mobileNavigator.classList.remove("open");
  closeModal();
});

if (buttonNO) {
  buttonNO.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 20);
}

toggleButton.addEventListener("click", function () {
  mobileNavigator.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});
