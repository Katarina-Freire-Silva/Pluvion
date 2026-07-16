/* ==========================================================
   MOSTRAR SENHA
========================================================== */

const senha=document.getElementById("senha");

const mostrar=document.getElementById("mostrarSenha");

mostrar.addEventListener("click",()=>{

    senha.type=

        senha.type==="password"

        ?"text"

        :"password";

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