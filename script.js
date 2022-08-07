//Select all elements
let body = document.querySelector("body");
let sidebar = document.querySelector("nav");
let toggle = document.querySelector(".toggle");
let toggleCh = document.querySelector(".toggle-ch");
let dropdown = document.querySelector(".dropdown");
let dropdownBtn = document.querySelector(".dropdown-btn");
let dropLink = document.querySelector(".drop-link");
let profile = document.querySelector(".profile");
let imgBtn = document.querySelector(".img-btn");

// Open - Close Sidebar menu icon
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  body.classList.toggle("open");
});

// Open - Close Sidebar chevron icon
toggleCh.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  body.classList.toggle("open");
});

// Create btn
dropdownBtn.addEventListener("click", function () {
  dropdown.classList.toggle("open");
});

// Profile Btn
profile.addEventListener("click", function () {
  profile.classList.toggle("open");
});

// Remove Create Dropdown by clicking outside btn
window.addEventListener("click", (e) => {
  if (e.target !== dropdownBtn) {
    dropdown.classList.remove("open");
  }
});

// // Remove Create Dropdown by clicking outside btn for Mobile
// window.addEventListener("touchend", (e) => {
//   if (e.target !== dropLink) {
//     dropdown.classList.remove("open");
//   }
// });

// Remove Profile Dropdown by clicking outside btn
window.addEventListener("click", (e) => {
  if (e.target !== imgBtn) {
    profile.classList.remove("open");
  }
});

// // Remove Profile Dropdown by clicking outside btn for Mobile
// window.addEventListener("touchend", (e) => {
//   if (e.target !== dropLink) {
//     profile.classList.remove("open");
//   }
// });
