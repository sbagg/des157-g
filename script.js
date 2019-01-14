console.log('reading js');

var tParent = 255, cSize = 0;

/*ar cCircle = {
  x:mouseX;
  y:mouseY;
  noFill();
}*/

function setup(){

  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');
  noFill();

}
//connect myCanvas to mySketch
function draw(){


  if(cSize < 350){
    tParent--;
    ellipse(mouseX, mouseY, cSize, cSize);
    noFill();
    cSize++;
  }else{
    tParent--;
    ellipse(mouseX, mouseY, cSize, cSize);
    noFill();


  }

}
