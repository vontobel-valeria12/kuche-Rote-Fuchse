// Proteção por senha (usando sessionStorage)
const senhaCorreta = "rapousas2025";

function verificarSenha() {
  const acessoLiberado = sessionStorage.getItem("acessoLiberado");

  if (acessoLiberado === "true") {
    return; // já liberado, não pede de novo
  }

  const senhaDigitada = prompt("Bitte geben Sie das Passwort ein:");
  if (senhaDigitada === senhaCorreta) {
    sessionStorage.setItem("acessoLiberado", "true"); // salvar liberação na sessão
  } else {
    alert("Falsches Passwort. Der Zugriff wird verweigert.");
    window.location.href = "index.html";
  }
}

  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".buttontoggle");
    const menu = document.querySelector(".seitenmenü");

    toggleButton.addEventListener("click", function () {
      menu.classList.toggle("ativo");
    });
  });
  
 function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

