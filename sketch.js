var monster;
var grassColor;
var dirtColor;
var tileSize;



function setup () {
  createCanvas(400, 400);
  
  monster = {
    x: 0,
    y: 0,
    size: 30,
    spacing: 50,
    speed: 1,
    color: color(255),
    message: "Moving",
  }
  
  grassColor = color(122, 229, 80, 20);
  dirtColor = color(160, 104, 30);
  tileSize = 25;
}

function draw () {
  background(grassColor);

  stroke(255);
  
  
  // #4 Draw a tile floor // Bonus Challenge
  for (var x = 0; x <= width; x += monster.spacing ){
    for (var y = 0; y <= height; y += monster.spacing){
   fill(25,255,255)
    rect(x, y, tileSize, tileSize);
  }
 
  
  var duplicates = monster.x; 
  fill(50,20,100);
 
 while(duplicates <= width){
  ellipse(duplicates, monster.y, monster.size, monster.size);
 duplicates = duplicates + monster.spacing;
  
  }
  

}
 
  
  
  // #3 Use a loop to draw copies of monster along the x-axis
 

  // #2 Make the monster move diagonally
  
   if(monster.x > width || monster.x < 0)  {
     monster.speed = monster.speed * -1;
  }
  
  if(monster.y > height || monster.y < 0){
  monster.speed = monster.speed * -1;
   }
   
monster.x = monster.x + monster.speed;
monster.y = monster.y + monster.speed;
  
   
}