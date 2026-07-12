const header = document.querySelector("header");
const banner = document.querySelector("#banner");

window.addEventListener("scroll", () => {
    const ponto = banner.offsetHeight - 100; // 80px antes do fim do banner

    if (window.scrollY >= ponto) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});