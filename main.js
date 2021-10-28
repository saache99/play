var timmer = 3;
var timer_checker = "";
var drawn = "";
var answer = "";
var score = "";

var countdown = setInterval(function(){
    
    --timmer;
    
    document.getElementById("timer").innerHTML = timmer;

    if(timmer <= 0)
    {
        var stekch_to_drwan = ["pen","ball","hat","apple","camel","bird","teeth","bow","hand","candle"];
var task_given_no = Math.floor((Math.random()*stekch_to_drwan.length)+1);
var task_given = stekch_to_drwan[task_given_no];

console.log(task_given);

document.getElementById("label").innerHTML = "Label: "+task_given;   
        timmer = 300;
    }
},1000);

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(ClassifyCanvas);
    synth = window.speechSynthesis;
}

function draw()
{
 strokeWeight(8);
 stroke('red');
 if(mouseIsPressed)
 {
     line(pmouseX, pmouseY, mouseX, mouseY);
 }
}

function ClassifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
 if(document.getElementById("label") == results[0].label)
 {
    score1 = score + 1;
    document.getElementById("score").innerHTML = score1;
    document.getElementById("made").innerHTML = results[0].label;
    document.getElementById("confidence").innerHTML = Math.round(results[0].confidence * 100) + "%" ;
    utterThis = new SpeechSynthesisUtterance("I know it is" + task_given);
    synth.speak(utterThis); 
    background("white");
    console.log("cleared");
    task_given_no = Math.floor((Math.random()*stekch_to_drwan.length)+1);
    task_given = stekch_to_drwan[task_given_no];
}

else{
    if(timmer == 300)
    {
        background("white");
        console.log("cleared");
    }
    console.log(results);

    document.getElementById("made").innerHTML =  results[0].label;

    document.getElementById("confidence").innerHTML =  Math.round(results[0].confidence * 100) + "%" ;

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}
}
}
function clearCanvas()
{
    document.getElementById("made").innerHTML =  "";

    document.getElementById("confidence").innerHTML =  "0%";
    background("white");
    console.log("cleared");
}
