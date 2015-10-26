// Declare variables for correct and incorrect count
var correctCount = 0;
var incorrectCount = 0;

var questions = [
  {
    question: "question1?",
    answer: "answer1"
  },
  {
    question: "question2?",
    answer: "answer2"
  },
  {
    question: "question3?",
    answer: "answer3"
  },
];

// add click events to start, submit, next question, and reset
$(".start").click(function(){
  console.log("testing start");
  getQuestion(getRandom(0,2));
});
// submit answer event
$("#answer").click(function(evt){
  evt.preventDefault();
  console.log("testing submission");
  checkAnswer();
});

$("#nextQuestion").click(function(){
  console.log("testing next question");
  getQuestion(getRandom(0,2));
});

$("#reset").click(function(){
  console.log("reset test");
});

// create a random number that will be used for pulling a question
var getRandom = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// create start function that moves to a random question ID and turns off start click event
var getQuestion = function(questionNumber){
  $(".start").text(questions[questionNumber].question);
  $(".answer").text(questions[questionNumber].answer);
  $(".start").off();
};


// create a check answer function that checks if the answer is correct
var checkAnswer= function(){
  if($("#answer-field").val() == $(".answer").text()){
    console.log("test correct");
    correctCount ++;
    $("#correct-counter").html(correctCount);
  } else {
    console.log("test incorrect");
    incorrectCount ++;
    $("#incorrect-counter").html(incorrectCount);
  }
};
