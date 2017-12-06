$(document).ready(function () {
    var audioA = document.getElementById("a-audio");

    $('#a').mouseover(function () {
        audioA.currentTime = 0;
        audioA.play();
    });



});
