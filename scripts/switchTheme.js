let root = document.documentElement;
changeTheme(false);
function changeTheme(toggle) {
  let themeBtn = document.getElementById("theme-btn").children[0];
  let mode =
    root.style.getPropertyValue("--accent-color") === "white"
      ? "light"
      : "dark";
  console.log(mode);
  if (!toggle) {
    mode = localStorage.getItem("theme");
  }
  if (typeof mode === "undefined" || mode === "dark") {
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
    root.style.setProperty("--primary-bg", "#181818");
    root.style.setProperty("--secondary-bg", "#333333");
    root.style.setProperty("--accent-color", "white");
    root.style.setProperty("--text-primary", "white");
    root.style.setProperty("--text-secondary", "rgb(182, 175, 163)");
    root.style.setProperty("--button-border", "#383838");
    root.style.setProperty("--btn-color", " #66c2ff");
    localStorage.setItem("theme", "dark");
  } else {
    console.log("black2");
    themeBtn.classList.add("fa-moon");
    themeBtn.classList.remove("fa-sun");
    root.style.setProperty("--primary-bg", "white");
    root.style.setProperty("--secondary-bg", "white");
    root.style.setProperty("--accent-color", "black");
    root.style.setProperty("--text-primary", "black");
    root.style.setProperty("--text-secondary", "#333333");
    root.style.setProperty("--button-border", "white");
    root.style.setProperty("--btn-color", " #006bb3");
    localStorage.setItem("theme", "light");
  }
}
