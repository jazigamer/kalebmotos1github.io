 document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.querySelector("title");
    titleElement.style.color = "#00ff00";
 });
 function exibirMensagemTelaPequena() {
    var larguraTela = window.innerWidth;

    if (larguraTela < 600) { // Defina o valor de largura que considera "muito pequeno"
        document.getElementById("mensagem-small-screen").style.display = "block";
    } else {
        document.getElementById("mensagem-small-screen").style.display = "none";
    }
}
//baner (abaixo)---
let slideIndex = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    if (index < 1) slideIndex = slides.length;
    if (index > slides.length) slideIndex = 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

setInterval(() => {
    changeSlide(1);
}, 3000); // Trocar a imagem a cada 3 segundos (ajuste conforme necessário)

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("function-bar").classList.remove("hidden");
    } else {
        document.getElementById("function-bar").classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
};

