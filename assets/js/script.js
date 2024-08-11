// Toggle Button
const navbar = document.querySelector(".navbar-list");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});
