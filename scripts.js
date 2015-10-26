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
  $("#nextQuestion").click(function(){
    console.log("testing next question");
    getQuestion(getRandom(0,2));
    $(".answer").css("display", "none");
    $("#Message").text("");
    $("#Message").text("");
    $("#answer-field").val("");
  });
// add click event to reset button, turn off next question button so you must click start to restart
  $("#reset").click(function(){
    console.log("reset test");
    correctCount = 0;
    incorrectCount = 0;
    $("#nextQuestion").off();
    $("#Message").text("");
    $("#correct-counter").html("Correct: " + correctCount);
    $("#incorrect-counter").html("Incorrect: " + incorrectCount);
    $(".start").html("START");
    $(".start").click(function(){
      console.log("testing start");
      getQuestion(getRandom(0,2));
    });
  });
  // create click event to check answer
  $("#answer").click(function(evt){
    evt.preventDefault();
    console.log("testing submission");
    checkAnswer();
  });
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
  if($("#answer-field").val().toLowerCase() == $(".answer").text()){
    console.log("test correct");
    $("#Message").text("You are correct! Press 'NEXT QUESTION' to move on.");
    correctCount ++;
    $("#correct-counter").html("Correct: " + correctCount);
  } else {
    console.log("test incorrect");
    $("#Message").text("You answered incorrectly.  Try again or click 'NEXT QUESTION' to move on.");
    $(".answer").css("display", "inline");
    incorrectCount ++;
    $("#incorrect-counter").html("Incorrect: " + incorrectCount);
  }
};
