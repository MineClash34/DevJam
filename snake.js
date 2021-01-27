const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

const head = new Image();
head.src = "https://media.discordapp.net/attachments/513019250554961941/706181441351974934/body.png";

const body = new Image();
body.src = "https://media.discordapp.net/attachments/513019250554961941/706181385202696192/body.png";

const bodyrotate = new Image();
bodyrotate.src = "https://media.discordapp.net/attachments/513019250554961941/706185126756745268/body.png";

const ground = new Image();
ground.src = "https://media.discordapp.net/attachments/513019250554961941/706165482146758656/ground.png";

const foodImg = new Image();
foodImg.src = "https://media.discordapp.net/attachments/513019250554961941/706166498716155944/food.png";


let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "https://cdn.discordapp.com/attachments/530889965048037388/706170697784885368/dead.mp3";
eat.src = "https://cdn.discordapp.com/attachments/530889965048037388/706170702666924112/eat.mp3";
up.src = "https://cdn.discordapp.com/attachments/530889965048037388/706170707020742736/up.mp3";
right.src = "https://cdn.discordapp.com/attachments/530889965048037388/706170704885710938/right.mp3";
left.src = "https://cdn.discordapp.com/attachments/530889965048037388/706170703526887505/left.mp3";
down.src = "https://cdn.discordapp.com/attachments/530889965048037388/706170700851052544/down.mp3";


let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};


let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}


let score = 0;


var d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT")
    {
        left.play();
        d = "LEFT";
    }
    else 
    if (key == 38 && d != "DOWN")
    {
        d = "UP";
        up.play();
    }
    else 
    if (key == 39 && d != "LEFT")
    {
        d = "RIGHT";
        right.play();
    }
    else 
    if (key == 40 && d != "UP")
    {
        d = "DOWN";
        down.play();
    }
}

function collision(head,array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (head.x == array[i].x && head.y == array[i].y)
        {
            return true;
        }
    }
    return false;
}


function draw()
{
    
    ctx.drawImage(ground,0,0);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;
    
    for (let i = 0; i < snake.length ; i++)
    {
        if (i === 0) 
        {
            var image = head;
        } else 
        {
            if (d === "LEFT" || d === "RIGHT") 
            {
                var image = bodyrotate;
            }
            else
            {
                var image = body;
            }
            
        }
        ctx.drawImage(image,snake[i].x,snake[i].y);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
   
    if(snakeX == food.x && snakeY == food.y)
    {
        score++;
        eat.play();
        food = 
        {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
    }
    else
    {
        snake.pop();
    }
    

    
    let newHead = 
    {
        x : snakeX,
        y : snakeY
    }
    

    
    if (snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake))
    {
        draw;
        setTimeout(function() {
        clearInterval(game);
        dead.play();
        document.getElementById("score").value = score.toString();
        alert(`Game Over ! Vous avez fait un score de ${score} ! GG !\nCliquez sur le bouton pour rejouer !`)
        window.location.reload(true)
        }, 100)
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2.5*box,1.6*box);
}


let game = setInterval(draw,125);