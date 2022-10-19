let searchForm = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = "0.7";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = "1";
}
//!dark/Light Mode
const darkModeToggle = document.querySelector("#dark-mode-toggle");
let light = document.querySelector(".lightmode");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

light.addEventListener("click", function (light) {
  light.target.classList.toggle("darkModeIcon");
});
