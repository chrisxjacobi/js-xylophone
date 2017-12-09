$(document).ready(function () {
    var audioCLow = document.getElementById("c-low-audio");
    var audioD = document.getElementById("d-audio");
    var audioE = document.getElementById("e-audio");
    var audioF = document.getElementById("f-audio");
    var audioG = document.getElementById("g-audio");
    var audioA = document.getElementById("a-audio");
    var audioB = document.getElementById("b-audio");
    var audioCHigh = document.getElementById("c-high-audio");

    $('#c-low').mouseover(function () {
        audioCLow.currentTime = 0;
        audioCLow.play();
    });

    
    $('#d').mouseover(function () {
        audioD.currentTime = 0;
        audioD.play();
    });
    
    $('#e').mouseover(function () {
        audioE.currentTime = 0;
        audioE.play();
    });
    
    $('#f').mouseover(function () {
        audioF.currentTime = 0;
        audioF.play();
    });
    
    $('#g').mouseover(function () {
        audioG.currentTime = 0;
        audioG.play();
    });
    
    $('#a').mouseover(function () {
        audioA.currentTime = 0;
        audioA.play();
    });
    
    $('#b').mouseover(function () {
        audioB.currentTime = 0;
        audioB.play();
    });
    
    $('#c-high').mouseover(function () {
        audioCHigh.currentTime = 0;
        audioCHigh.play();
    });


});


