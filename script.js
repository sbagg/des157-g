console.log('reading js');


    var string = "//Welcome to My Portal;";
    var typeString = string.split("");
    var mydiv = document.getElementById('mySketch');
    mydiv.addEventListener("mouseover", animate);

function animate() {
    typeString.length > 0 ? mydiv.innerHTML += typeString.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    document.getElementById("mySketch").style.color = "white";    
}



