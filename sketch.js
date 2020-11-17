//Declaring the variables.
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;
var bgImg,cloudImg,compImg,stage,comp;

//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Function for preloading.
function preload() {
  //Loading images to 3 variables.
  bgImg = loadImage("bg.gif");
  cloudImg = loadImage("cloud.png");
  compImg = loadImage("computer.png");
}

//Function for setting up.
function setup() {
  //Creating the canvas area.
	createCanvas(1350, 700);

  //Creating an engine in the variable engine.
  engine = Engine.create();
  //Storing engine's world in the variable world.
  world = engine.world;

  //Setting stage's value as 1.
  stage = 1;

	//Create the Bodies.
	bob1 = new Bob(505,600);
	bob2 = new Bob(585,600);
	bob3 = new Bob(665,600);
	bob4 = new Bob(745,600);
	bob5 = new Bob(825,600);
  roof = new Roof(675,200);
  rope1 = new Rope(bob1.body,roof.body,-150,0);
	rope2 = new Rope(bob2.body,roof.body,-75,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,75,0);
  rope5 = new Rope(bob5.body,roof.body,150,0);
  
  //Creating a sprite named 'comp'.
  comp = createSprite(200,490,10,10);
  //Adding image in it.
  comp.addImage(compImg);
  //Adjusting its size.
  comp.scale = 1.2;

  //Running the previously created engine.
	Engine.run(engine);
}

//Draw loop function.
function draw() {
  //Setting rectMode as CENTER.
  rectMode(CENTER);
  //Setting ellipseMode as RADIUS.
  ellipseMode(RADIUS);

  //Assigning functions when stage is 1.
  if(stage === 1) {
    //Setting cloudImg variable as the background.
    background(cloudImg);

    //Displaying info text.
    fill("black");
    textFont("comic sans MS");
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER);
    text("Hello!! Welcome to the virtual world of science",660,40);
    text("and physics. I am Mr.Computer and today we are going to learn about Newton's",660,65);
    text("Cradle and also see a visual demonstration of it. Newton's cradle is a device that demonstrates",660,90);
    text("conservation of momentum and energy using a series of swinging bobs. The bobs are usually made up of metal and are",650,115);
    text("tied to a rectangular roof with a rope. When one bob at the end is lifted and released, it strikes the stationary bobs,",660,140);
    text("transmitting a force through the stationary bobs that pushes the last bob upward. The last bob swings back and strikes the",650,165);
    text("still nearly stationary bobs, repeating the effect in the opposite direction. The device is named after 17th-century English",650,190);
    text("scientist Sir Isaac Newton. It is also known as Newton's pendulum, Newton's balls, Newton's rocker or executive ball clicker.",655,215);
    text("After starting the visual demonstration, you can control the cradle by pressing number keys from 1 to 8. Each key",650,240);
    text("will make a different bob to swing. Note: The longer you press the number key, more the force will be",650,265);
    text("applied to the bob. You can also try different combinations by pressing more than one",650,290);
    text("number key. So, let's begin. Press 'Enter' to start the",550,315);
    text("demonstration.",355,340);

    //Setting stage's value as 2 when enter key is pressed.
    if(keyDown(ENTER)) {
      stage = 2;
    }
  }
  
  //Assigning functions when stage is 2.
  else if(stage === 2) {
    //Setting bgImg as the background.
    background(bgImg);

    //Making comp invisible.
    comp.visible = false;
    
    //Displaying all the bodies.
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    roof.display();

    //Displaying text.
    fill("red");
    textFont("segoe script");
    textStyle(BOLD);
    textSize(20);
    text("Press Ctrl+R to restart",560,205);

    //Applying force to different bobs when different number keys are pressed.
    if(keyDown("1")) {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});
    }
    if(keyDown("2")) {
      Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-700,y:0});
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});
    }
    if(keyDown("3")) {
      Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-700,y:0});
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});
      Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-700,y:0});
    }
    if(keyDown("4")) {
      Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-700,y:0});
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});
      Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-700,y:0});
      Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-700,y:0});
    }
    if(keyDown("5")) {
      Matter.Body.applyForce(bob2.body,bob2.body.position,{x:700,y:0});
      Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});
      Matter.Body.applyForce(bob3.body,bob3.body.position,{x:700,y:0});
      Matter.Body.applyForce(bob4.body,bob4.body.position,{x:700,y:0});
    }
    if(keyDown("6")) {
      Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});
      Matter.Body.applyForce(bob3.body,bob3.body.position,{x:700,y:0});
      Matter.Body.applyForce(bob4.body,bob4.body.position,{x:700,y:0});
    }
    if(keyDown("7")) {
      Matter.Body.applyForce(bob4.body,bob4.body.position,{x:700,y:0});
      Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});
    }
    if(keyDown("8")) {
      Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:0});
    }
  }

  //Displaying all the sprites.
  drawSprites();
}



