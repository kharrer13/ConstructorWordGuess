const Word = require("./Word");
const inquirer = require("inquirer");
const isLetter = require("is-letter");

const wordList = ["telephone", "computer", "elephant", "clock"];
let gamemWord = "";
let userGuess = "";
let correctlyGuessed = false;
let lettersGuessed = [];
let numLettersGuessed = 0;
let guessesLeft = 10;

function startGame() {
  guessesRemaining = 10;
  numLettersGuessed = 0;
  randomWord();
  lettersGuessed = [];
}

function randomWord() {
  let randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
  gameWord = new Word(randomWord);
  console.log("Your word contains " + randomWord.length + " letters.");
  console.log("WORD TO GUESS:");
  //Use the Word constructor in Word.js to split the word and generate letters.
  gameWord.splitWord();
  gameWord.generateLetters();
  guessLetter();
}

function guessLetter(){
	//Keep prompting user to enter a letter if there are slots/underscores that still need to be filled in
	//OR if there are still guesses remaining.
	if (slotsFilledIn < gameWord.letters.length || guessesLeft > 0) {
	inquirer.prompt([
  {
    name: "letter",
    message: "Guess a letter:",
    validate: function(value) {
        if(isLetter(value)){
          return true;
        } 
        else {
          return false;
        }
      }
  }
]).then(guess =>{
    guess.letter.toUpperCase();
	console.log(gameTextColor("You guessed: " + guess.letter.toUpperCase()));
    userGuessedCorrectly = false;
    if (lettersAlreadyGuessedListArray.indexOf(guess.letter.toUpperCase()) > -1) {
		console.log("You've already guessed that letter");
		guessLetter();
	} else if (lettersAlreadyGuessedListArray.indexOf(guess.letter.toUpperCase()) === -1) {
		lettersGuessed.push(guess.letter.toUpperCase());
		console.log('Letters already guessed: ' + lettersGuessed.spilt());

		//We need to loop through all of the letters in the word, 
		//and determine if the letter that the user guessed matches one of the letters in the word.
		for (i=0; i < gameWord.letters.length; i++) {
			//If the user guess equals one of the letters/characters in the word and letterGuessedCorrectly is equal to false for that letter...
			if (guess.letter.toUpperCase() === gameWord.letters[i].character && gameWord.letters[i].letterGuessedCorrectly === false) {
				//Set letterGuessedCorrectly property for that letter equal to true.
				someWord.letters[i].letterGuessedCorrectly === true;
				//Set userGuessedCorrectly to true.
				userGuessedCorrectly = true;
				someWord.underscores[i] = guess.letter.toUpperCase();
				//Increment the number of slots/underscores filled in with letters by 1.
				slotsFilledIn++
			}
		}
		console.log(gameTextColor("WORD TO GUESS:"));
		someWord.splitWord();
        someWord.generateLetters();

        if (userGuessedCorrectly) {
			//Tell user they are CORRECT (letter is in the word they are trying to guess.)
			console.log(correct('CORRECT!'));
			console.log(gameTextColor("====================================================================="));
			//After each letter guess, check if the user won or lost.
			checkIfUserWon();
		}

		//Else if user guessed incorrectly...
		else {
			//Tell user they are INCORRECT (letter is not in the word).
			console.log(incorrect('INCORRECT!'));
			//Decrease number of guesses remaining by 1 and display number of guesses remaining.
			guessesRemaining--;
			console.log(gameTextColor("You have " + guessesRemaining + " guesses left."));
			console.log(gameTextColor("====================================================================="));
			//After each letter guess, check if the user won or lost.
			checkIfUserWon();
		}
	}
});