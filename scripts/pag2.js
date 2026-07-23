carregar();

//usa a api do valorant e coloca na tela
async function carregar() {
    const json = await fetch("https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true");
    const personagens = (await json.json()).data;

    console.log(personagens);

    const lista = document.getElementById("lista");

    personagens.forEach(a => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML =`
        <img src="${a.displayIcon}">
        <h2>${a.displayName}</h2>`

        lista.appendChild(card);
    });
}