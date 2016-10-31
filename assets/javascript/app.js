// Number of Questions
var questionNum = 5;

// Number of questions displayed in answer area
var answers = []

// declaring questions

var question1
var question2
var question3
var question4
var question5

//placeholder for button values
var userInput = []

// Answers
answers[0] = "Wilt";
answers[1] = "CLE";
answers[2] = "Adam";
answers[3] = "Ben";
answers[4] = "Kareem";

// function to get values from buttons


function getRadioValue() {
    var radios = form1.elements[userInput];
    window.rdValue; 
        for (var i=0; i<questionNum.length; i++) {
             var radioVal = radios[i];
              if (radioVal.checked) {
                rdValue = radioVal.value;
                    break;
                }
            else rdValue = 'noRadioChecked';
            }
              if (rdValue == '5') {
              alert('5'); 
            }
            else if (rdValue == 'noRadioChecked') {
              alert('no radio checked');
            }
        }

var radios = getRadioValue();
// function to get score 
function getScore() {
  var score = 0;
  var questionNum = 5;
  var form = document.getElementById('form1');
    userInput[0] = form1.question1.radios;
    userInput[1] = form1.question2.radios;
    userInput[2] = form1.question3.radios;
    userInput[3] = form1.question4.radios;
    userInput[4] = form1.question5.radios;



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
