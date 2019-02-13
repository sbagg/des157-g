'use strict';
console.log('reading js');

window.addEventListener("resize", myFunction);
var m = document.querySelector('.modelButton_mobile');
var shadow = document.querySelector('#shadow');
var m1 = document.querySelector('#m1');
var m2 = document.querySelector('#m2');
var m3 = document.querySelector('#m3');
var backpack = document.querySelector('#backpack');
var backpack_mobile = document.querySelector('#backpack_mobile');
var i1 = document.querySelector('#item1');
var i2 = document.querySelector('#item2');
var i3 = document.querySelector('#item3');
var itembox = document.querySelector('.items_mobile');
var itembox2 = document.querySelector('.items_mobile2');
var itembox3 = document.querySelector('.items_mobile3');
var string1 = "Lipstick: To make sure lips are maroon enough for the day and I look fabulous.";
var string2 = "SQL Book: To continue my knowledge in database systems for full stack development.";
var string3 = "Portable Charger: To ensure my phone is awake all day while I do my regular activities.";
var bg = document.querySelector('#bg');
var close1 = document.querySelector('#close1');
var close2 = document.querySelector('#close2');
var close3 = document.querySelector('#close3');
var dBox = document.querySelector('#dBox');
var typeString = ""
m1.onclick = function(){
   typeString = string1.split("");
}
m2.onclick = function(){
   typeString = string2.split("");
}
m3.onclick = function(){
   typeString = string3.split("");
}
dBox.addEventListener("mouseover", animate);
/*Typewriter animation*/

function animate() {
    typeString.length > 0 ? dBox.innerHTML += typeString.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    document.getElementById("dBox").style.color = "white";    
}
/*Function used to switch between mobile and desktop*/
function myFunction() {
    if($(window).width() >= 769) {
        m1.style.borderColor = "limegreen";
        m2.style.borderColor = "limegreen";
        m3.style.borderColor = "limegreen";
        dBox.style.borderColor = "limegreen";
        itembox.style.backgroundColor= "rgb(0,35,10,.60)";
        itembox2.style.backgroundColor= "rgb(0,35,10,.60)";
        itembox3.style.backgroundColor= "rgb(0,35,10,.60)";
        dBox.style.backgroundColor= "rgb(0,35,10,.60)";
        backpack_mobile.setAttribute('src', 'images/studio2_items-01.png');
        close1.style.color='limegreen';
        close2.style.color='limegreen';
        close3.style.color='limegreen';
        document.querySelector('#im1').src = 'images/studio2_items-02.png';
        document.querySelector('#im2').src = 'images/studio2_items-03.png';
        document.querySelector('#im3').src = 'images/studio2_items-04.png';
    }
    else{
        m1.style.borderColor = "blue";
        m2.style.borderColor = "blue";
        m3.style.borderColor = "blue";
        dBox.style.borderColor = "blue";
        itembox.style.backgroundColor= "rgb(0,10,35,.60)";
        itembox2.style.backgroundColor= "rgb(0,10,35,.60)";
        itembox3.style.backgroundColor= "rgb(0,10,35,.60)";
        dBox.style.backgroundColor= "rgb(0,10,35,.60)";
        document.querySelector('#im1').src = 'images/studio2_items_mobile-02.png';
        document.querySelector('#im2').src = 'images/studio2_items_mobile-03.png';
        document.querySelector('#im3').src = 'images/studio2_items_mobile-04.png';
        backpack_mobile.setAttribute('src', 'images/studio2_items_mobile-01.png');
        close1.style.color='blue';
        close2.style.color='blue';
        close3.style.color='blue';
        
    }
}

m1.addEventListener("click", item1);
m2.addEventListener("click", item2);
m3.addEventListener("click", item3);

close1.addEventListener("click" ,function(){

    location.reload();
});
close2.addEventListener("click" ,function(){

    location.reload();
});
close3.addEventListener("click" ,function(){

    location.reload();
});
/*Item boxes*/

function item1(){
    i1.style.display= "block";
    dBox.style.display= "block";
    backpack_mobile.style.display= "none";
    shadow.style.display = "none";
    m.style.display = "none";
}
function item2(){
    i2.style.display= "block";
    dBox.style.display= "block";
    backpack_mobile.style.display= "none";
    shadow.style.display = "none";
    m.style.display = "none";

}
function item3(){
    i3.style.display= "block";
    dBox.style.display= "block";
    backpack_mobile.style.display= "none";
    shadow.style.display = "none";
    m.style.display = "none";
}
m1.addEventListener('mouseover',function(){
    m1.style.backgroundColor = "limegreen";  
});
m1.addEventListener('mouseout',function(){
    m1.style.backgroundColor = "rgb(0,15,15,.75)";
});
m2.addEventListener('mouseover',function(){
    m2.style.backgroundColor = "limegreen";  
});
m2.addEventListener('mouseout',function(){
    m2.style.backgroundColor = "rgb(0,15,15,.75)";
});
m3.addEventListener('mouseover',function(){
    m3.style.backgroundColor = "limegreen";  
});
m3.addEventListener('mouseout',function(){
    m3.style.backgroundColor = "rgb(0,15,15,.75)";
});