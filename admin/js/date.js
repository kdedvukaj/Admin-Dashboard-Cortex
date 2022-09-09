mainDate.addEventListener("input", () => {
  let fixedDate = new Date(mainDate.value);
  fixedDate.setDate(fixedDate.getDate() + 30);
  secondDate.value = fixedDate.toISOString("yyyy-MM-dd").split("T")[0];
});
