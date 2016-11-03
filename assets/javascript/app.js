// Number of Questions
var questionNum = 5;


// declaring questions

var answers = [
  'Wilt', 
  'CLE' ,
  'Adam' ,
  'Ben' ,
  'Kareem']
 


//settimeout
//set some kind of thing to happen once time runs out
//clearInterval to stop the timer
// && means and
// || or
// ! means not

 var number = 30;


// The run function sets an interval
// that runs the decrement function once a second.
// Notice how we name the interval "counter."
function run(){
  counter = setInterval(decrement, 1000);
}        

// The decremeent function.
function decrement(){
// Decrease number by one.
  number--;
// Show the number in the #show-number tag.
  $('#show-number').html('<h6>' + 'Time Remaining:  ' + number + '</h6>');

// Once number hits zero...
  if (number === 0){
// ...run the stop function.
    stop();
// Alert the user that time is up.
    alert('Time Up!')

  }
}

// The stop function
function stop(){
// Clears our "counter" interval.
// We just pass the name of the interval
// to the clearInterval function.
clearInterval(counter);
}


//run();
// Start button gets clicked, execute the run function.
 $('#startButton').on('click', run);








//placeholder for button values
function getAnswers() {

var radioDude1 = $(".form1").val();  
var radioDude2 = $(".form2").val();  
var radioDude3 = $(".form3").val();  
var radioDude4 = $(".form4").val();  
var radioDude5 = $(".form5").val();  

var userInput = [radioDude1, radioDude2 , radioDude3 , radioDude4 , radioDude5]


console.log(radioDude1);
console.log(radioDude2);
console.log(radioDude3);
console.log(radioDude4);
console.log(radioDude5);

}



// function to get values from buttons

// function getRadioValue() {
//     var radios = document.getElementById("");
//     window.rdValue; 
//         for (var i=0; i<questionNum.length; i++) {
//              var radioVal = radios[i];
//               if (radioVal.checked) {
//                 rdValue = radioVal.value;
//                     break;
//                 }
//             else rdValue = 'noRadioChecked';
//             }
//               if (rdValue == '5') {
//               alert('5'); 
//             }
//             else if (rdValue == 'noRadioChecked') {
//               alert('no radio checked');
//             }
//         }

// var radios = getRadioValue();
// // function to get score 
// function getScore() {
//   var score = 0;
//   var questionNum = 5;
//   var form = document.getElementById('form1');
//     userInput[0] = form1.question1.radios;
//     userInput[1] = form1.question2.radios;
//     userInput[2] = form1.question3.radios;
//     userInput[3] = form1.question4.radios;
//     userInput[4] = form1.question5.radios;



//   for (i=0; i<questionNum.length; i++) {

//     if (userInput[i] == answers[i]) {

//       if (userInput[i] == answers[i]) {
//           score += 1;
//       } else {
//           score += 0;
//       }
//     }
//     alert(score);
//   }
// };
// getRadioValue();


/*set up div for welcome screen 
set up div for game over*/





$(document).ready(function(){
  $("#StartButton").click (function() {
      run();
      $("#SplashScreen").hide();
      $("#GameCanvas").show();
    });
  $("#")

});