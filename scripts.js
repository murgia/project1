// Declare variables for correct and incorrect count
var correctCount = 0;
var incorrectCount = 0;
var questionNumber = 0;

var questions = [
  question1 = {
    question: "question1?",
    answer: "answer1"
  },
  question2 = {
    question: "question2?",
    answer: "answer2"
  },
  question3 = {
    question: "question3?",
    answer: "answer3"
  },
];
// add click events to start, submit, next question, and reset
$(".start").click(function(){
  console.log("testing start");
  start();
});

$("#answer").click(function(evt){
  evt.preventDefault();
  console.log("testing submission");
  checkAnswer();
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
// create start function that moves to a random question ID and turns off start click event
var start = function(){
  $(".start").text(questions[questionNumber].question);
  $(".start").off();
};


// create a check answer function that checks if the answer is correct
var checkAnswer= function(){
  if($("#answer-field").val() === questions[questionNumber].answer){
    console.log("test correct");
  } else {
    console.log("test incorrect");}
};
