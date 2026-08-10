const herois = [
{
    nome: "Shion",
    classe: "Dano",
    imagem: "imgs/shion.avif"
},
{
    nome: "Anran",
    classe: "Dano",
    imagem: "imgs/anran.webp"
},
{
    nome: "Ashe",
    classe: "Dano",
    imagem: "imgs/ashe.png"
},
{
    nome: "Bastion",
    classe: "Dano",
    imagem: "imgs/bastion.jpg"
},
{
    nome: "Cassidy",
    classe: "Dano",
    imagem: "imgs/cassidy.png"
},
{
    nome: "Echo",
    classe: "Dano",
    imagem: "imgs/echo.png"
},
{
    nome: "Emre",
    classe: "Dano",
    imagem: "imgs/emre.png"
},
{
    nome: "Freja",
    classe: "Dano",
    imagem: "imgs/freja.png"
},
{
    nome: "Genji",
    classe: "Dano",
    imagem: "imgs/genji-00.avif"
},
{
    nome: "Hanzo",
    classe: "Dano",
    imagem: "imgs/hanzo.png"
},
{
    nome: "Junkrat",
    classe: "Dano",
    imagem: "imgs/junkrat.png"
},
{
    nome: "Mei",
    classe: "Dano",
    imagem: "imgs/mei.png"
},
{
    nome: "Pharah",
    classe: "Dano",
    imagem: "imgs/pharah.png"
},
{
    nome: "Reaper",
    classe: "Dano",
    imagem: "imgs/reaper.png"
},
{
    nome: "Sierra",
    classe: "Dano",
    imagem: "imgs/sierra.png"
},
{
    nome: "Sojourn",
    classe: "Dano",
    imagem: "imgs/1280127.png"
},
{
    nome: "Soldier: 76",
    classe: "Dano",
    imagem: "imgs/soldier.png"
},
{
    nome: "Sombra",
    classe: "Dano",
    imagem: "imgs/sombra.png"
},
{
    nome: "Symmetra",
    classe: "Dano",
    imagem: "imgs/symmetra.png"
},
{
    nome: "Torbjörn",
    classe: "Dano",
    imagem: "imgs/torb.png"
},
{
    nome: "Tracer",
    classe: "Dano",
    imagem: "imgs/tracer3.png"
},
{
    nome: "Vendetta",
    classe: "Dano",
    imagem: "imgs/vendetta.png"
},
{
    nome: "Venture",
    classe: "Dano",
    imagem: "imgs/venture.png"
},
{
    nome: "Widowmaker",
    classe: "Dano",
    imagem: "imgs/widowmaker.png"
},

{
    nome: "Ana",
    classe: "Suporte",
    imagem: "imgs/ana.webp"
},
{
    nome: "Baptiste",
    classe: "Suporte",
    imagem: "imgs/baptiste.png"
},
{
    nome: "Brigitte",
    classe: "Suporte",
    imagem: "imgs/brigitte.png"
},
{
    nome: "Illari",
    classe: "Suporte",
    imagem: "imgs/illari.png"
},
{
    nome: "Jetpack Cat",
    classe: "Suporte",
    imagem: "imgs/jetpackcat.png"
},
{
    nome: "Juno",
    classe: "Suporte",
    imagem: "imgs/juno.png"
},
{
    nome: "Kiriko",
    classe: "Suporte",
    imagem: "imgs/kirirko.png"
},
{
    nome: "Lifeweaver",
    classe: "Suporte",
    imagem: "imgs/lifeweaver.png"
},
{
    nome: "Lúcio",
    classe: "Suporte",
    imagem: "imgs/lucio.png"
},
{
    nome: "Mercy",
    classe: "Suporte",
    imagem: "imgs/mercy.png"
},
{
    nome: "Mizuki",
    classe: "Suporte",
    imagem: "imgs/mizuki.png"
},
{
    nome: "Moira",
    classe: "Suporte",
    imagem: "imgs/moira.png"
},
{
    nome: "Wuyang",
    classe: "Suporte",
    imagem: "imgs/wuyang.png"
},
{
    nome: "Zenyatta",
    classe: "Suporte",
    imagem: "imgs/zenyattta.png"
},

{
    nome: "D.Va",
    classe: "Tanque",
    imagem: "imgs/dva.png"
},
{
    nome: "Domina",
    classe: "Tanque",
    imagem: "imgs/domina.png"
},
{
    nome: "Doomfist",
    classe: "Tanque",
    imagem: "imgs/doomfist.png"
},
{
    nome: "Hazard",
    classe: "Tanque",
    imagem: "imgs/hazard.png"
},
{
    nome: "Junker Queen",
    classe: "Tanque",
    imagem: "imgs/junkerqueen.png"
},
{
    nome: "Mauga",
    classe: "Tanque",
    imagem: "imgs/mauga.png"
},
{
    nome: "Orisa",
    classe: "Tanque",
    imagem: "imgs/orisa.png"
},
{
    nome: "Ramattra",
    classe: "Tanque",
    imagem: "imgs/ramattra.png"
},
{
    nome: "Reinhardt",
    classe: "Tanque",
    imagem: "imgs/reindhardt.png"
},
{
    nome: "Roadhog",
    classe: "Tanque",
    imagem: "imgs/roadhog.avif"
},
{
    nome: "Sigma",
    classe: "Tanque",
    imagem: "imgs/sigma.png"
},
{
    nome: "Winston",
    classe: "Tanque",
    imagem: "imgs/winston.png"
},
{
    nome: "Wrecking Ball",
    classe: "Tanque",
    imagem: "imgs/wrecking-ball-batalha.avif"
},
{
    nome: "Zarya",
    classe: "Tanque",
    imagem: "imgs/zarya.png"
}
];

const container = document.getElementById("cards-herois");

herois.forEach(heroi => {

    const card = document.createElement("div");

    card.classList.add("card-heroi");

    card.innerHTML = `
        <img src="${heroi.imagem}" alt="${heroi.nome}">

        <div class="info-heroi">
            <h2>${heroi.nome}</h2>
            <p>${heroi.classe}</p>
        </div>
    `;

    container.appendChild(card);
});