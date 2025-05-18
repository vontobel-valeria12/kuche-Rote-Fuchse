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

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Muda a cada 4 segundos
}

