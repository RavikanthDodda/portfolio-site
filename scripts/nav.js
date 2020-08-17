var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight =
  window.screen.width < 768
    ? document.getElementById("nav-btn").clientHeight
    : document.getElementById("nav-wrapper").clientHeight;
var nav = window.screen.width >= 768 ? "nav-wrapper" : "nav-btn";
window.addEventListener("scroll", function (event) {
  didScroll = true;
});
var isNavVis;
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
  var st = window.scrollY;
  if (nav !== "nav-btn")
    if (st > navbarHeight) {
      document.getElementById(nav).style.backgroundColor = "black";
    } else {
      document.getElementById(nav).style.backgroundColor = "white";
    }
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    document.getElementById(nav).classList.remove("nav-up");
    document.getElementById(nav).classList.add("nav-down");
  } else {
    // if (st + window.innerHeight < document.height) {
    document.getElementById(nav).classList.remove("nav-down");
    document.getElementById(nav).classList.add("nav-up");
  }
  lastScrollTop = st;
}

function toggleNavBar() {
  if (isNavVis) {
    document.getElementById("nav-wrapper").style.top =
      -document.getElementById("nav-wrapper").clientHeight + "px";
    document.getElementById(nav).children[0].classList.remove("fa-times");
    document.getElementById(nav).children[0].classList.add("fa-bars");
    isNavVis = false;
  } else {
    document.getElementById("nav-wrapper").style.top = 0;
    document.getElementById(nav).children[0].classList.add("fa-times");
    document.getElementById(nav).children[0].classList.remove("fa-bars");
    isNavVis = true;
  }
}
