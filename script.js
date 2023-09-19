function obterConselho() {
  const urlApi = 'https://api.adviceslip.com/advice';

  const conselhoAleatorio = fetch(urlApi)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error('Erro na Requisição');
      }
      return resposta.json();
    })
    .catch(error => {
      console.error('Erro', error);
    });

  conselhoAleatorio.then(data => {
    const conselho = data.slip.advice;
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.textContent = conselho;

    resultadoDiv.classList.add('estilo-resultado');

  });
}

document.getElementById('obterConselho').addEventListener('click', obterConselho);





document.addEventListener("DOMContentLoaded", function() {
  const openButton = document.getElementById("openButton");
  const closeButton = document.getElementById("closeButton");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");

document.getElementById('abrirBotao').addEventListener("click", function abrirBotao() {
    overlay.style.display = "block";
    popup.style.display = "block";

  });

document.getElementById('fecharBotao').addEventListener("click", function fecharBotao() {
    overlay.style.display = "none";
    popup.style.display = "none";
  });
});