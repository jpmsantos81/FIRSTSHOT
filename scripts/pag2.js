carregar();

//usa a api do valorant e coloca na tela
async function carregar() {
    const json = await fetch("https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true");
    const personagens = (await json.json()).data;

    const lista = document.getElementById("agentes");

    personagens.forEach(a => {
        const card = document.createElement("div");
        const figure = document.createElement("figure");
        const nome = document.createElement("h3");
        const gradiente = a.backgroundGradientColors.map(cor => `#${cor}`).join(", ");

        card.className = "card";
        card.style.background = `linear-gradient(135deg, ${gradiente})`;
        figure.style.backgroundImage = `url(${a.displayIcon})`;
        nome.innerHTML = `<span class="Valorant">${a.displayName}</span>`;

        card.addEventListener('click', () => {
            mostrarAgente(a);
        })

        card.appendChild(figure);
        card.appendChild(nome);
        lista.appendChild(card);
    });
}
let agenteAtual = false;
//mostra o agente na modal da tela
function mostrarAgente(agente){
    document.querySelector("#infosDoAgente").scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
    });
    if(agente == agenteAtual) return;
    const hab1 = agente.abilities.filter(a => a.slot == "Ability1")[0];
    const hab2 = agente.abilities.filter(a => a.slot == "Ability2")[0];
    const hab3 = agente.abilities.filter(a => a.slot == "Grenade")[0];
    const hab4 = agente.abilities.filter(a => a.slot == "Ultimate")[0];
    
    const sk1 = document.getElementById("skill1");
    const sk2 = document.getElementById("skill2");
    const sk3 = document.getElementById("skill3");
    const sk4 = document.getElementById("skill4");
    
    const cores = agente.backgroundGradientColors; 

    document.getElementById("nome").innerText = agente.displayName;
    document.getElementById("desc").innerText = agente.description;
    document.getElementById("img-fundo").src = agente.background;
    document.getElementById("img-agente").src = agente.fullPortrait;

    document.querySelector('.conteudo').style.backgroundImage = `linear-gradient(135deg,#${cores[0]},#${cores[1]},#${cores[2]},#${cores[3]})`;

    sk1.src = hab1.displayIcon;
    sk2.src = hab2.displayIcon;
    sk3.src = hab3.displayIcon;
    sk4.src = hab4.displayIcon;
    
    if(agenteAtual)
    {
        const hab1Antigo = agenteAtual.abilities.filter(a => a.slot == "Ability1")[0]
        const hab2Antigo = agenteAtual.abilities.filter(a => a.slot == "Ability2")[0];
        const hab3Antigo = agenteAtual.abilities.filter(a => a.slot == "Grenade")[0];;
        const hab4Antigo = agenteAtual.abilities.filter(a => a.slot == "Ultimate")[0];;

        sk1.removeEventListener("click", () => mostrarHabilidades(hab1Antigo));
        sk2.removeEventListener("click", () => mostrarHabilidades(hab2Antigo));
        sk3.removeEventListener("click", () => mostrarHabilidades(hab3Antigo));
        sk4.removeEventListener("click", () => mostrarHabilidades(hab4Antigo));
    }

    sk1.addEventListener("click", () => mostrarHabilidades(hab1));
    sk2.addEventListener("click", () => mostrarHabilidades(hab2));
    sk3.addEventListener("click", () => mostrarHabilidades(hab3));
    sk4.addEventListener("click", () => mostrarHabilidades(hab4));


    mostrarHabilidades(hab1);

    document.getElementById('infosDoAgente').classList.remove('oculto');
    
    document.querySelector("#infosDoAgente").scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
    });
    agenteAtual = agente;
}
function mostrarHabilidades(h){
    document.getElementById("nome-habilidade").innerText = h.displayName;
    document.getElementById("desc-habilidade").innerText = h.description;
}