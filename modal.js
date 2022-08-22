let modal = document.querySelector("#modal");
let overlay = document.querySelector("#overlay");
let resetPsw = document.querySelector("#reset-psw");
let closeModalBtn = document.querySelector("#close-modal");
let bxEditBtns = document.querySelectorAll("#bx-edit-book");
console.log(bxEditBtns);

bxEditBtns.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });
});

overlay.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

resetPsw.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}
