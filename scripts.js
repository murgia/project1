// Declare variables for correct and incorrect count
var correctCount = 0;
var incorrectCount = 0;

// add click events to start, submit, next question, and reset
$(".start").click(function(){
  console.log("testing start");
  start();
});

$("#answer").click(function(evt){
  evt.preventDefault();
  console.log("testing submission");
});

$("#nextQuestion").click(function(){
  console.log("testing next question");
});

$("#reset").click(function(){
  console.log("reset test");
});

// create a random number that will be used for pulling a question
var getRandom = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// create start function that changes
var start = function(){
  $(".start").html($("#" + getRandom(1,3)));
  $(".start").off();
};
