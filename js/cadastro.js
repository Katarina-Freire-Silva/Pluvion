/* ==========================================================
   MOSTRAR SENHA
========================================================== */

const senha = document.getElementById("senha");

const mostrar = document.getElementById("mostrarSenha");

const iconeSenha = document.getElementById("iconeSenha");

mostrar.addEventListener("click", () => {

    const senhaVisivel = senha.type === "password";

    senha.type = senhaVisivel
        ? "text"
        : "password";

    iconeSenha.textContent = senhaVisivel
        ? "visibility"
        : "visibility_off";

});


/* ==========================================================
   VOLTAR
========================================================== */

document

.getElementById("voltar")

.addEventListener("click",()=>{

    window.location.href = "login.html";

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
