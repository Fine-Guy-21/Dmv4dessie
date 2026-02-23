const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.querySelectorAll("#navMenu a");
const donateButton = document.getElementById("dontate-button");

// donate button

donateButton.addEventListener("click", () => {
  window.location.href = "donation.html";
});

// mobile responsive drawer
function openDrawer() {
  navMenu.classList.add("active");
  overlay.classList.add("active");
}

function closeDrawer() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

hamburger.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

navLinks.forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

// Highlight active nav link
const currentPath = window.location.pathname.split("/").pop();
const navLinksActive = document.querySelectorAll("#navMenu a");
navLinksActive.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

function displayDimensions() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const h2 = document.createElement("h2");
  h2.innerText = `Current Width: ${width}px, Current Height: ${height}px`;

  document.querySelector(".debug").appendChild(h2);
}

displayDimensions();
// 1580 px
// 1280 px
