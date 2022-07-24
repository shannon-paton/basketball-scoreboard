function buttonClicked(number, team) { // get number from button and team
	scoreBoard = document.getElementById(team)
	// get current score
	let currentScore = parseInt(scoreBoard.innerHTML);
	// add number to current score
	currentScore += number;
	// update score
	scoreBoard.innerHTML = currentScore;
}