/* ==========================================================
   USUÁRIO
========================================================== */

const nome =
localStorage.getItem("nomeUsuario") || "Usuário";

const cidade =
localStorage.getItem("cidade") || "";

const estado =
localStorage.getItem("estado") || "";

const bairro =
localStorage.getItem("bairro") || "";

const rua =
localStorage.getItem("rua") || "";

const cep =
localStorage.getItem("cep") || "";


/* ==========================================================
   DADOS DO DASHBOARD
   (SIMULAÇÃO)
========================================================== */

const dadosDashboard={

    possuiSensor:true,

    risco:"BAIXO",

    nivelAgua:23,

    atualizado:"Atualizado há 1 min",

    local:"Taboão da Serra",

    alertas:[

        {

            tipo:"normal",

            titulo:"Área Normalizada",

            local:"Taboão da Serra",

            tempo:"Há 2 horas"

        },

        {

            tipo:"alerta",

            titulo:"Área de Alerta",

            local:"Campo Limpo",

            tempo:"Há 8 horas"

        },

        {

            tipo:"critico",

            titulo:"Área Crítica",

            local:"Itapecerica da Serra",

            tempo:"Há 4 dias"

        }

    ]

};


/* ==========================================================
   ELEMENTOS
========================================================== */

const saudacao =
document.getElementById("saudacao");

const nomeUsuario =
document.getElementById("nomeUsuario");

const cardPrincipal =
document.getElementById("cardPrincipal");

const listaAlertas =
document.getElementById("listaAlertas");


/* ==========================================================
   SAUDAÇÃO
========================================================== */

function obterSaudacao(){

    const hora = new Date().getHours();

    if(hora < 12){

        return "Bom dia,";

    }

    if(hora < 18){

        return "Boa tarde,";

    }

    return "Boa noite,";

}


/* ==========================================================
   CABEÇALHO
========================================================== */

function carregarCabecalho(){

    saudacao.textContent = obterSaudacao();

    nomeUsuario.textContent = nome;

}


/* ==========================================================
   COR DO RISCO
========================================================== */

function corRisco(tipo){

    switch(tipo.toLowerCase()){

        case "baixo":

            return "var(--verde)";

        case "moderado":

            return "var(--laranja)";

        case "alto":

            return "var(--vermelho)";

        default:

            return "var(--cinza)";

    }

}


/* ==========================================================
   CARD PRINCIPAL
========================================================== */

function carregarCard(){

    if(!dadosDashboard.possuiSensor){

        cardPrincipal.innerHTML=`

            <div class="sem-dispositivo">

                <span class="material-symbols-outlined">

                    sensors_off

                </span>

                <h3>

                    Nosso dispositivo ainda
                    não cobre sua região.

                </h3>

                <p>

                    Estamos expandindo nossa rede
                    de monitoramento.

                </p>

                <div class="localizacao">

                    <strong>

                        ${cidade} - ${estado}

                    </strong>

                </div>

            </div>

        `;

        return;

    }

    cardPrincipal.innerHTML=`

        <p class="titulo-card">

            NÍVEL DE RISCO ATUAL

        </p>

        <div class="risco">

            <span
                class="material-symbols-outlined"
                style="color:${corRisco(dadosDashboard.risco)}">

                water_drop

            </span>

            <h2
                style="color:${corRisco(dadosDashboard.risco)}">

                ${dadosDashboard.risco}

            </h2>

        </div>

        <p class="atualizado">

            ${dadosDashboard.local}

            •

            ${dadosDashboard.atualizado}

        </p>

        <div class="nivel">

            <div class="nivel-topo">

                <span>

                    Nível da Água

                </span>

                <span>

                    ${dadosDashboard.nivelAgua}%

                </span>

            </div>

            <div class="barra">

                <div
                    class="barra-preenchimento"
                    style="width:${dadosDashboard.nivelAgua}%">

                </div>

            </div>

        </div>

    `;

}


/* ==========================================================
   ALERTAS
========================================================== */

function carregarAlertas(){

    listaAlertas.innerHTML="";

    if(!dadosDashboard.possuiSensor){

        listaAlertas.innerHTML=`

            <div class="alerta-vazio">

                Nenhum alerta disponível para sua região.

            </div>

        `;

        return;

    }

    dadosDashboard.alertas.forEach(alerta=>{

        const card=document.createElement("article");

        card.className="card-alerta";

        let cor="var(--verde)";

        if(alerta.tipo==="alerta"){

            cor="var(--laranja)";

        }

        if(alerta.tipo==="critico"){

            cor="var(--vermelho)";

        }

        card.innerHTML=`

            <div
                class="status"
                style="background:${cor}">

            </div>

            <div class="texto">

                <h4>

                    ${alerta.titulo}

                </h4>

                <p>

                    ${alerta.local}

                    •

                    ${alerta.tempo}

                </p>

            </div>

        `;

        listaAlertas.appendChild(card);

    });

}


/* ==========================================================
   MENU
========================================================== */

document

.querySelectorAll(".menu-item")

.forEach(botao=>{

    botao.addEventListener("click",()=>{

        document

        .querySelectorAll(".menu-item")

        .forEach(item=>{

            item.classList.remove("ativo");

        });

        botao.classList.add("ativo");

    });

});


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

function iniciarDashboard(){

    carregarCabecalho();

    carregarCard();

    carregarAlertas();

}

iniciarDashboard();