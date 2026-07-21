/* ==========================================================
   TRANSIÇÃO ENTRE TELAS
========================================================== */

function trocarPagina(destino){

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href = destino;

    },500);

}