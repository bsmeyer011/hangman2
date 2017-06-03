var wordOptions = ["cubs", "braves", "diamondbacks", "rockies", "rays", "dodgers", "yankees", "mariners", "phillies", "blue jays", "rangers", "royals", "athletics", "nationals"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var guessesLeft = 12;

function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
}

console.log(selectedWord);

startGame();