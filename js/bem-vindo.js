/* ==========================================================
   NOME DO USUÁRIO
========================================================== */

const nome = localStorage.getItem("nomeUsuario") || "Usuário";

/* ==========================================================
   PÁGINAS
========================================================== */

const paginas = [

{

    imagem:"../images/onboarding/on-1.svg",

    titulo:`É uma alegria te ver, ${nome}!`,

    descricao:"Aproveite ao máximo o Pluvion, tudo foi feito com muito carinho e cuidado para que você tenha a melhor experiência possível.",

    tipo:"boasVindas"

},

{

    imagem:"../images/onboarding/on-2.svg",

    titulo:"Localização",

    descricao:"Para que possamos proporcionar a melhor experiência para você, precisamos que forneça seu CEP.",

    tipo:"localizacao"

},

{

    imagem:"../images/onboarding/on-3.svg",

    titulo:"Informe seu CEP",

    descricao:"Utilizaremos o CEP para personalizar seus alertas.",

    tipo:"cep"

},

{

    imagem:"../images/onboarding/on-3.svg",

    titulo:"Confirme seu endereço",

    descricao:"Confira se as informações abaixo estão corretas antes de continuar.",

    tipo:"confirmacao"

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
   BUSCAR ENDEREÇO PELO CEP
========================================================== */

async function buscarCep(cep){

    try{

        const resposta = await fetch(

            `https://brasilapi.com.br/api/cep/v2/${cep}`

        );

        if(!resposta.ok){

            throw new Error();

        }

        const dados = await resposta.json();

        localStorage.setItem("cep", dados.cep);

        localStorage.setItem("cidade", dados.city);

        localStorage.setItem("estado", dados.state);

        localStorage.setItem("bairro", dados.neighborhood);

        localStorage.setItem("rua", dados.street);

        paginaAtual = 3;

        carregarPagina();
    }

    catch{

        alert("CEP não encontrado.");

    }

}

/* ==========================================================
   BUSCAR ENDEREÇO PELA LOCALIZAÇÃO
========================================================== */


function carregarPagina(){

    const voltar = document.getElementById("voltar");
    voltar.style.display =

    paginaAtual===0

    ? "none"

    : "flex";


    const pagina = paginas[paginaAtual];

    imagem.src = pagina.imagem;

    titulo.textContent = pagina.titulo;

    descricao.textContent = pagina.descricao;

    indicadores.forEach((item,index)=>{

        item.classList.toggle(

            "ativo",

            index===paginaAtual

        );

    });

    conteudo.innerHTML="";

    switch(pagina.tipo){

        case "boasVindas":

            botao.style.display = "block";

            botao.textContent = "CONTINUAR";

        break;

        case "localizacao":

            conteudo.innerHTML=`

                <button
                    class="btn btn-primario"
                    id="usarCep">

                    INFORMAR CEP

                </button>

            `;

            botao.style.display="none";

        break;

        case "cep":

            conteudo.innerHTML=`

                <input
                    id="cep"
                    type="text"
                    placeholder="Digite seu CEP">

            `;

            botao.textContent="CONTINUAR";

            botao.style.display="block";

        break;

        case "confirmacao":

            conteudo.innerHTML = `

                <div class="confirmacao-endereco">
                    <p>

                        ${localStorage.getItem("rua") || "Não informado"}

                    </p>

                    <p>

                        ${localStorage.getItem("bairro") || "Não informado"}

                    </p>

                    <p>

                        ${localStorage.getItem("cidade")} - ${localStorage.getItem("estado")}

                    </p>
                </div>

                <button
                    class="alterar-endereco"
                    id="editarEndereco">

                    Não é este o endereço

                </button>

            `;

            botao.textContent="CONTINUAR";

            botao.style.display="block";

        break;

    }

}

botao.addEventListener("click",()=>{

    if(paginaAtual<2){

        paginaAtual++;

        carregarPagina();

    }

    else if(paginaAtual===2){

        const cep=document

            .getElementById("cep")

            .value

            .replace(/\D/g,"");

        if(cep.length!==8){

            alert("Informe um CEP válido.");

            return;

        }

        buscarCep(cep);

    }

    else{

        window.location.href="dashboard.html";

    }

});

document.addEventListener("click",(evento)=>{

    if(evento.target.id==="usarCep"){

        paginaAtual=2;

        carregarPagina();

    }

    if(evento.target.id==="usarLocalizacao"){

        const id = navigator.geolocation.watchPosition(

            (posicao)=>{

                console.log("Precisão:", posicao.coords.accuracy);

                if(posicao.coords.accuracy > 30){

                    return;

                }

                navigator.geolocation.clearWatch(id);

                buscarEndereco(

                    posicao.coords.latitude,

                    posicao.coords.longitude

                );

            },

            (erro)=>{

                console.log(erro);

                alert("Não foi possível obter sua localização.");

            },

            {

                enableHighAccuracy:true,

                timeout:30000,

                maximumAge:0

            }

        );

    }

    if(evento.target.id==="editarEndereco"){

        paginaAtual = 2;

        carregarPagina();

    }

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
