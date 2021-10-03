var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  //load image for the treasure background.
  //cargar imagen para el fondo del tesoro.
  bg2 = loadImage("aladdin_cave2.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("    Score: " + score+"\n¯\\_( ͡> ‿ ͡<)_/¯", 450, 50);
  //add code for changing the background to the treasure background.
  //agregue código para cambiar el fondo al fondo del tesoro.

  if(score === 3) {
    clear()
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED\n( ͡❛ . ͡❛)            ¯\\_( ❛ ₒ ❛ )_/¯",250, 200);
  }

  drawSprites()
}