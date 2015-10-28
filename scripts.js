// Declare variables
var correctCount = 0;
var incorrectCount = 0;

// create click event to activate next question
var activateNextQuestion = function() {
  $("#nextQuestion").click(function(){
    console.log("testing next question");
    getQuestion(getRandom(0,20));
    $(".answer").css("display", "none");
    $("#Message").text("");
    $("#answer-field").val("");
  });
};
// create click event to activate reset button
var activateReset = function(){
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
};
// create a click event to active the submit button
var activateSubmit = function(){
  $("#answer").click(function(evt){
    evt.preventDefault();
    console.log("testing submission");
    checkAnswer();
  });
};
// add click events to each type of start button
$("#general").click(function(){
  console.log("testing");
  $("body").removeClass().addClass("general");
  $("#type").html("General");
  $(".trivselect").html("general");
  $(".start").html("CLICK TO START");
  $("#Message").text("");
  $(".answer").css("display", "none");
  $("#answer-field").val("");
  $(".start").click(function(){
    console.log("testing start");
    getQuestion(getRandom(0,20));
  });
});

$("#sports").click(function(){
  console.log("testing");
  $("body").removeClass().addClass("sports");
  $("#type").html("Sports");
  $(".trivselect").html("sports");
  $(".start").html("CLICK TO START");
  $("#Message").text("");
  $(".answer").css("display", "none");
  $("#answer-field").val("");
  $(".start").click(function(){
    console.log("testing start");
    getQuestion(getRandom(0,20));
  });
});

$("#geography").click(function(){
  console.log("testing");
  $("body").removeClass().addClass("geography");
  $("#type").html("Geography");
  $(".trivselect").html("geography");
  $(".start").html("CLICK TO START");
  $("#Message").text("");
  $(".answer").css("display", "none");
  $("#answer-field").val("");
  $(".start").click(function(){
    console.log("testing start");
    getQuestion(getRandom(0,20));
  });
});

$(".start").click(function(){
  console.log("testing start");
  getQuestion(getRandom(0,20));
  activateNextQuestion();
  activateReset();
  activateSubmit();
});

// create a random number that will be used for pulling a question
var getRandom = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// create get question function that gets function based on which type of trivia is active
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
    correctCount +=1;
    $("#correct-counter").html("Correct: " + correctCount);
  }
    else {
      console.log("test incorrect");
      $("#Message").text("You answered incorrectly.  Try again or click 'NEXT QUESTION' to move on.");
      $(".answer").css("display", "inline");
      incorrectCount +=1;
      $("#incorrect-counter").html("Incorrect: " + incorrectCount);
    }
};
