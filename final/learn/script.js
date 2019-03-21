'use strict';
console.log('reading js');
var Cmajor = ['C4','D4','E4','F4','G4','A4','B4','C5'];


  // Initialize Firebase

var create = document.querySelector("article");
var createHover = document.querySelector("article:hover");
var noteBox = document.querySelector("section");
var progress = document.querySelector("#progress");
var back = document.querySelector("#backButton");
var finish = document.querySelector("#finish");
var add = document.querySelector("#add");
var welcome = document.querySelector('h1');
var notes = document.querySelector(".notes");
var deleteButton = document.querySelector("#delete");
var C4 = document.querySelector("#noteC4");
var D4 = document.querySelector("#noteD4");
var E4 = document.querySelector("#noteE4");
var F4 = document.querySelector("#noteF4");
var G4 = document.querySelector("#noteG4");
var A4 = document.querySelector("#noteA4");
var B4 = document.querySelector("#noteB4");
var C5 = document.querySelector("#noteC5");
var userNotes = [];
var CmajorFunction = [C4, D4, E4, F4, G4, A4, B4, C5];

var i = 0;
while(i < CmajorFunction.length){
     CmajorFunction[i].value ="not-Selected";
     i++;
}


function toneStart(note){
    Tone.WebAudio.getContext().resume().then(() => {
        setTimeout(function () {
            Tone.setVolume(1, 127);
        }, 2);
    });
}
back.addEventListener('click', function(){
    document.location.href = "../../index.html";
});

deleteButton.addEventListener('click', function(){
    deleteProgress();
});

create.addEventListener('click', function(e){
    //create.style.display = "none";
   
    create.style.width= "85%";
    create.style.left= "7%";
    create.style.top= "15%";
    create.style.height="65%";
    create.style.transition = "all 1.5s";
    back.style.transition = "all 1.5s";
    back.style.left= "40%";
    back.style.marginTop= "2%";
    welcome.style.display = "none";
    notes.style.display = "block";
    add.style.display = "block";
    finish.style.display = "block";
    deleteButton.style.display = "block";
    playCMajorScale();
    e.preventDefault();

});

var synth = new Tone.MembraneSynth().toMaster();
function playCMajorScale(){

//   var synth = new Tone.Synth().toMaster();
    
    C4.addEventListener('click', function(e) {    
       
      Tone.context.resume().then(() => {
        setTimeout(function () { 
            synth.triggerAttackRelease(Cmajor[0], "4n");
            
        }, 2);
      });
        cycle(CmajorFunction[0]);  
      e.preventDefault();
    });
    D4.addEventListener('click', function(e) {
      
      Tone.context.resume().then(() => {
        setTimeout(function () { 
            CmajorFunction[1].style.backgroundColor = 'orange';
            CmajorFunction[1].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[1], "4n");

        }, 2);
      }); 
        cycle(CmajorFunction[1]);
      e.preventDefault();
    });
    E4.addEventListener('click', function(e) {
      
      Tone.context.resume().then(() => {
        setTimeout(function () { 
            CmajorFunction[2].style.backgroundColor = 'orange';
            CmajorFunction[2].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[2], "4n");

        }, 2);
      }); 
        cycle(CmajorFunction[2]);
      e.preventDefault();
    });
    F4.addEventListener('click', function(e) {
      
      
      Tone.context.resume().then(() => {
        setTimeout(function () { 
            CmajorFunction[3].style.backgroundColor = 'orange';
            CmajorFunction[3].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[3], "4n");

        }, 2);
      }); 
        cycle(CmajorFunction[3]);
      e.preventDefault();
    });
    G4.addEventListener('click', function(e) {
      
      Tone.context.resume().then(() => {
        setTimeout(function () { 
            CmajorFunction[4].style.backgroundColor = 'orange';
            CmajorFunction[4].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[4], "4n");

        }, 2);
      });
        cycle(CmajorFunction[4]);
      e.preventDefault();
    });
    A4.addEventListener('click', function(e) {
      
      Tone.context.resume().then(() => {
        setTimeout(function () {  
            CmajorFunction[5].style.backgroundColor = 'orange';
            CmajorFunction[5].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[5], "4n");

        }, 2);
      });
        cycle(CmajorFunction[5]);
      e.preventDefault();
    });
    B4.addEventListener('click', function(e) {
      
      Tone.context.resume().then(() => {
        setTimeout(function () {  
            CmajorFunction[6].style.backgroundColor = 'orange';
            CmajorFunction[6].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[6], "4n");

        }, 2);
      });
        cycle(CmajorFunction[6]);
      e.preventDefault();
    });
    C5.addEventListener('click', function(e) {
      
      Tone.context.resume().then(() => {
        setTimeout(function () {  
            CmajorFunction[7].style.backgroundColor = 'orange';
            CmajorFunction[7].style.color = 'white';
            synth.triggerAttackRelease(Cmajor[7], "4n");

            
        }, 2);
      });
        cycle(CmajorFunction[7]);
      e.preventDefault();
    });
}
function cycle(button){
    for(var i = 0; i < 9; i++ ){
        if(button == CmajorFunction[i]){
            CmajorFunction[i].value ="Selected";
            console.log(CmajorFunction[i].value);
//            continue;
        }else{
        CmajorFunction[i].value ="not-Selected";
        console.log(CmajorFunction[i].value);
        }
    }
}
add.addEventListener('click', function(e) {
    var j = 0;
    var p = 0;
    
    
    while(j < CmajorFunction.length){
        if(CmajorFunction[j].value == "Selected"){
           userNotes.push(Cmajor[j]);
            

        }
        
        j++;
        

    }
    
    console.log(p);
    
    //console.log(c);
});
finish.addEventListener('click', function(e) {
    for(var i = 0; i < userNotes.length;i++){
        console.log(userNotes[i]);   
    }
 
        Tone.context.resume().then(() => {
            setTimeout(function () {
            for(var i = 0; i < userNotes.length;i++){ 
                synth.triggerAttackRelease(userNotes[i], "4n"); 
                    }

            }, 2);
        });
 
});
