/* ==========================================================
   NOME DO USUÁRIO
========================================================== */

const titulo = document.getElementById("tituloBemVindo");

const nome = localStorage.getItem("nomeUsuario");

if (nome) {

    titulo.textContent = `Que alegria te ver, ${nome}!`;

}

/* ==========================================================
   ANIMAÇÃO
========================================================== */

const tela = document.querySelector(".bem-vindo");

/* tempo da tela */

const tempo = 2500;

/* pausa */

const pausa = 500;

/* fade */

const fade = 700;

setTimeout(() => {

    tela.classList.add("fade-out");

}, tempo + pausa);

setTimeout(() => {

    window.location.href = "dashboard.html";

}, tempo + pausa + fade);