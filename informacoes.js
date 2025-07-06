(function () {
    const livros = document.getElementById("livros")
    const musicas = document.getElementById("musicas")
    const descricaoEscolha = document.querySelector(".descricaoDaEscolha")
    const fotoSelecao = document.querySelector(".fotoSelecao")
    const frases = descricaoEscolha.getElementsByTagName("p");
    livros.addEventListener("click", function(){
        frases[0].innerHTML = "As novels de MILGRAM são dividas em duas, na primeira, há 5 prisioneiros, com 3 mortes sendo julgadas. Jacka, uma coelha com chifres de rena, vigia a prisão e impede que os prisioneiros formem laços entre si e a guarda..";
        frases[1].innerHTML = "Todos estando envolvidos de certa forma, com a guarda sendo a vitima de um dos crimes, além de uma prisioneira. Os crimes são extraidos em 'Livros do Pecado', que descrevem de forma objetiva o crime realizado.";
        fotoSelecao.src = "fotos/informacoes/PrimeiroLivro.webp";
        fotoSelecao.classList.add("show")

    })
    musicas.addEventListener("click", function(){
        frases[0].innerHTML = "A serie músical é divida em 3 julgamentos, todos envolvem os mesmos personagens. 10 prisioneiros que não conhecem um ao outros, através de Es, guarda da prisão, serão julgados pela audiência pelos seus crimes.";
        frases[1].innerHTML = "Músicas serão extraídas da mente de cada prisioneiro, mostrando de forma subjetiva como o prisioneiro vê seu crime, deixando a audiência interpretar sua visão e votar com decidir necessário.";
        fotoSelecao.src = "fotos/main/milgram-mobile.webp";
        fotoSelecao.classList.add("show")
    })
})()