const nav = document.querySelector("nav");
const button = document.querySelector("#hamburger");
const li = document.querySelectorAll("li")

let open = false;

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const opacity = Math.max(0, 1 - scroll / 400);
    nav.style.background = `rgba(32, 32, 32,${opacity})`;;
});


button.addEventListener("click", event =>{
    if(!open){
        event.target.textContent = "✖";
        nav.classList.add("hamburger");
        li.forEach(item =>{
            item.style.display = "block";
            item.style.margin = "15px 0px"
        })
        open = true;
    }else{
        event.target.textContent = "☰"
        nav.classList.remove("hamburger")
        li.forEach(item =>{
            item.style.display = "none"
        })
        open = false;
    }
});