(function () {
  const txtNome = document.getElementById("txtNome");
  const formulario = document.getElementById("formulario");
  const messagemFeedback = document.getElementById("messagemFeedback");
  const messagemFeedbackBotaoFechar =
    messagemFeedback.getElementsByTagName("button")[0];
  const imagemFoto = document.getElementById("imagemFoto");
  const botaoProximo = document.getElementById("botaoProximo");
  const descricao = document.getElementById("descricao");
  const inocente = document.getElementById("inocente");
  const culpado = document.getElementById("culpado");
  const resultado = document.getElementById("resultado");
  const botaoIniciar = document.getElementById("iniciar");
  const contadorContainer = document.getElementById("contador");
  const rest = contadorContainer.getElementsByTagName("span")[0];
  const maxima = 15;
  const tabela = resultado.getElementsByTagName("table")[0];
  let julgamentoArray = new Array();
  let userName;
  let quantidade = 0;

  formulario.addEventListener("submit", function (e) {
    if (!txtNome.value) {
      showErrorMessage("Preencha o campo!", function () {
        txtNome.focus();
      });
    } else {
      userName = txtNome.value;
    }
    e.preventDefault();
  });
  function showErrorMessage(msg, cb) {
    messagemFeedback.classList.add("show");
    messagemFeedback.getElementsByTagName("p")[0].textContent = msg;
    messagemFeedbackBotaoFechar.focus();
    function hideErrorMesage() {
      messagemFeedback.classList.remove("show");
      messagemFeedback.removeEventListener("click", hideErrorMesage);
      messagemFeedback.removeEventListener("keyup", pressedKeyboardOnBtn);
      if (typeof cb === "function") {
        cb();
      }
    }
    function pressedKeyboardOnBtn(e) {
      if (e.keyCode == 27) {
        hideErrorMesage();
      }
    }
    messagemFeedback.addEventListener("click", hideErrorMesage);
    messagemFeedback.addEventListener("keyup", pressedKeyboardOnBtn);
  }
  mostrarNumero(maxima);
  function checkLenght() {
    let numeroLetrasDigitadas = this.value.length;
    let caracteresRestantes =
      parseInt(maxima) - parseInt(numeroLetrasDigitadas);
    mostrarNumero(caracteresRestantes);
  }
  function mostrarNumero(n) {
    rest.textContent = n;
  }
  txtNome.addEventListener("input", checkLenght);
  botaoIniciar.addEventListener("click", function () {
    const itens = document.getElementsByClassName("informacao1");
    if (userName == null) {
      showErrorMessage("Preencha o campo de nome, e o insira!", function () {
        txtNome.focus();
      });
    } else {
      for (let i = 0; i < itens.length; i++) {
        itens[i].classList.add("hide");
      }
      const itens2 = document.getElementsByClassName("informacao2");
      for (let i = 0; i < itens2.length; i++) {
        itens2[i].classList.add("show");
      }
      quantidade = quantidade + 1;
      imagemFoto.src = "/fotos/julgamento/Kogami-Sumi.webp";
      descricao.innerText =
        "Kogami Sumi.Ela resolveu ignorar os problemas ao seu redor e fingiu os desconhecer. Isso fez com que ela fosse idolatrada por colegas contra sua vontade, causando a sua morte, o que ao fim, catalizou a morte de outras 2 pessoas.";
    }
  });
  botaoProximo.addEventListener("click", function () {
    if (!inocente.checked && !culpado.checked && quantidade > 0) {
      showErrorMessage("É necessário escolher um julgamento!");
    } else {
      julgamentoArray.push(inocente.checked);
      quantidade++;
      culpado.checked = false;
      inocente.checked = false;
      switch (quantidade) {
        case 2:
          imagemFoto.src = "/fotos/julgamento/Shiranami-Ryōichirō.webp";
          descricao.innerText =
            "Shiranami Ryōichirō. Iria matar sua irmã que estava em coma. Entretanto, resolveu que iria treinar com qualquer outra pessoa. Saiu uma noite em busca de matar alguém, e acabou matando um homem, salvando a vida de uma mulher: o homem iria matá-la caso ele não tivesse intervido.";
          break;
        case 3:
          imagemFoto.src = "/fotos/julgamento/Kawai-Naki.webp";
          descricao.innerText =
            "Kawai Naki. Sua única amiga foi morta. Após o ocorrido, outra pessoa tentou se aproximar dela, de mesma forma que sua amiga havia o feito. Após receber informações que indicavam que essa pessoa causou sua morte, ela o matou sem que ele pudesse dar explicações.";
          break;
        case 4:
          imagemFoto.src = "/fotos/julgamento/Shiranami-Aiba.webp";
          descricao.innerText =
            "Shiranami Aiba. Traiu sua amiga para apoiar o garoto que gostava, mesmo sabendo que ele não reciprocava, isso causou a morte dela. Quando ela descobriu, passou a informação do ocorrido para outra pessoa, o que causou a morte do garoto.";
          break;
        case 5:
          imagemFoto.src = "/fotos/julgamento/Unabara-Shin.webp";
          descricao.innerText =
            "Unabara Shin. Idolatrava uma pessoa e tentou fazer com que os outros fizessem o mesmo. A idolatria deles lentamente se tornou em ódio, o que causou a morte desta pessoa.";
          break;
        case 6:
          imagemFoto.src = "/fotos/julgamento/Himori-Tōchi.png";
          descricao.innerText =
            "Himori Tōchi. Uma pessoa havia se acidentado, e estavam ambos em uma sala trancada. Pessoas estavam lá fora implorando para ele abrir a porta para salvá-la, mas ela implorou para ele não abrir, pois não queria que a vissem assim. Ele não abriu a porta, e a pessoa morreu.";
          break;
        case 7:
          this.disabled = true;
          const itens2 = document.getElementsByClassName("informacao2");
          resultado.classList.add("show");
          for (let i = 0; i < itens2.length; i++) {
            itens2[i].classList.remove("show");
          }
          resultadoFinal(resultado, julgamentoArray);
          break;
      }
    }
  });
  inocente.addEventListener("change", function () {
    if (this.checked) {
      culpado.checked = false;
    }
  });

  culpado.addEventListener("change", function () {
    if (this.checked) {
      inocente.checked = false;
    }
  });
  function resultadoFinal(resultado, julgamentoArray) {
    tabela
      .getElementsByTagName("thead")[0]
      .getElementsByTagName("th")[1].innerText = `Voto de ${userName}`;
    const tbody = tabela.getElementsByTagName("tbody")[0];
    for (let i = 0; i < 6; i++) {
      tbody
        .getElementsByTagName("tr")
        [i].getElementsByTagName("td")[1].innerText = `Julgamento: ${
        julgamentoArray[i] ? "Inocente" : "Culpado"
      }`;
    }
  }
})();
