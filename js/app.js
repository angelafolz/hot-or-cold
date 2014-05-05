
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

	var targetNum = randomNum(0, 100);
	var count = 0;

	function displayCount() {	// display # of guesses
		$("#count").text(count);
	}

	function randomNum(min, max) {	// generate random number from 0-100
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function newGame() {	// start new game
		$("#feedback").text("Make your Guess!");
		$("#guessList").children().remove();
		count = 0;
		displayCount();
		targetNum = randomNum(0, 100);
	}

	function checkGuess(guess, target) {	// compare user guess to target number
			if (target + 50 < guess || guess < target - 50) {
				return "freezing";
			} else if (target + 20 < guess || guess < target - 20) {
				return "cold";
			} else if (target + 10 < guess || guess < target - 10) {
				return "warm";
			} else if (target + 1 < guess || guess < target - 1) {
				return "hot";
			} else if (target + 1 == guess || guess == target - 1) {
				return "burning up!";
			} else {
				return "Congratulations!";
			}
	}


	$("#guessButton").click(function(event){
		event.preventDefault();
		var userGuess = $("#userGuess").val();	// receive user guess
		var feedback;

		if (userGuess && 0 <= userGuess && userGuess <= 100) {	// check if valid
			feedback = checkGuess(userGuess, targetNum);

			$("#feedback").text(feedback);	// return feedback on guess (absolute)

			$("#guessList").append($("<li>" + userGuess + "</li>"));	// add guess to guess list

			count++;	// track # of guesses
			displayCount();

		} else {
			alert("Please submit an integer from 0 to 100.");
		}

		$("#userGuess").val("").focus();
	});

	$(".new").click(newGame);


});


