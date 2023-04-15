let hutan
let zombie3

function preload(){
  zombie3 = loadImage("zombie3.png")
  hutan = loadImage("hutann.jpg")
  
  
}

class Mover {
  constructor(x,y){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  }
  
  display(){
    image(zombie3, this.location.x, this.location.y, 50, 50);
  }
  
  move(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 5;
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}

let zombies =[];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let z = 0; z < 30; z++){
    zombies.push(new Mover());
  }
}

function draw() {
  image(hutan,0,0, windowWidth, windowHeight)
  for (let z = 0; z < zombies.length; z++){
    zombies[z].move();
    zombies[z].display();
    zombies[z].cekBatas();
 }
}