// ========================================
// MENU MOBILE
// ========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        if (nav.style.display === "flex") {

            nav.style.display = "none";

        } else {

            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "75px";
            nav.style.left = "0";
            nav.style.width = "100%";
            nav.style.padding = "25px";
            nav.style.background = "#090909";
        }

    });

}


// ========================================
// ESCOLHA SEU ESTILO
// ========================================

const botoes = document.querySelectorAll(".style-button");
const descricao = document.getElementById("styleDescription");


// Conteúdo de cada estilo

const estilos = {

    agressivo: {

        titulo: "ESTILO AGRESSIVO",

        texto:
            "Jogadores que gostam de avançar rapidamente, " +
            "pressionar os adversários e procurar confrontos " +
            "constantemente."

    },


    estrategico: {

        titulo: "ESTILO ESTRATÉGICO",

        texto:
            "Prioriza posicionamento, observação do mapa e " +
            "tomada de decisões antes de avançar. É ideal para " +
            "quem prefere pensar alguns passos à frente."

    },


    suporte: {

        titulo: "ESTILO DE SUPORTE",

        texto:
            "O foco está em ajudar a equipe, proteger posições " +
            "importantes e contribuir para que os companheiros " +
            "consigam completar os objetivos."

    },


    explorador: {

        titulo: "ESTILO EXPLORADOR",

        texto:
            "Valoriza a exploração do mapa, descoberta de rotas " +
            "alternativas e adaptação ao ambiente durante a partida."

    }

};


// ========================================
// BOTÕES DE ESTILO
// ========================================

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        // Remove o destaque de todos os botões

        botoes.forEach(function (b) {

            b.classList.remove("active");

        });


        // Destaca o botão selecionado

        botao.classList.add("active");


        // Descobre qual estilo foi escolhido

        const estiloEscolhido =
            botao.getAttribute("data-style");


        // Procura as informações do estilo

        const estilo =
            estilos[estiloEscolhido];


        // Verifica se o estilo existe

        if (!estilo || !descricao) {
            return;
        }


        // Atualiza o conteúdo

        descricao.innerHTML = `
            <h3>${estilo.titulo}</h3>

            <p>
                ${estilo.texto}
            </p>
        `;

    });

});


// ========================================
// FECHAR MENU MOBILE
// ========================================

const links =
    document.querySelectorAll(".navbar nav a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 900 && nav) {

            nav.style.display = "none";

        }

    });

});


// ========================================
// AJUSTAR MENU AO REDIMENSIONAR
// ========================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 900 && nav) {

        nav.style.display = "flex";

        nav.style.flexDirection = "";
        nav.style.position = "";
        nav.style.top = "";
        nav.style.left = "";
        nav.style.width = "";
        nav.style.padding = "";
        nav.style.background = "";

    }

});