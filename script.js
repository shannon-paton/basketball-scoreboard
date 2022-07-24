let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function buttonClicked(number, team) { // get number from button and team

	console.log(number, team)

	// get current score
	if ( team === 'home')  {
		let currentScore = parseInt(homeScore.innerHTML);
		currentScore += number;
		console.log("current score is" + " " + currentScore)


	}
	else {
		let currentScore = parseInt(guestScore.innerHTML)
		currentScore += number;
		console.log("current score is" + " " + currentScore)


	}

	// add number to current score

	// update score

}