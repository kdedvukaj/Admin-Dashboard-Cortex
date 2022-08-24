let adminUsername = "admin";
let adminPass = "admin123";
let inputUser = document.querySelector("#inputUser");
let inputPsw = document.querySelector("#inputPass");

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();

  if (inputUser.value == adminUsername && inputPsw.value == adminPass) {
    console.log("Hiii");
    window.location.href = "./admin/index.html";
  }
};
