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
//O math floor retira o ponto flutuante do numero gerado pelo math radom
let food =
{
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

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

//função comida cobrinha
function drawFood()
{
    context.fillStyle = "darkred";
    context.fillRect(food.x, food.y, box, box);    
}

//pega o keydown (evento de clique) e vai chamar a função update
document.addEventListener("keydown", update);
//da o comando onde o addEventListener que chama a update e a mesma passa como argumento os eventos abaixo
function update (event)
{
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo()
{
//quando a cobra chegar no zero, ela recebe 15 pra ja iniciar no outro lado 
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++)
    {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
        {
            clearInterval(jogo);
            alert('game over!')
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
    //criando posições x e y para setar os movimentos dando um inicio de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    //coordenadas da cobrinha, condicionais
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y)
    {
        snake.pop();
    }//a comida recebe posições aleatorias tanto em x quanto em y
    else
    {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    // retira o ultimo elemento do array
    
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
