# FIRSTSHOT

## Home

A Home do FIRSTSHOT foi desenvolvida como uma página inicial para apresentar os quatro jogos disponíveis no projeto: **Overwatch, Valorant, Call of Duty e Counter-Strike**.

A estrutura principal foi criada no arquivo `index.html`, enquanto a estilização específica da página está no `css/index.css`. Algumas funcionalidades de interação e animação foram implementadas em `scripts/script.js`.

### Estrutura da Home

A página começa com um **header fixo**, contendo a logo do FIRSTSHOT. A logo também funciona como um link para o início da página.

Logo abaixo existe um **banner principal**, utilizando a imagem `BannerFirstShot.png` como plano de fundo.

Depois do banner, a Home é dividida em quatro seções, uma para cada jogo.

Cada seção possui:

* Uma frase de destaque;
* O nome do jogo;
* Uma descrição curta;
* Uma imagem relacionada ao jogo;
* Um botão para acessar sua página específica.

As seções foram organizadas alternando a posição do texto e da imagem para criar uma apresentação visual diferente entre os jogos.

### Estilização

A página utiliza uma estrutura baseada em **CSS Grid** para organizar cada seção em duas colunas. Em telas maiores, uma coluna contém o conteúdo textual e a outra contém a imagem.

O espaçamento do conteúdo utiliza `clamp()`, permitindo que o padding se adapte ao tamanho da tela.

As imagens ocupam toda a área disponível utilizando `object-fit: cover`.

Cada jogo também possui uma identidade visual própria através de cores diferentes:

* **Overwatch:** tons escuros com destaque amarelo;
* **Valorant:** vermelho;
* **Call of Duty:** preto e vermelho;
* **Counter-Strike:** tons escuros com amarelo.

### Responsividade

Quando a largura da tela é menor que `700px`, a estrutura de duas colunas passa para uma única coluna.

As imagens também recebem uma altura fixa de `250px`, enquanto o conteúdo textual recebe um espaçamento menor nas laterais.

Além disso, em algumas seções a ordem dos elementos é alterada para que a imagem apareça antes do texto no celular.

### Animações

As seções da Home possuem uma animação de entrada.

Para isso, o JavaScript utiliza `IntersectionObserver` para verificar quando uma seção aparece na tela. Quando isso acontece, a classe `apareceu` é adicionada ao elemento.

O CSS então executa a animação `aparecer`, fazendo o conteúdo surgir com uma transição de baixo para cima e aumento gradual da opacidade.

### Header durante a rolagem

O `script.js` também controla a aparência do header durante a rolagem.

Quando o usuário passa determinado ponto do banner, a classe `scrolled` é adicionada ao header. Essa classe altera o fundo para uma versão mais transparente e aplica um pequeno efeito de desfoque.

---

### Desenvolvedores

