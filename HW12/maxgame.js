// player x y 
var playerX = 100;
var playerY = 100;

// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// arbitor1 diameter
var arbitor1D = 60;
var arbitor1Dgrowth = 1;

// arbitor2 diameter
var arbitor2D = 40;
var arbitor2Dgrowth = 1;

// random starting x y for arbitor1
var arbitor1X = Math.floor(Math.random()*801);
var arbitor1Y = Math.floor(Math.random()*801);
var arbitor1XSpeed;
var arbitor1YSpeed;

// random starting x y for arbitor2
var arbitor2X = Math.floor(Math.random()*801);
var arbitor2Y = Math.floor(Math.random()*801);
var arbitor2XSpeed;
var arbitor2YSpeed;

// block on mouse click
var mouseobstacleX;
var mouseobstacleY;

function setup()
{
    createCanvas(800, 800);
}
function draw()
{
    background(76, 72, 61);
    stroke(0);
    
    // player character
    fill(4, 109, 32);
    circle(playerX,playerY,25);
   
    // arbitor1
    fill(56, 62, 145);
    circle(arbitor1X, arbitor1Y, arbitor1D);
    // arbitor1 random speed
    arbitor1XSpeed = Math.floor(Math.random()*11);
    arbitor1YSpeed = arbitor1XSpeed
    // arbitor1 movement
    arbitor1X += arbitor1XSpeed*=-1;
    arbitor1Y += arbitor1YSpeed*=-1;
    arbitor1D += arbitor1Dgrowth;
    // arbitor1 size
    if(arbitor1D >= 100 || arbitor1D <= 30)
    {
        arbitor1Dgrowth*=-1;
    }
    // arbitor1 wrap
    if(arbitor1X > width)
    {
        arbitor1X = 0;
    }
    if(arbitor1X < 0)
    {
        arbitor1X = width;
    }
    if(arbitor1Y > height)
    {
        arbitor1Y = 0;
    }
    if(arbitor1Y < 0)
    {
        arbitor1Y = height;
    }
    
    // arbitor2
    fill(107, 41, 103);
    circle(arbitor2X, arbitor2Y, arbitor2D);
    // arbitor2 random speed
    arbitor2XSpeed = Math.floor(Math.random()*11);
    arbitor2YSpeed = arbitor2XSpeed
    // arbitor2 movement
    arbitor2X += arbitor2XSpeed*=-1;
    arbitor2Y += arbitor2YSpeed;
    arbitor2D += arbitor2Dgrowth;
    // arbitor2 size
    if(arbitor2D >= 100 || arbitor2D <= 30)
    {
        arbitor2Dgrowth*=-1;
    }
    // arbitor2 wrap
    if(arbitor2X > width)
    {
        arbitor2X = 0;
    }
    if(arbitor2X < 0)
    {
        arbitor2X = width;
    }
    if(arbitor2Y > height)
    {
        arbitor2Y = 0;
    }
    if(arbitor2Y < 0)
    {
        arbitor2Y = height;
    }
    
    // player character movement
    if(keyIsDown(w))
    {
        playerY -= 5;   
    }
    if(keyIsDown(s))
    {
        playerY += 5;   
    }
    if(keyIsDown(a))
    {
        playerX -= 5;   
    }
    if(keyIsDown(d))
    {
        playerX += 5;   
    }
    
    // mouse click block
    fill(107, 41, 103);
    square(mouseobstacleX, mouseobstacleY, 76);
    
    // win condition 
    if(playerY > height && playerX > 380 && playerX < 420)
    {
        fill(0);
        textSize(40);
        text("You Made It!", width/2-100, height/2-200);
    }
    else
    {
        if(playerY > height/2)
        {
            fill(0);
            textSize(30);
            text("Getting closer!", width/2-80, height/2-200);
        }
        else
        {
            fill(0);
            textSize(20);
            text("Can You Make It?", width/2-60, height/2-200);
        }
    }
   
    // exit signs
    fill(0)
    textSize(16);
    text("EXIT", width-460,height-20)
    text("HERE", width-375,height-20)
    
    // border
    fill(0);
    rect(0,0,width-10,10);
    rect(0,0,10,height); 
    rect(0, height-10,width-425, 10);
    rect(425, height-10,width-410, 10);
    rect(width-10,0,10,height);

}
function mouseClicked()
{ 
    mouseobstacleX = mouseX-38;
    mouseobstacleY = mouseY-38;
}