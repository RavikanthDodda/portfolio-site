function nextItems() {
  let hiddenItems = document.getElementsByClassName("disabled-item");
  let visibleItems = document.getElementsByClassName("grid-item");
  console.log(visibleItems[0]);
  for (i = 0; i < visibleItems.length; i++) {
    visibleItems[i].classList.remove("grid-item");
    visibleItems[i].classList.add("disabled-item");
  }
  for (i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove("disabled-item");
    hiddenItems[i].classList.add("grid-item");
  }
}
