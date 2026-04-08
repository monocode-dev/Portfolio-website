const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const opacity = Math.max(0, 1 - scroll / 400);
    nav.style.background = `rgba(32, 32, 32,${opacity})`;;
            });