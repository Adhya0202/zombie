const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite; 
stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world; 
  
  
  frameRate(80);
  base = new Base (689,windowHeight,windowWidth+10,20);
  leftW = new Base (15,windowHeight-400,150,100);
  joinPoint = new Base (windowWidth-30,windowHeight-400,150,100);

bridge = new Bridge(29,{x:15,y:windowHeight-400});

 Matter.Composite.add(bridge.body,joinPoint); 
  jointLink= new Link(bridge,joinPoint);

  for(var i = 0; i <= 8; i++){
    var x = random(width/2 - 200 , width/2 + 300 )
    var y  = 10;
    var stone = new Stone(x,y,50);
    stones.push(stone);
    }
 
}

function draw() {
  
  background(51);
 
  Engine.update(engine);
  base.show();
  leftW.show();
  for(var stone of stones)
  stone.display();
 
  joinPoint.show();
  bridge.show();
  
}
