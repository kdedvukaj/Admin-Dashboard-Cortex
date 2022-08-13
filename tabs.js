function openTabs(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("form-main");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hide");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).classList.toggle("hide");
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
