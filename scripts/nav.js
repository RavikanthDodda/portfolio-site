let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight =
  window.screen.width < 768
    ? document.getElementById("nav-btn").clientHeight
    : document.getElementById("nav-wrapper").clientHeight;
let nav = window.screen.width >= 768 ? "nav-wrapper" : "nav-btn";
window.addEventListener("scroll", function (event) {
  didScroll = true;
});
let isNavVis;
setInterval(function () {
  if (didScroll) {
    navbarHeight =
      window.screen.width < 768
        ? document.getElementById("nav-btn").clientHeight
        : document.getElementById("nav-wrapper").clientHeight;
    nav = window.screen.width >= 768 ? "nav-wrapper" : "nav-btn";
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  let st = window.scrollY;
  let navUp = "nav-down";
  let navDown = "nav-up";
  if (nav !== "nav-btn") {
    navUp = "nav-up";
    navDown = "nav-down";
    if (st > navbarHeight && st < lastScrollTop) {
      document.getElementById("nav-wrapper").classList.add("box");
    } else {
      document.getElementById("nav-wrapper").classList.remove("box");
    }
  }
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    document.getElementById(nav).classList.remove(navUp);
    document.getElementById(nav).classList.add(navDown);
    if (isNavVis) {
      toggleNavBar();
    }
  } else {
    // if (st + window.innerHeight < document.height) {
    document.getElementById(nav).classList.remove(navDown);
    document.getElementById(nav).classList.add(navUp);
  }
  lastScrollTop = st;
}

function toggleNavBar() {
  if (isNavVis) {
    document.getElementById("nav-wrapper").classList.remove("nav-down");
    document.getElementById("nav-wrapper").classList.add("nav-up");
    document.getElementById("nav-btn").children[0].classList.remove("fa-times");
    document.getElementById("nav-btn").children[0].classList.add("fa-bars");
    isNavVis = false;
  } else {
    document.getElementById("nav-wrapper").classList.remove("nav-up");
    document.getElementById("nav-wrapper").classList.add("nav-down");
    document.getElementById("nav-btn").children[0].classList.add("fa-times");
    document.getElementById("nav-btn").children[0].classList.remove("fa-bars");
    isNavVis = true;
  }
}
