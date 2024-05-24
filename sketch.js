function setup() {
    createCanvas(800, 800);
    background("black");
  }
  
  function draw() {
    stroke("black");
    fill("white");
  
    if (mouseIsPressed)
      //rect(mouseX,mouseY,10,20);
      circle(mouseX, mouseY, 10, 20);
  }
  