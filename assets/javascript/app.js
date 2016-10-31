// Number of Questions
var questNum = 5;

// Answer Options
var options = 4;

// Number of questions displayed in answer area
var answers = new Array(5);

// Answers
answers[0] = "Wilt";
answers[1] = "CLE";
answers[2] = "Adam";
answers[3] = "Ben";
answers[4] = "Kareem";

// function to get score ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<questNum; i++) {
    currElt = i*options;
    for (j=0; j<options; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  form.solutions.value = correctAnswers;
  ;
}

