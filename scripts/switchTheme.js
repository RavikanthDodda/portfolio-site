let root = document.documentElement;
function changeTheme() {
  var mode = document.getElementById("theme-btn").children[0];
  if (mode.classList[1] === "fa-moon") {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");
    root.style.setProperty("--primary-bg", "#181818");
    root.style.setProperty("--secondary-bg", "#333333");
    root.style.setProperty("--accent-color", "white");
    root.style.setProperty("--text-primary", "white");
  } else {
    mode.classList.add("fa-moon");
    mode.classList.remove("fa-sun");
    root.style.setProperty("--primary-bg", "white");
    root.style.setProperty("--secondary-bg", "white");
    root.style.setProperty("--accent-color", "black");
    root.style.setProperty("--text-primary", "black");
  }
}
