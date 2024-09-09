document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector(".signup-form");

  // Проверяем, что форма существует
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Предотвращаем отправку формы

      // Показываем бэкдроп и модальное окно
      modal.classList.add("open");
      backdrop.style.display = "block";
      setTimeout(function () {
        backdrop.classList.add("open");
      }, 10);
    });
  }

  // Кнопка "Okay" в модальном окне
  const modalButton = document.querySelector(".button--modal");
  if (modalButton) {
    modalButton.addEventListener("click", closeModal);
  }
});
