let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight =
  window.screen.width < 868
    ? document.getElementById("nav-btn").clientHeight
    : document.getElementById("nav-wrapper").clientHeight;
let nav = document.body.offsetWidth >= 868 ? "nav-wrapper" : "nav-btn";
window.addEventListener("scroll", function (event) {
  didScroll = true;
});
let isNavVis;

// Called every 250 ms
setInterval(function () {
  nav = document.body.offsetWidth >= 868 ? "nav-wrapper" : "nav-btn";
  if (didScroll) {
    navbarHeight =
      document.body.offsetWidth < 868
        ? document.getElementById("nav-btn").clientHeight
        : document.getElementById("nav-wrapper").clientHeight;
    isNavVis = document.body.offsetWidth > 768 ? undefined : isNavVis;
    hasScrolled();
    didScroll = false;
  }
}, 250);

// called on scroll event
function hasScrolled() {
  let st = window.scrollY;
  let navUp = "nav-down";
  let navDown = "nav-up";
  if (nav !== "nav-btn") {
    navUp = "nav-up";
    navDown = "nav-down";
  }
  if (st > 0 && st < lastScrollTop) {
    document.getElementById("nav-wrapper").classList.add("box");
  } else {
    document.getElementById("nav-wrapper").classList.remove("box");
  }
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    document.getElementById(nav).classList.remove(navUp);
    document.getElementById(nav).classList.add(navDown);
    document.getElementById("theme-btn").classList.remove(navUp);
    document.getElementById("theme-btn").classList.add(navDown);
    if (isNavVis) {
      toggleNavBar();
    }
  } else {
    // if (st + window.innerHeight < document.height) {
    document.getElementById(nav).classList.remove(navDown);
    document.getElementById(nav).classList.add(navUp);
    document.getElementById("theme-btn").classList.remove(navDown);
    document.getElementById("theme-btn").classList.add(navUp);
  }

  if (nav === "nav-btn" && isNavVis === undefined) {
    document.getElementById("nav-wrapper").classList.remove("nav-down");
    document.getElementById("nav-wrapper").classList.add("nav-up");
    isNavVis = true;
  }
  lastScrollTop = st;
}

// called whenever nav btn is pressed
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
