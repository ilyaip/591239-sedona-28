let modalButton = document.querySelector(".search-hotels");
let modal = document.querySelector(".search-form");
let checkIn = modal.querySelector(".input-check-in");
let checkOut = modal.querySelector(".input-check-out");
let people = modal.querySelectorAll(".check-button");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("parents");
  storage = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

modal.classList.add("show-none");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("show");
  modal.classList.toggle("animation");
  checkIn.focus();
  if (modal.classList.contains("show")) {modal.classList.remove("modal-error");};
  if (storage) {
    people[0].value = storage;
    people[1].value = storage;
  }
  console.log("Нажата кнопка");
});

document.addEventListener('click', function(evt) {
    var isClickInsideModal = modal.contains(evt.target);
    var isClickInsideModalButton = modalButton.contains(evt.target);
    if (!isClickInsideModal && !isClickInsideModalButton) {
      modal.classList.remove("show");
      console.log("Нажатие вне формы");
    }
});

modal.addEventListener("submit", function (evt) {
  if (!checkOut.value || !checkIn.value || !people[0].value || !people[1].value) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
      console.log("no submit");
    } else { if (isStorageSupport) {
            localStorage.setItem("parents", people[0].value);
            localStorage.setItem("child", people[1].value); }
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
