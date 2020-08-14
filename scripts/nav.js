var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.getElementById("nav-wrapper").clientHeight;
window.addEventListener("scroll", function (event) {
  didScroll = true;
});
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var st = window.scrollY;
  console.log(st);
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    document.getElementById("nav-wrapper").classList.remove("nav-up");
    document.getElementById("nav-wrapper").classList.add("nav-down");
  } else {
    // if (st + window.innerHeight < document.height) {
    document.getElementById("nav-wrapper").classList.remove("nav-down");
    document.getElementById("nav-wrapper").classList.add("nav-up");
  }

  lastScrollTop = st;
}
