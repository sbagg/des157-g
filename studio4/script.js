'use strict';
console.log('reading js');
var Cmajor = ['C4','D4','E4','F4','G4','A4','B4','C5'];

var create = document.querySelector("article");
var noteBox = document.querySelector("section");
var progress = document.querySelector("#progress");
create.addEventListener('click', function(e){
    create.style.display = "none";
    noteBox.style.display = "block";
    e.preventDefault();
});

function playCMajorScale(){
    var C4 = document.getElementById("noteC4");
    var D4 = document.getElementById("noteD4");
    var E4 = document.getElementById("noteE4");
    var F4 = document.getElementById("noteF4");
    var G4 = document.getElementById("noteG4");
    var A4 = document.getElementById("noteA4");
    var B4 = document.getElementById("noteB4");
    var C5 = document.getElementById("noteC5");



   var synth = new Tone.Synth().toMaster();

    C4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[0], "4n");
    });
    D4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[1], "4n");
    });
    E4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[2], "4n");
    });
    F4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[3], "4n");
    });
    G4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[4], "4n");
    });
    A4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[5], "4n");
    });
    B4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[6], "4n");
    });
    C5.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[7], "4n");
    });
    C4.addEventListener('touchstart', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[0], "4n");
    });
    D4.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[1], "4n");
      progress.style.display = 'block';
    });
    E4.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[2], "4n");
    });
    F4.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[3], "4n");
    });
    G4.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[4], "4n");
    });
    A4.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[5], "4n");
    });
    B4.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[6], "4n");
    });
    C5.addEventListener('click', function(e) {
      e.preventDefault();
      synth.triggerAttackRelease(Cmajor[7], "4n");
    });
}