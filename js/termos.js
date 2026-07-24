
/* ==========================================================
   PÁGINAS
========================================================== */

const paginas = [

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:`Conheça os Termos de Uso para saber seus direitos`,

    descricao:"Leia atentamente cada detalhe, pensamos em tudo com o máximo de carinho e atenção para que você mantenha suas informações em segurança",

    tipo:"introducao"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 1",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 2",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 3",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 4",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 5",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 6",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 7",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},

{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Termos 8",

    descricao:"Precisamos que informe seu CEP para personalizar seus alertas, afim de proporcionar a melhor experiência para você em nosso aplicativo.",

    tipo:"termo"

},


{

    imagem:"../images/logo-gota-azul.svg",

    titulo:"Chegamos ao fim",

    descricao:"Sevocê concorda, marque novamente a opção de 'Li e concordo com os termos de uso' na página de cadastro.",

    tipo:"final"

}

];

let paginaAtual = 0;

const imagem = document.getElementById("imagem");
const titulo = document.getElementById("tituloBemVindo");
const descricao = document.getElementById("descricaoBemVindo");
const conteudo = document.getElementById("conteudoExtra");
const botao = document.getElementById("proximo");
const indicadores = document.querySelectorAll(".indicadores span");

/* ==========================================================
   BUSCAR ENDEREÇO PELA LOCALIZAÇÃO
========================================================== */


function carregarPagina(){

    const pagina = paginas[paginaAtual];

    imagem.src = pagina.imagem;

    titulo.textContent = pagina.titulo;

    descricao.textContent = pagina.descricao;

    conteudo.innerHTML = "";

    document
        .getElementById("voltar")
        .style.display =

        paginaAtual === 0

        ? "none"

        : "flex";

    indicadores.forEach((item,index)=>{

        item.classList.toggle(

            "ativo",

            index === paginaAtual

        );

    });

    if(paginaAtual === paginas.length - 1){

        botao.textContent =

        "VOLTAR AO CADASTRO";

    }

    else{

        botao.textContent =

        "CONTINUAR";

    }

}

botao.addEventListener("click",()=>{

    if(

        paginaAtual < paginas.length - 1

    ){

        paginaAtual++;

        carregarPagina();

        return;

    }

    // última página

    const dados = JSON.parse(

        sessionStorage.getItem("cadastroTemp")

    );

    dados.termosVisualizados = true;

    sessionStorage.setItem(

        "cadastroTemp",

        JSON.stringify(dados)

    );

    window.location.href =

    "cadastro.html";

});

/* ==========================================================
   BOTÃO VOLTAR
========================================================== */

document

.getElementById("voltar")

.addEventListener("click",()=>{

    if(paginaAtual>0){

        paginaAtual--;

        carregarPagina();

    }

});

carregarPagina();
