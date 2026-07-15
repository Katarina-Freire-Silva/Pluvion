/* ==========================================================
   SPLASH SCREEN
========================================================== */

const splash = document.querySelector(".inicio");

/* Tempo da animação da logo */

const tempoLogo = 3000;

/* Tempo de pausa */

const pausa = 500;

/* Tempo do fade */

const fade = 700;

/* Quando terminar */

setTimeout(() => {

    splash.classList.add("fade-out");

}, tempoLogo + pausa);

/* Ir para Home */

setTimeout(() => {

    window.location.href = "./html/onboarding-1.html";

}, tempoLogo + pausa + fade);