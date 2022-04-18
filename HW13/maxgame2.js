// variable definitions
// player starting x y
// I'd like to move this variable into the playercharacter function
var pcX = 100;
var pcY = 100;
// circle when the mouse is clicked
// I'd like to move this variable into the mouseClicked function
var mouseBlockX;
var mouseBlockY;
// arbiter1 diameter
// I'd like to move the remaining variables into the arbiter function
var arbiter1D = 60;
var arbiter1Dgrowth = Math.floor(Math.random() * 5)+1;
// arbiter2 diameter
var arbiter2D = 50;
var arbiter2Dgrowth = Math.floor(Math.random() * 5)+1;
// arbiter3 diameter
var arbiter3D = 40;
var arbiter3Dgrowth = Math.floor(Math.random() * 5)+1;
// random starting x y for arbiter1
var arbiter1X = Math.floor(Math.random() * 801);
var arbiter1Y = Math.floor(Math.random() * 801);
// random starting x y for arbiter2
var arbiter2X = Math.floor(Math.random() * 801);
var arbiter2Y = Math.floor(Math.random() * 801);
// random starting x y for arbiter3
var arbiter3X = Math.floor(Math.random() * 801);
var arbiter3Y = Math.floor(Math.random() * 801);
// functions
function setup() {
    createCanvas(800, 800);
}
function playercharacter() {
    fill(4, 109, 32);
    circle(pcX, pcY, 30);
}
function movement() {
    // key codes
    var w = 87;
    var s = 83;
    var a = 65;
    var d = 68;
    // playercharacter movement
    if (keyIsDown(w)) {
        pcY -= 5;
    }
    if (keyIsDown(s)) {
        pcY += 5;
    }
    if (keyIsDown(a)) {
        pcX -= 5;
    }
    if (keyIsDown(d)) {
        pcX += 5;
    }
}
function mouseClicked() {
    mouseBlockX = mouseX - 25;
    mouseBlockY = mouseY - 25;
}
function arbitermarkers() {
    textSize(16);
    text("1",arbiter1X,arbiter1Y+10);
    text("2",arbiter2X,arbiter2Y);
    text("3",arbiter3X-10,arbiter3Y);
}
function arbiters() {
    
    // arbiter1
    fill(56, 62, 145);
    circle(arbiter1X, arbiter1Y, arbiter1D);
   
    // arbiter1 random speed
    arbiter1XSpeed = Math.floor(Math.random() * 11);
    arbiter1YSpeed = arbiter1XSpeed
  
    // arbiter1 movement
    arbiter1X += arbiter1XSpeed *= -1;
    arbiter1Y += arbiter1YSpeed *= -1;
    arbiter1D += arbiter1Dgrowth;
 
    // arbiter1 size
    if (arbiter1D >= 100 || arbiter1D <= 30) {
        arbiter1Dgrowth *= -1;
    }
 
    // arbiter1 wrap
    if (arbiter1X > width) {
        arbiter1X = 0;
    }
    if (arbiter1X < 0) {
        arbiter1X = width;
    }
    if (arbiter1Y > height) {
        arbiter1Y = 0;
    }
    if (arbiter1Y < 0) {
        arbiter1Y = height;
    }
 
    // arbiter2
    fill(107, 41, 103);
    circle(arbiter2X, arbiter2Y, arbiter2D);
 
    // arbiter2 random speed
    arbiter2XSpeed = Math.floor(Math.random() * 11);
    arbiter2YSpeed = arbiter2XSpeed
 
    // arbiter2 movement
    arbiter2X += arbiter2XSpeed *= -1;
    arbiter2Y += arbiter2YSpeed;
    arbiter2D += arbiter2Dgrowth;

    // arbiter2 size
    if (arbiter2D >= 100 || arbiter2D <= 30) {
        arbiter2Dgrowth *= -1;
    }
 
    // arbiter2 wrap
    if (arbiter2X > width) {
        arbiter2X = 0;
    }
    if (arbiter2X < 0) {
        arbiter2X = width;
    }
    if (arbiter2Y > height) {
        arbiter2Y = 0;
    }
    if (arbiter2Y < 0) {
        arbiter2Y = height;
    }
   
    // arbiter3 
    fill(56, 162, 45);
    circle(arbiter3X, arbiter3Y, arbiter3D);
    
    // arbiter3 random speed
    arbiter3XSpeed = Math.floor(Math.random() * 11);
    arbiter3YSpeed = arbiter3XSpeed
    
    // arbiter3 movement
    arbiter3X += arbiter3XSpeed;
    arbiter3Y += arbiter3YSpeed;
    arbiter3D += arbiter3Dgrowth;
    
    // arbiter3 size
    if (arbiter3D >= 100 || arbiter3D <= 30) {
        arbiter3Dgrowth *= -1;
    }
    
    // arbiter3 wrap
    if (arbiter3X > width) {
        arbiter3X = 0;
    }
    if (arbiter3X < 0) {
        arbiter3X = width;
    }
    if (arbiter3Y > height) {
        arbiter3Y = 0;
    }
    if (arbiter3Y < 0) {
        arbiter3Y = height;
    }
}
function wincon() {
    if (pcY > height && pcX > 380 && pcX < 420) {
        youWon();
    }
    else {
        if (pcY > height/2) {
            gettingClose();
        }
        else {
            gettingStarted();
        }
    }
}
function gettingStarted() {
    fill(0);
    textSize(20);
    text("Can You Make It?", width / 2 - 60, height / 2 - 200);
}
function gettingClose() {
    fill(0);
    textSize(30);
    text("Getting closer!", width / 2 - 80, height / 2 - 200);
}
function youWon() {
    fill(0);
    textSize(40);
    text("You Made It!", width / 2 - 100, height / 2 - 200);
}
function borderAndExit() {
    fill(0);
    rect(0, 0, width - 10, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width - 425, 10);
    rect(425, height - 10, width - 410, 10);
    rect(width - 10, 0, 10, height);
    textSize(16);
    text("EXIT", width - 460, height - 20);
    text("HERE", width - 375, height - 20);
}
function draw() {
    background(76, 72, 61);
    playercharacter();
    movement();
    arbiters();
    borderAndExit();
    arbitermarkers();
    fill(120, 130, 140);
    square(mouseBlockX, mouseBlockY, 50);
    wincon();
}