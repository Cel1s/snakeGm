let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas, tratando como plano 2d
let box = 32;
//função que inicia o canvas
function criarBG()
{
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();