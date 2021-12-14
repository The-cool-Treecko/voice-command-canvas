function setup() {
    createCanvas(1300, 1300)
}

SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
var x;
var y;
var drawcircle;
var drawrectangle;

function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    transcript = event.results[0][0].transcript;
    console.log(transcript);
    document.getElementById("status").innerHTML = "The speech has been recognised as " + transcript;
    x = Math.floor(Math.random()*1300);
    y = Math.floor(Math.random()*1300);
    if (transcript == "Circle.") {
        stroke("black");
        strokeWeight(3);
        drawcircle = "true";
        console.log(drawcircle);
    }
    if (transcript == "Rectangle.") {
        stroke("black");
        strokeWeight(3);
        drawrectangle = "true";
        console.log(drawrectangle);
    }
}

function draw() {
    if (drawrectangle == "true") {
        rect(x,y,300,100);
        drawrectangle = "";
    }
    else if (drawcircle == "true") {
        circle(x,y,150);
        drawcircle = "";
    }
}