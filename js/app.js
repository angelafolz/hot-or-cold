
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
	var prevUserGuess;

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
		prevUserGuess = 0;
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

	function compareGuesses(curGuess, prevGuess, target) {	// compare user guess to previous user guess
		if (curGuess == target) {
			return "Congratulations!";
		} else if (Math.abs(target - curGuess) < Math.abs(target - prevGuess)) {
			return "warmer";
		} else {
			return "colder";
		}
	}


	$("#guessButton").click(function(event){
		event.preventDefault();
		var userGuess = $("#userGuess").val();	// receive user guess
		var feedback;

		if (userGuess && 0 <= userGuess && userGuess <= 100) {	// check if valid
			if ($("#absfeedback").is(":checked")) {	// play with absolute feedback
				feedback = checkGuess(userGuess, targetNum);
			} else {	// play with relative feedback
				if (prevUserGuess) {
					feedback = compareGuesses(userGuess, prevUserGuess, targetNum);
				} else {
					feedback = checkGuess(userGuess, targetNum);
				}
			}

			$("#feedback").text(feedback);	// return feedback on guess (absolute)

			$("#guessList").append($("<li>" + userGuess + "</li>"));	// add guess to guess list

			count++;	// track # of guesses
			displayCount();

			prevUserGuess = userGuess;

		} else {
			alert("Please submit an integer from 0 to 100.");
		}

		$("#userGuess").val("").focus();
	});

	$(".new").click(newGame);


});


