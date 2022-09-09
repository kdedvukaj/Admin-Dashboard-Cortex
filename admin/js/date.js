//Script for updating the date input on book rental by adding 30 days

let mainDate = document.querySelector("#main-date");
let secondDate = document.querySelector("#second-date");

mainDate.addEventListener("input", () => {
  let fixedDate = new Date(mainDate.value);
  fixedDate.setDate(fixedDate.getDate() + 30);
  secondDate.value = fixedDate.toISOString("yyyy-MM-dd").split("T")[0];
});
