console.log('reading js');

//var tParent = 255, cSize = 0;

/*ar cCircle = {
  x:mouseX;
  y:mouseY;
  noFill();
}*/

/*function setup() {

  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');
  noFill();

}*/
//connect myCanvas to mySketch
//function draw() {
    var string = "Welcome to My Portal.";
    var typeString = string.split("");
    var mydiv = document.getElementById('mySketch');
    mydiv.addEventListener("mouseover", animate);
    mydiv.addEventListener("mouseout", stopAnimate);
  /*if(cSize < 350){
    tParent--;
    ellipse(mouseX, mouseY, cSize, cSize);
    noFill();
    cSize++;
  }else{
    tParent--;
    ellipse(mouseX, mouseY, cSize, cSize);
    noFill();


  }*/

//}
function animate() {
    typeString.length > 0 ? mydiv.innerHTML += typeString.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
}
function stopAnimate() {
    mydiv.innerHTML = "";
}
