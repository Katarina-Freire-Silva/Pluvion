const paginas = [

    {

        imagem:"../images/onboarding/on-1.svg",

        titulo:"Monitoramento em tempo real",

        descricao:"Acompanhe o nível das águas na sua região com sensores e dados atualizados a cada 30 segundos."

    },

    {

        imagem:"../images/onboarding/on-2.svg",

        titulo:"Alertas inteligentes",

        descricao:"Receba notificações com antecedência sobre riscos de alagamento. Nossa IA analisa chuva, topografia e histórico."

    },

    {

        imagem:"../images/onboarding/on-3.svg",

        titulo:"Mapas de risco da sua região",

        descricao:"Visualize zonas de alagamento, sensores ativos e rotas seguras diretamente no mapa interativo."

    }

];

let paginaAtual = 0;

const imagem = document.getElementById("imagem");

const titulo = document.getElementById("titulo");

const descricao = document.getElementById("descricao");

const indicadores = document.querySelectorAll(".indicadores span");

const botao = document.getElementById("proximo");

function carregarPagina(){

    imagem.src = paginas[paginaAtual].imagem;

    titulo.textContent = paginas[paginaAtual].titulo;

    descricao.textContent = paginas[paginaAtual].descricao;

    indicadores.forEach((item,index)=>{

        item.classList.toggle(

            "ativo",

            index===paginaAtual

        );

    });

    if(paginaAtual===2){

        botao.textContent="COMEÇAR AGORA";

    }

    else{

        botao.textContent="PRÓXIMO";

    }

}

botao.addEventListener("click",()=>{

    if(paginaAtual<2){

        paginaAtual++;

        carregarPagina();

    }

    else{

        window.location.href="login.html";

    }

});

/* ==========================================================
   BOTÃO PULAR
========================================================== */

document
    .getElementById("pular")
    .addEventListener("click",()=>{

        window.location.href = "cadastro.html";

    });

carregarPagina();