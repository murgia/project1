// Declare variables
var correctCount = 0;
var incorrectCount = 0;

// add click events to select trivia types
$("#general").click(function(){
  console.log("testing");
  $("body").removeClass().addClass("general");
  $("#type").html("General");
  $(".trivselect").html("general");
  getQuestion(getRandom(0,20));
});

$("#sports").click(function(){
  console.log("testing");
  $("body").removeClass().addClass("sports");
  $("#type").html("Sports");
  $(".trivselect").html("sports");
  getQuestion(getRandom(0,20));
});

$("#geography").click(function(){
  console.log("testing");
  $("body").removeClass().addClass("geography");
  $("#type").html("Geography");
  $(".trivselect").html("geography");
  getQuestion(getRandom(0,20));
});
// add click events to start, submit, next question, and reset
$(".start").click(function(){
  console.log("testing start");
  getQuestion(getRandom(0,20));

  // once start is clicked, add click event to next question

  var activateNextQuestion = function() {
    $("#nextQuestion").click(function(){
      console.log("testing next question");
      getQuestion(getRandom(0,20));
      $(".answer").css("display", "none");
      $("#Message").text("");
      $("#answer-field").val("");
  });
};
activateNextQuestion();

// add click event to reset button, turn off next question button so you must click start to restart

  $("#reset").click(function(){
    console.log("reset test");
    correctCount = 0;
    incorrectCount = 0;
    $("#answer-field").val("");
    $("#nextQuestion").off();
    $("#Message").text("");
    $("#correct-counter").html("Correct: " + correctCount);
    $("#incorrect-counter").html("Incorrect: " + incorrectCount);
    $(".start").html("CLICK TO START");
    $(".start").click(function(){
      console.log("testing start");
      getQuestion(getRandom(0,20));
    });
  });
  // create click event to check answer
  $("#answer").click(function(evt){
    evt.preventDefault();
    console.log("testing submission");
    checkAnswer();
    activateNextQuestion();
  });
});

// create a random number that will be used for pulling a question
var getRandom = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// create start function that moves to a random question ID and turns off start click event

var getQuestion = function(questionNumber){
  if($(".trivselect").html() == "general"){
    $(".start").text(generalQuestions[questionNumber].question);
    $(".answer").text(generalQuestions[questionNumber].answer);
    $(".start").off();
  } else if ($(".trivselect").html() == "sports"){
      $(".start").text(sportsQuestions[questionNumber].question);
      $(".answer").text(sportsQuestions[questionNumber].answer);
      $(".start").off();
    }
      else if ($(".trivselect").html() == "geography"){
        $(".start").text(geographyQuestions[questionNumber].question);
        $(".answer").text(geographyQuestions[questionNumber].answer);
        $(".start").off();
      }
};


// create a check answer function that checks if the answer is correct
var checkAnswer= function(){
  if($("#answer-field").val().toLowerCase() == $(".answer").text()){
    console.log("test correct");
    $("#Message").text("You are correct! Press 'NEXT QUESTION' to move on.");
    correctCount ++;
    $("#correct-counter").html("Correct: " + correctCount);
  }
    else {
      console.log("test incorrect");
      $("#Message").text("You answered incorrectly.  Try again or click 'NEXT QUESTION' to move on.");
      $(".answer").css("display", "inline");
      incorrectCount ++;
      $("#incorrect-counter").html("Incorrect: " + incorrectCount);
    }
};
