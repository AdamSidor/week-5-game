// Number of Questions
var questionNum = 5;

// Number of questions displayed in answer area
var answers = [];

// declaring questions

var question1
var question2
var question3
var question4
var question5

//placeholder for button values
var userInput = [];

// Answers
answers[0] = "Wilt";
answers[1] = "CLE";
answers[2] = "Adam";
answers[3] = "Ben";
answers[4] = "Kareem";

// function to get score ...
function getScore() {
  var score = 0;
  var questionNum = 5;
  var form = document.getElementById('form1');
    userInput[0] = form1.question1.value;
    userInput[1] = form1.question2.value;
    userInput[2] = form1.question3.value;
    userInput[3] = form1.question4.value;
    userInput[4] = form1.question5.value;



  for (i=0; i<questionNum.length; i++) {

    if (userInput[i] == answers[i]) {

      if (userInput[i] == answers[i]) {
          score += 1;
      } else {
          score += 0;
      }
    }
    alert(score);
  }
};
