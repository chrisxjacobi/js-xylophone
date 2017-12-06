$(document).ready(function () {
    var audioC = document.getElementById("c-audio");
    var audioD = document.getElementById("d-audio");
    var audioE = document.getElementById("e-audio");
    var audioF = document.getElementById("f-audio");
    var audioG = document.getElementById("g-audio");
    var audioA = document.getElementById("a-audio");
    var audioB = document.getElementById("b-audio");

    $('#c').mouseover(function () {
        audioC.currentTime = 0;
        audioC.play();
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


});


