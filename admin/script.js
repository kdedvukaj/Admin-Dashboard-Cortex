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

function toggleCheck(source) {
  checkboxes = document.getElementsByName("check");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}

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

function tableSearch() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("searchTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function deleteRow(r) {
  let text = "Do you really want to delete?";
  if (confirm(text) == true) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("searchTable").deleteRow(i);
  }
}

// // Remove Profile Dropdown by clicking outside btn for Mobile
// window.addEventListener("touchend", (e) => {
//   if (e.target !== dropLink) {
//     profile.classList.remove("open");
//   }
// });

// MODAL AND OVERLAY PART

// By clicking on resetpsw btn open the modal
// resetPsw.addEventListener("click", function () {
//   modal.classList.add("open");
//   overlay.classList.add("open");
// });

// closeModalBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// function closeModal() {
//   modal.classList.remove("open");
//   overlay.classList.remove("open");
// }

ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
  console.error(error);
});