// Number of Questions
var questionNum = 5;


// declaring questions

var answers = [ "Wilt", "CLE" , "Adam" , "Ben" , "Kareem"];
 
var correctAnswers = 0;

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
   // alert('Time Up!')
    


  }
}



// The stop function
function stop(){
// Clears our "counter" interval.
// We just pass the name of the interval
// to the clearInterval function.
  clearInterval(counter);
  getAnswers();
  checkAnswer();
  $('#answerDiv').text("You got "  + correctAnswers + " questions correct");
  console.log(radioAll);



}


//run();
// Start button gets clicked, execute the run function.
 $('#startButton').on('click', run);






var radioAll = [];

//placeholder for button values
function getAnswers() {
  var radioDude1 = $('input[name="question1"]:checked').val(); 
    radioAll.push(radioDude1);
  var radioDude2 = $('input[name="question2"]:checked').val();
    radioAll.push(radioDude2);  
  var radioDude3 = $('input[name="question3"]:checked').val();  
    radioAll.push(radioDude3);  
  var radioDude4 = $('input[name="question4"]:checked').val(); 
    radioAll.push(radioDude4);  
  var radioDude5 = $('input[name="question5"]:checked').val();   
    radioAll.push(radioDude5);  

}


getAnswers();


 function checkAnswer() {
   for (var i=0; i<answers.length; i++) {
     // console.log(radioAll[i]);
     // console.log(answers[i]);
     if (radioAll[i] == answers[i]) {
       correctAnswers ++;
     }
   }
 };

 checkAnswer();





// $(document).ready(function(){
//   $("#StartButton").click (function() {
//       run();
//       $("#SplashScreen").hide();
//       $("#GameCanvas").show();
//     });
//   $("#scoreButton")

// });