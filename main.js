var timmer = 0;
var timer_checker = "";
var drawn = "";
var answer = "";
var score = "";

var stekch_to_drwan = ["pen","ball","hat","apple","camel","bird","teeth","bow","hand","candle"];
var task_given_no = Math.floor((Math.random()*stekch_to_drwan.length)+1);
var task_given = stekch_to_drwan[task_given_no];

console.log(task_given);

document.getElementById("label").innerHTML = "Label: "+task_given;