let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas, tratando como plano 2d
let box = 32;
let snake = [];
snake[0] = 
{
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

//função que inicia o canvas
function criarBG()
{
    context.fillStyle = "lightpink";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//percorre o array
function criarCobrinha()
{
    for(i=0; i < snake.length; i++)
    {
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo()
{
    criarBG();
    criarCobrinha();
    //criando posições x e y para setar os movimentos dando um inicio de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    //coordenadas da cobrinha, condicionais
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    // retira o ultimo elemento do array
    snake.pop();
    //criando a "cara" da cobra kkk função sempre acrescenta um espaço a frente
    let newHead = 
    {
        x: snakeX,
        y: snakeY,
    }

    snake.unshift(newHead);
}
//PASSANDO INTERVALO DE 100 MILISSEGUNDOS, ATUALIZANDO A COBRINHA NESSE TEMPO
let jogo = setInterval(iniciarJogo, 100);
