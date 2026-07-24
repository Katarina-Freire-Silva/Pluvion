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
   VALIDAÇÃO DOS CAMPOS
========================================================== */

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");

const feedbackNome = document.getElementById("feedbackNome");
const feedbackEmail = document.getElementById("feedbackEmail");
const feedbackSenha = document.getElementById("feedbackSenha");

const termos = document.getElementById("termos");
const botaoCriar = document.querySelector(".btn-login");

/* ==========================================================
   PALAVRAS BLOQUEADAS
========================================================== */

const palavrasOfensivas = [

    "idiota",
    "burro",
    "lixo",
    "merda",
    "porra",
    "puta",
    "fdp",
    "otario",
    "otário"

];

/* ==========================================================
   ALTERA O ESTADO VISUAL DO INPUT
========================================================== */

function definirEstado(input, feedback, estado, mensagem){

    input.classList.remove(

        "input-verde",
        "input-amarelo",
        "input-vermelho"

    );

    feedback.classList.remove(

        "feedback-verde",
        "feedback-amarelo",
        "feedback-vermelho"

    );

    if(estado){

        input.classList.add("input-" + estado);

        feedback.classList.add("feedback-" + estado);

    }

    feedback.textContent = mensagem;

}

/* ==========================================================
   NOME
========================================================== */

function validarNome(){

    const nome = campoNome.value.trim();

    if(nome===""){

        definirEstado(

            campoNome,
            feedbackNome,
            "",
            ""

        );

        return false;

    }

    if(nome.length>20){

        definirEstado(

            campoNome,
            feedbackNome,
            "vermelho",
            "Ultrapassou o limite de 20 caracteres."

        );

        return false;

    }

    const texto = nome.toLowerCase();

    const ofensivo = palavrasOfensivas.some(

        palavra=>texto.includes(palavra)

    );

    if(ofensivo){

        definirEstado(

            campoNome,
            feedbackNome,
            "vermelho",
            "Não escreva palavras ofensivas."

        );

        return false;

    }

    definirEstado(

        campoNome,
        feedbackNome,
        "verde",
        "Nome válido."

    );

    return true;

}

/* ==========================================================
   EMAIL
========================================================== */

function validarEmail(){

    const email = campoEmail.value.trim();

    if(email===""){

        definirEstado(

            campoEmail,
            feedbackEmail,
            "",
            ""

        );

        return false;

    }

    const regex =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email)){

        definirEstado(

            campoEmail,
            feedbackEmail,
            "verde",
            "E-mail válido."

        );

        return true;

    }

    definirEstado(

        campoEmail,
        feedbackEmail,
        "vermelho",
        "E-mail inválido."

    );

    return false;

}

/* ==========================================================
   SENHA
========================================================== */

function validarSenha(){

    const valor = senha.value;

    if(valor===""){

        definirEstado(

            senha,
            feedbackSenha,
            "",
            ""

        );

        return false;

    }

    let pontos = 0;

    if(valor.length>=8) pontos++;

    if(/[A-Z]/.test(valor)) pontos++;

    if(/[a-z]/.test(valor)) pontos++;

    if(/[0-9]/.test(valor)) pontos++;

    if(/[!@#$%^&*(),.?":{}|<>]/.test(valor)) pontos++;

    if(pontos<=2){

        definirEstado(

            senha,
            feedbackSenha,
            "vermelho",
            "Senha fraca."

        );

        return false;

    }

    if(pontos<=4){

        definirEstado(

            senha,
            feedbackSenha,
            "amarelo",
            "Senha média."

        );

        return true;

    }

    definirEstado(

        senha,
        feedbackSenha,
        "verde",
        "Senha forte."

    );

    return true;

}

/* ==========================================================
   BOTÃO
========================================================== */

function atualizarBotao(){

    const valido =

        validarNome()

        &&

        validarEmail()

        &&

        validarSenha()

        &&

        termos.checked;

    botaoCriar.disabled = !valido;

}

campoNome.addEventListener("input",()=>{

    validarNome();

    atualizarBotao();

});

campoEmail.addEventListener("input",()=>{

    validarEmail();

    atualizarBotao();

});

senha.addEventListener("input",()=>{

    validarSenha();

    atualizarBotao();

});

termos.addEventListener("change",atualizarBotao);

botaoCriar.disabled = true;


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

formulario.addEventListener("submit",(evento)=>{

    evento.preventDefault();

    if(

        !validarNome()

        ||

        !validarEmail()

        ||

        !validarSenha()

        ||

        !termos.checked

    ){

        return;

    }

    localStorage.setItem(

        "nomeUsuario",

        campoNome.value.trim()

    );

    window.location.href="bem-vindo.html";

});