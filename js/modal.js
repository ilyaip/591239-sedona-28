let modalButton = document.querySelector(".search-hotels");
let modal = document.querySelector(".search-form");
let body = document.querySelector(".page-body:not(.search-form):not(.search-hotels)");
let checkIn = modal.querySelector(".input-check-in");
let checkOut = modal.querySelector(".input-check-out");
let people = modal.querySelectorAll(".check-button");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("show");
  modal.classList.toggle("animation");
  checkIn.focus();
  console.log("Нажата кнопка");
});

//  body.addEventListener("click", function () {
//  modal.classList.remove("show");
//  console.log("Нажатие вне формы");
//});

modal.addEventListener("submit", function (evt) {
  if (!checkOut.value || !checkIn.value || !people[0].value || !people[1].value) {
      evt.preventDefault();
      modal.classList.add("modal-error");
      console.log("no submit");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("show")) {
        evt.preventDefault();
        modal.classList.remove("show");
        modal.classList.remove("modal-error");
      }
    }
  });
