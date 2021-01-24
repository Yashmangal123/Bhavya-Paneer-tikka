var start ,next1;
var inv1,inv2,inv3,inv4,inv5,inv6,inv7,inv8;
var line1,line,line2,line3,line4,line5,line6,line7;
var gameState = "slide1"

function preload(){
    bg = loadImage("paneer-tikka.jpg");
    l0 = loadImage("line0.png");
    l1 = loadImage("line1.png");
    l2 = loadImage("line2.png");
    l3 = loadImage("line3.png");
    l4 = loadImage("line4.png");
    l5 = loadImage("line5.png");
    l6 = loadImage("line6.png");
    l7 = loadImage("line7.png");
  
}

function setup() {
    createCanvas(displayWidth,displayHeight);
    
      start = createButton("VIEW")
      start.position(780,355);
      start.style('font-size', '70px');
      start.style('color', 'blue');
      start.style('background', 'orange');
      start.mousePressed(viewAll);

       next1 = createButton("NEXT")
       next1.position(780,355);
       next1.style('font-size', '40px');
       next1.style('color', 'blue');
       next1.style('background', 'orange');
       next1.mousePressed(next0);
       next1.hide();

       inv1 = createSprite(500,80,2000,5);
       inv1.visible = false;

       inv2 = createSprite(752,50,10,40);
       inv2.visible = false;

       inv3 = createSprite(687,104,2000,5);
       inv3.visible = false;

       inv4 = createSprite(687,134,2000,5);
       inv4.visible = false;

       inv5 = createSprite(687,170,2000,5);
       inv5.visible = false;

       inv6 = createSprite(687,200,2000,5);
       inv6.visible = false;

       inv7 = createSprite(687,228,2000,5);
       inv7.visible = false;

       inv8 = createSprite(687,260,2000,5);
       inv8.visible = false;

       line1 = createSprite(705,-800);
       line1.addImage(l1);

       line = createSprite(-100,30);
       line.addImage(l0);

       line2 = createSprite(690,-800);
       line2.addImage(l2);

       line3 = createSprite(820,-800);
      line3.addImage(l3);

       line4 = createSprite(650,-800);
       line4.addImage(l4);

      line5 = createSprite(655,-800);
       line5.addImage(l5);

      line6 = createSprite(710,-800);
      line6.addImage(l6);

       line7 = createSprite(418,-800);
      line7.addImage(l7);
  
  }

  function draw() {
    background(bg);

    if(gameState === "slide1"){
        textSize(70);
        fill("red")
        stroke("black")
        strokeWeight(15)
        text("Paneer Tikka Recipe", displayWidth/4,displayHeight/4)
        text("To View Click ↓ ",displayWidth/4 + 90,displayHeight/3 + 10)
    }

    if(gameState === "slide2"){
     textSize(20);
      fill("yellow")
        stroke("black")
         strokeWeight(8)
         line1.velocityY = 5;
         line.velocityX = 5;
         line2.velocityY = 5;
         line3.velocityY = 5;
         line4.velocityY = 5;
         line5.velocityY = 5;
         line6.velocityY = 5;
         line7.velocityY = 5;
if(line7.collide(inv8)){
    next1.show();

}

  //text(" mushrooms, cauliflower, tomatoes, broccoli and more.", displayWidth/6 - 50,displayHeight/4 + 30 );
    }
    

     line1.collide(inv1);
     line.collide(inv2);
    line2.collide(inv3);
    line3.collide(inv4);
    line4.collide(inv5);
    line5.collide(inv6);
    line6.collide(inv7);
    line7.collide(inv8);
    drawSprites();
  }

  function viewAll(){
    gameState = "slide2"
    start.hide();
  }

  function next0(){
    gameState = "slide3"
    next1.hide();
    line.visible = false;
    line1.visible = false;
    line2.visible = false;
    line3.visible = false;
    line4.visible = false;
    line5.visible = false;
    line6.visible = false;
    line7.visible = false;
  }