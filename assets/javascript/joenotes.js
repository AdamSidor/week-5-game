Click events:

- On document ready, have a click event set up on a start button that starts the game

-start screen shown, game hidden, score hidden

-start screen hidden, game shown, score hidden

-start screen hidden, game hidden, score show 

when coding it up, have everything visible at first to work through it.


Questions:

- Have a variable called questions, that is an array.  
- Each item in this array will be a javascript object that contains the question, the possible choices for the answer (as an array), and the correct answer.

Game variables:

- Have variables to store game logic: ie (number of correct / incorrect answers...etc

Counter:

- Have a variable that stores the game counter (ie the number of seconds left in the timer)

Game start function:

- Have a function that "starts the game".  This essentially will start a timer that decrements the counter variable once per second. 
- Each time it is called it updates the counter in the DOM
- Each time it is called it checks to see if the counter is 0 and ends the game.

I would try getting here first, before getting the values out of the radio buttons.  Above is where much of the game logic and complicated stuff is.  

Once this is all done & working, then you can focus on getting the values out of the radios / check the answers once the time is done in a "end game" function — which is something you can add last.