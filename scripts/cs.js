// const botao = document.getElementById("topo");

// if (botao) {
//     botao.addEventListener("click", () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });

//     window.addEventListener("scroll", () => {
//         botao.style.display = window.scrollY > 300 ? "block" : "none";
//     });
// }

const botoesJogador = document.querySelectorAll(".player-trigger");
const modalTitulo = document.getElementById("modalJogadorTitulo");
const modalTexto = document.getElementById("modalJogadorTexto");
const modalFoto = document.getElementById("modalJogadorFoto");

botoesJogador.forEach((botaoJogador) => {
    botaoJogador.addEventListener("click", () => {
        modalTitulo.textContent = botaoJogador.dataset.name;
        modalTexto.textContent = botaoJogador.dataset.history;
        modalFoto.src = botaoJogador.dataset.image;
        modalFoto.alt = `Foto de ${botaoJogador.dataset.name}`;
    });
});