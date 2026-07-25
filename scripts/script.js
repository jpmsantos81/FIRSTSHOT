//faz a navbar ficar transparente
const header = document.querySelector("header");
const banner = document.querySelector("#banner");
window.addEventListener("scroll", () => {
    
    if (window.scrollAutomatico) {
        header.classList.remove("scrolled");
        return;
    }

    const ponto = banner.offsetHeight - 200;
    if (window.scrollY >= ponto) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


//faz o nav bar só ficar invisivel se o usuario mexer e scroll automatico for false
window.scrollAutomatico = false;
function scrollDoUser() {window.scrollAutomatico = false;}
window.addEventListener("wheel", scrollDoUser);
window.addEventListener("touchmove", scrollDoUser);
window.addEventListener("keydown", scrollDoUser);
window.addEventListener("mousedown", scrollDoUser);
