const nav = document.querySelector("nav");
const button = document.querySelector("#hamburger");
const menu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
});

button.addEventListener("click", () => {
    menu.classList.toggle("open");
    button.textContent = menu.classList.contains("open") ? "✕" : "☰";
});

document.addEventListener("click", (event) => {
    if (!menu.classList.contains("open")) return;
    if (nav.contains(event.target)) return;
    menu.classList.remove("open");
    button.textContent = "☰";
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        button.textContent = "☰";
    });
});