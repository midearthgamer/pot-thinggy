var sprites=[];
var gen=false;
var posx=0;
var posy=0;
function preload(){
  Pot= loadImage("Pot.png");
}
function setup(){
createCanvas(windowWidth,windowHeight)

sp1= createSprite(width/2,height-50,50,50);
sp2= createSprite(width/2,height-50,50,50);
sp2.visible=false;
sp1.addImage("Pot",Pot);
sp2.addImage("Pot",Pot);
sp2.scale = 2
}

function keyPressed() {
  if (keyCode === 16) {
    gen=false;
    var spritenew= createSprite(Math.ceil(posX/50)*50-25,Math.ceil(posY/50)*50-25,50,50);
    spritenew.addImage("Pot",Pot);
    sp2.x=width/2
    sprites.push(spritenew);
    
    sp2.y=height-50;
    sp2.scale = 0.5
  }
}

function draw(){
  background(62, 63, 71)
  drawSprites()
  stroke(66,67,75)
    for(var i=0;i<width;i+=100){
      for(var j=0;j<height;j+=100){
      
        line(i,0,i,height);
        line(0,i,width,i);
      }

  }
  if(mousePressedOver(sp2)){
    gen=true;
  }
  if(gen==true){
    generation();
    posX=mouseX;
    posY=mouseY;
  }
}

function generation(){
  sp2.x= mouseX;
  sp2.y= mouseY;

  sp2.visible=true;
}
function mouseClicked(){

  gen=false;
  var spritenew= createSprite(Math.ceil(posX/100)*100-25,Math.ceil(posY/100)*100-25,100,100);
  spritenew.addImage("Pot",Pot);
  sp2.x=width/2
  sprites.push(spritenew);
  
  sp2.y=height-50;
  
  
  
}