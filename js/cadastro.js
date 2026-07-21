/* ==========================================================
   VOLTAR
========================================================== */

document

.getElementById("voltar")

.addEventListener("click",()=>{

    history.back();

});

/* ==========================================================
   CADASTRO
========================================================== */

const formulario = document.querySelector(".login-form");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nome = document
        .getElementById("nome")
        .value
        .trim();

    if (nome === "") {

        alert("Digite seu nome.");

        return;

    }

    /* Salva o nome */

    localStorage.setItem("nomeUsuario", nome);

    /* Vai para a tela de boas-vindas */

    window.location.href = "bem-vindo.html";

});
