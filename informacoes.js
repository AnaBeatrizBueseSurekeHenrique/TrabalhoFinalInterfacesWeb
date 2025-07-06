(function () {
    const livros = document.getElementById("livros")
    const musicas = document.getElementById("musicas")
    const descricaEscolha = document.querySelector(".descricacaoDaEscolha")
    const fotoSelecao = document.querySelector(".fotoSelecao")
    const frases = descricaEscolha.getElementsByTagName("p");
    livros.addEventListener("click", function(){
        frases[0].innerHTML = "As novels de MILGRAM são dividas em duas, na primeira, há 5 prisioneiros, com 3 mortes sendo julgadas.";
        frases[1].innerHTML = "Todos estando envolvidos de certa forma.";
        fotoSelecao.src = "fotos/informacoes/PrimeiroLivro.webp";
        fotoSelecao.classList.add("show")

    })
    musicas.addEventListener("click", function(){
        frases[0].innerHTML = "10 prisioneiros estão em uma cadeia.";
        frases[1].innerHTML = "Nenhum dos personagens estão pré interligados";
        fotoSelecao.src = "fotos/main/milgram-mobile.webp";
        fotoSelecao.classList.add("show")
    })
})()