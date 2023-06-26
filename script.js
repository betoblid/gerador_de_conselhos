//pegando componentes do DOM
const conselho_id = document.getElementById("conselho_id")
const conselho_text = document.getElementById("conselho_text")
const btn_gerar = document.getElementById("btn_advance")

//pegando a API de concelhos
let url = "https://api.adviceslip.com/advice"
//usando uma async para quando for chamada usar o modelo hook conhecido no react e com delay de 2 segundos 
async function getconselho (){
    //faturando a url da api
    const res = await fetch(url);
    //armazenando os resultados do faturamento da api como id e advice depois traduzindo com json para conversão
    const {slip: { id, advice } } = await res.json();
    //pegando os elementos id e advice e jogando no DOM
    conselho_id.textContent = id;
    conselho_text.textContent = advice;
}

//chamando a function no botão do DOM ao clicar no botão chamará essa fuction
btn_gerar.addEventListener("click", getconselho)