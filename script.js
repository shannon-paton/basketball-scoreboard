let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function buttonClicked(number, team) { // get number from button and team

	if ( team === 'home')  {
		// get current score
		let currentScore = parseInt(homeScore.innerHTML);
		// add number to current score
		currentScore += number;
		// update score
		homeScore.innerHTML = currentScore;
	}
	else {
		let currentScore = parseInt(guestScore.innerHTML);
		currentScore += number;
		guestScore.innerHTML = currentScore;
	}
}