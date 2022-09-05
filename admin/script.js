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

let mainDate = document.querySelector("#main-date");
let secondDate = document.querySelector("#second-date");

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Trenutno Stanje Knjiga",
    },
    axisY: {
      suffix: "%",
    },

    data: [
      {
        type: "column",
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: [
          { label: "Izdate", y: 71 },
          { label: "Vracene", y: 67 },
          { label: "Prekoracenju", y: 50 },
          { label: "Aktivne", y: 56 },
          { label: "Arhivirane", y: 30 },
        ],
      },
    ],
  });
  chart.render();
};

function toggleCheck(source) {
  let tableHead = document.querySelector("#table-head");
  let deleteTable = document.querySelector("#delete-table");
  checkboxes = document.getElementsByName("check");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
  deleteTable.classList.toggle("hide");
  tableHead.classList.toggle("hide");
}

function toggleCheckRemove(source) {
  let tableHead = document.querySelector("#table-head");
  let deleteTable = document.querySelector("#delete-table");
  let mainCheck = document.querySelector("#main-check");
  checkboxes = document.getElementsByName("check");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = false;
  }
  mainCheck.checked = false;
  deleteTable.classList.add("hide");
  tableHead.classList.remove("hide");
}

function toggleCheckBtn(source) {
  let btnPrimary = document.querySelector(".btn-group .btn-primary");
  if (source.checked) {
    btnPrimary.style.display = "inline";
  } else {
    btnPrimary.style.display = "none";
  }
}

function toggleCheckHide(source) {
  let editTable = document.querySelector("#edit-table");
  let tableHead = document.querySelector("#table-head");
  if (source.checked) {
    editTable.classList.remove("hide");
    tableHead.classList.add("hide");
  } else {
    editTable.classList.add("hide");
    tableHead.classList.remove("hide");
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

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Trenutno Stanje Knjiga",
    },
    axisY: {
      suffix: "%",
    },

    data: [
      {
        type: "column",
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: [
          { label: "Izdate", y: 71 },
          { label: "Vracene", y: 67 },
          { label: "Prekoracenju", y: 50 },
          { label: "Aktivne", y: 56 },
          { label: "Arhivirane", y: 30 },
        ],
      },
    ],
  });
  chart.render();
};

mainDate.addEventListener("input", () => {
  console.log(mainDate.value);
  let fixedDate = new Date(mainDate.value);
  fixedDate.setDate(fixedDate.getDate() + 30);
  secondDate.value = fixedDate.toISOString("yyyy-MM-dd").split("T")[0];
});

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
