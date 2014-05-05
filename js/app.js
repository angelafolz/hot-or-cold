
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});


	/*--- Play Hot || Cold ---*/

	var targetNum;

	// generate random number from 0-100
	function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// start new game
	function newGame() {
		//$("#guessList").children(remove());
		//$("#feedback").text("Make your Guess!");
		return randomNum(0, 100);
	}

	function checkGuess() {
		
		var guess = $("#userGuess").val();	// receive user guess
		var feedback;

		if (0 <= guess && guess <= 100) {	// check if valid

			// compare user guess to target number
			if (targetNum + 50 < guess || guess < targetNum - 50) {
				feedback = "freezing";
			} else if (targetNum + 20 < guess || guess < targetNum - 20) {
				feedback = "cold";
			} else if (targetNum + 10 < guess || guess < targetNum - 10) {
				feedback = "warm";
			} else if (targetNum + 1 < guess || guess < targetNum - 1) {
				feedback = "hot";
			} else if (targetNum + 1 == guess || guess == targetNum - 1) {
				feedback = "burning up!";
			} else {
				feedback = "Congratulations!";
			}

			// track and display # of guesses
			//$("#count").text(/*increment*/);

			// return feedback on guess (absolute)
			$("#feedback").text("feedback");
			//alert(feedback);

			// add guess to guess list
			$("#guessList").prepend($("<li>" + guess + "</li>"));

		} else {
			alert("Please submit an integer from 0 to 100.");
		}
	}

	$("#guessButton").click(checkGuess);

	$(".new").click(function(){
		targetNum = newGame();
		alert(targetNum);
	});

	// newGame(); at beginning?


});


