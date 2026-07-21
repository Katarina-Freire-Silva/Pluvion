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

    history.back();

});

/* ==========================================================
   CADASTRO
========================================================== */

document

.getElementById("cadastro")

.addEventListener("click",()=>{

    trocarPagina("cadastro.html");

});

/* ==========================================================
   ESQUECI A SENHA
========================================================== */

document

.getElementById("esqueciSenha")

.addEventListener("click",(evento)=>{

    evento.preventDefault();

    trocarPagina("redefinir-senha.html");

});