| Integrante | GitHub | Página |
|---|---|---|
| Arthur Franco | [@arthur-tuko](https://github.com/arthur-tuko) | Call of Duty |
| Arthur Gomes | [@gomes-hma](https://github.com/gomes-hma) | Overwatch |
| João Pedro | [@jpmsantos81](https://github.com/jpmsantos81) | Home, Valorant |
| Matheus Torres | [@betegatorres](https://github.com/betegatorres) | Counter Strike |

---

### Jogos Apresentados

<details>
<summary>Overwatch</summary>

# Página de Overwatch

A página de Overwatch foi criada para apresentar os heróis do jogo de forma dinâmica.

O arquivo principal da página é `ow.html`, que utiliza `css/style.css`, `css/pag2.css` e `css/ow.css` para sua estrutura visual.

## Estrutura

A página possui:

* Header com a logo do FIRSTSHOT;
* Logo do Overwatch;
* Banner específico do jogo;
* Seção de heróis;
* Cards dos personagens;
* Footer.

Os cards não são escritos individualmente no HTML. Eles são criados pelo JavaScript a partir de uma lista de heróis.

## JavaScript

O arquivo `scripts/ow.js` contém um array chamado `herois`.

Cada objeto possui:

* Nome do herói;
* Classe;
* Caminho da imagem.

As classes utilizadas são **Dano, Suporte e Tanque**.

O JavaScript percorre esse array utilizando `forEach()`, cria os elementos HTML dos cards e adiciona cada um ao container `cards-herois`.

Dessa maneira, novos personagens podem ser adicionados alterando apenas os dados do array, sem precisar criar manualmente cada card no HTML.

## Objetivo da página

A proposta dessa página é apresentar os personagens de Overwatch de maneira simples, utilizando uma estrutura de cards gerados automaticamente pelo JavaScript.

## Desenvolvido por Arthur Gomes — gomes-hma

</details>

<details>
<summary>Valorant</summary>

# Página de Valorant

A página de Valorant foi desenvolvida de forma mais dinâmica, utilizando uma API externa para obter as informações dos agentes.

O arquivo principal é `pag2.html`, acompanhado pelos arquivos `css/pag2.css` e `scripts/pag2.js`.

## Estrutura

A página possui:

* Header com a logo do FIRSTSHOT;
* Logo do Valorant;
* Banner;
* Lista de agentes;
* Área de informações do agente selecionado;
* Imagem do agente;
* Descrição;
* Habilidades;
* Ícones das habilidades.

A área de informações inicialmente fica escondida através da classe `oculto`.

## API

Diferentemente da página de Overwatch, os agentes do Valorant não são cadastrados manualmente no JavaScript.

O arquivo `scripts/pag2.js` realiza uma requisição para a **Valorant API**:

`https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true`

Depois da requisição, os dados recebidos são transformados em objetos JavaScript e utilizados para montar os cards dos agentes.

## Cards dos agentes

Para cada agente recebido da API, o JavaScript cria:

* Um card;
* Uma imagem;
* O nome do agente;
* Um fundo utilizando as cores fornecidas pela API.

As cores são transformadas em um `linear-gradient`, fazendo com que cada card tenha uma aparência relacionada ao próprio agente.

## Seleção de agente

Quando um card é clicado, a função `mostrarAgente()` é executada.

Ela atualiza:

* Nome;
* Descrição;
* Imagem de fundo;
* Imagem completa do agente;
* Ícones das quatro habilidades;
* Cores da área de informações.

A página também realiza uma rolagem automática até a área de informações do agente selecionado.

## Habilidades

As quatro habilidades são obtidas através do `slot` fornecido pela API:

* `Ability1`;
* `Ability2`;
* `Grenade`;
* `Ultimate`.

Ao clicar em uma habilidade, o nome e a descrição correspondentes são exibidos na área de detalhes. A habilidade selecionada também recebe a classe `ativo`.

## Objetivo da página

A página utiliza a API para transformar informações externas em uma interface interativa, permitindo visualizar os agentes e suas respectivas habilidades sem precisar cadastrar manualmente todas essas informações no HTML.

</details>

<details>
<summary>Call of Duty</summary>

# Página de Call of Duty

A página de Call of Duty possui uma estrutura diferente das outras páginas do projeto, sendo construída como uma página informativa dividida em várias seções.

O arquivo principal é `pag4.html`, com sua estilização concentrada em `css/pag4.css` e suas interações em `scripts/pag4.js`.

## Estrutura

A página possui:

* Navbar;
* Hero;
* Sobre;
* História;
* Modos de jogo;
* Mapas;
* Armas;
* Escolha de estilo;
* Curiosidades;
* Footer.

A navbar possui links que levam diretamente para as diferentes seções da página através de âncoras HTML.

## Hero

A primeira área apresenta o título **CALL OF DUTY**, uma descrição curta e um botão que direciona o usuário para a seção "Sobre".

Essa seção funciona como apresentação visual da página.

## História

A história da franquia é apresentada através de uma **timeline**, contendo diferentes momentos:

* 2003 — O começo;
* 2007 — Modern Warfare;
* 2010 — Black Ops;
* 2019 — Nova era;
* 2020 — Warzone.

Cada período possui seu ano, título e descrição.

## Modos de jogo

Os modos são apresentados em cards separados:

* Campanha;
* Multiplayer;
* Battle Royale;
* Cooperativo.

Cada card contém uma descrição explicando a proposta daquele modo.

## Mapas e armas

A página possui duas galerias.

A primeira apresenta mapas como:

* Nuketown;
* Rust;
* Shipment;
* Verdansk.

A segunda apresenta categorias de armas:

* Fuzis de assalto;
* Submetralhadoras;
* Fuzis de precisão;
* Escopetas.

## Escolha seu estilo

O JavaScript implementa uma área interativa chamada **Escolha seu estilo**.

O usuário pode selecionar entre:

* Agressivo;
* Estratégico;
* Suporte;
* Explorador.

Cada botão possui um `data-style`, que é utilizado pelo JavaScript para encontrar a descrição correspondente e alterar o conteúdo exibido na tela.

## Menu responsivo

O `pag4.js` também possui lógica para controlar o menu em telas menores.

Em telas mobile, o menu pode ser transformado em uma lista vertical. Ao clicar em um link, o menu é fechado.

Quando a tela volta a ter mais de `900px`, os estilos utilizados no menu mobile são removidos.

## Objetivo da página

A página de Call of Duty funciona como uma apresentação completa da franquia, combinando conteúdo informativo com elementos interativos e galerias de imagens.

</details>

<details>
<summary>Counter-Strike</summary>

# Página de Counter-Strike

A página de Counter-Strike foi desenvolvida utilizando **Bootstrap 5.3.3**, além de HTML, CSS e JavaScript.

O arquivo principal é `pag3.html`, com a estilização específica em `css/cs.css` e as interações em `scripts/cs.js`.

## Estrutura

A página possui uma navbar fixa com links para:

* Início;
* História;
* Como Jogar;
* Jogadores Importantes;
* Curiosidades.

Também possui um banner inicial apresentando o título do jogo e um botão para acessar a seção de história.

## História

A evolução do Counter-Strike é apresentada em uma timeline com diferentes versões e períodos:

* 1999 — O início;
* 2000 — Counter-Strike 1.0;
* 2003 — CS 1.6;
* 2004 — Counter-Strike: Source;
* 2012 — Counter-Strike: Global Offensive;
* 2023 — Counter-Strike 2.

## Versões do jogo

As versões são apresentadas através de um **Carousel do Bootstrap**.

O usuário pode navegar entre diferentes conjuntos de versões utilizando os controles anterior e próximo.

## Como jogar

A página possui uma seção explicando os principais objetivos do jogo, incluindo:

* Plantar ou desarmar a bomba;
* Eliminar o time adversário;
* Administrar a economia;
* Comprar armas e equipamentos.

Também são apresentadas dicas relacionadas à mira, mapas, trabalho em equipe, granadas e comunicação.

## Jogadores importantes

Os jogadores são apresentados em cards.

Cada card possui informações armazenadas em atributos `data-*`, como:

* Nome;
* Imagem;
* Histórico.

Quando um jogador é selecionado, o Bootstrap abre um **Modal**. O JavaScript utiliza os valores desses atributos para preencher dinamicamente o conteúdo do modal.

Os jogadores apresentados são:

* FalleN;
* Coldzera;
* s1mple;
* ZywOo.

## Curiosidades

As curiosidades são organizadas utilizando o componente **Accordion do Bootstrap**, permitindo que o usuário abra e feche cada informação individualmente.

## Objetivo da página

A página combina conteúdo histórico, informações sobre gameplay e elementos interativos do Bootstrap para criar uma apresentação completa sobre o Counter-Strike.

</details>
