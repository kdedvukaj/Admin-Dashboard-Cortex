let modal = document.querySelector("#modal");
let overlay = document.querySelector("#overlay");
let resetPsw = document.querySelector("#reset-psw");
let closeModalBtn = document.querySelector("#close-modal");

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
