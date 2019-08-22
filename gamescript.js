// Array of options
const Pokemon = [
  `Bidoof`,
  `Cloyster`,
  `Jynx`,
  `Mareep`,
  `Mesprit`,
  `Metapod`,
  `Politoed`,
  `Slakoth`,
  `Snorlax`,
  `Squirtle`,
  `Suicune`,
  `Tangela`,
  `Venomoth`,
  `Vulpix`
];

//  Keep the user's possible guesses to the alphabet only (no punctuation)
const possibleLetterGuesses = [`abcdefghijklmnopqrstuvwxyz`];
//  Setting other variables for gameplay
//  What the user presses - if time set toUpperCase
let userGuess = ``;
//  Create a boolean state that the computer has to compare to -- since the user has not guessed yet, it's false
let guessState = false;
//  letters guessed (taken from alphabet list)
//      If time, figure out how to handle ' . and spaces
let lettersGuessed = ``;
//      Randomly chosen word by the computer, which is the puzzle
let kidnappedPokemon = ``;
//      Representation of the chosen word/pokemon for the user as a series of underscores
let underscoreArray = [];
//      Underscores to display from the underscoreArray
let underscores = ``;
//      Boolean that the user has played a game
let gameStart = false;
//      Sets Up the game instruction (which will disappear once the game starts)
const landingStart = (document.getElementById("pressKeyToStart").textContent =
  "Press any Key to Start!");

//  Press Any Key sets up a new game termination down below and noted to delete comment};)
document.onkeyup = function(event) {
  if (!gameStart) {
    gameStart = true;
    //      Hide "Press Any Key to Start"
    document.getElementById("pressKeyToStart").style.visibility = "hidden";
    //      Sets number of guesses user has to start at 10
    remainingGuesses = 10;
    //      Computer randomly selects - this is the pokemon that has been kidnapped, that the user must guess the identity of
    let kidnappedPokemon = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    console.log(kidnappedPokemon);

    //  Computer displays this new array of blank spaces in the #puzzleBox
    for (
      let generatedIndex = 0;
      generatedIndex < kidnappedPokemon.length;
      generatedIndex++
    ) {
      underscoreArray[generatedIndex] = `_`;
    }
    document.getElementById(`puzzleBox`).textContent = underscoreArray.join(
      ` `
    );

    // computer listens to user input
    // sets up the game if it wasn't the first one
    if (
      !lettersGuessed.includes(userGuess) &&
      possibleLetterGuesses.includes(userGuess)
    ) {
      lettersGuessed.push(userGuess);
      for (
        let indexGuess = 0;
        indexGuess < kidnappedPokemon.length;
        indexGuess++
      ) {
        if (userGuess === kidnappedPokemon[indexGuess]) {
          guessState = true;
          underscores =
            underscores.substring(0, indexGuess) +
            userGuess +
            underscores.substring(indexGuess + 1);
        }
      }
    }

    // Termination for gameStart
  }
  //  Termination for the newGameSetUp
};

// function playGame() {}
//    Game play: Computer listens for a letter input from the user
//    User presses a key
// let userGuess = event.keyCode.toUpperCase;
//    so every letter the user types - look at kidnappedPokemon array to see if it appears (boolean conditional)
// if yes then index of answer array becomes the letter that the person typed then appear in the answer array

//        computer verifies that the key is a letter key - if not a letter key, an alert pops up saying "You did not choose a letter"
//        if user selected a letter key, and is not already in lettersGuessed, it will appear as lettersGuessed
//        if user selected a letter key that is already in lettersGuessed, an alert pops up saying "You have already chosen this letter, try again"
//        AND computer compares the userGuess to the kidnappedPokemon
//            if user selected a letter key and it is in the answerArray, then the _ is replaced by that letter for all the times it appears
// document.onkeyup = function() {
// const userGuess = kidnappedPokemon.CharAt([0]);
//  if (userGuess === kidnappedPokemon[0])
//    answerArray[indexPokemonName] = kidnappedPokemon[0];
// };

//            if user selected a letter key and it is not in the answerArray, then remainingGuesses decreases by one and the answer array remains unchanged
// const remainingGuessesArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// for (
//  let remainingIndex = [0];
//  remainingIndex < remainingGuessesArray.length;
//  remainingIndex++
// ) {
//  const guessesRemaining = remainingGuessesArray[remainingIndex];
// }

// currentWord (will be an object, letter1:__ etc, have a win image and a lose image)
//    Each letterIndex in the currentWordArray is a box with solid bottom borders with content hidden
//        (except "_" if needed will have no border for phrases that have spaces and punctuation will be unhidden)
//    if userGuess  any of the letters not A-Z are depressed, nothing will happen
//    if any of the letters in the currentWordArray are depressed, they will appear in the empty box AND lettersGuessed
//    else they will subtract 1 from remainingGuesses AND appear in lettersGuessed

// remainingGuessesArray - start at 10, lowest it can be is 0 resulting in a for loop to output guessesRemaining

// lettersGuessed - any letter A-Z will appear as a log
//      Sets the number of wins and losses
// let winNumber = ;
// let lossNumber = ;
// If all letters in current word are guessed, win plus 1
//    .preview document.write currentWordObject.winLoseImage + winCaption

// If all letters in current word are not guessed and remainingGuesses = [9], losses plus 1
//    correct word reveals (no longer is hidden)
//    .preview document.write currentWordObject.winLoseImage + lossCaption
// document.getElementById("captionID").textContent = function caption(captionArray) {}

//  If time - create objects that link the kidnappedPokemon to the images in the folder to change
//  If time - song plays when newImage is on, cheer audio plays when win, sad trombone plays when loss
//      After 5 seconds (or after audio completes), runs startGame

// list of values that will appear on the page (DOM)
//      Opening instructions

//get element pictures
//<img src="images/NEWrocket.png" alt="Team Rocket group photo" /> how add alt?
const mainImage = (document.getElementById(
  `rocketpic`
).src = `images/NEWrocket.png`);

const gameCaption = (document.getElementById("newCaption").textContent =
  "Hey twerps, don't try to hard guessing the Pokemon we just stole! Sorry the note got damaged so you won't know who we have... Mwahahaha! See if you can guess some letters.");
const guessCountRemaining = document.getElementById("remainingGuessesId");
const wrongLettersUsed = document.getElementById("lettersGuessedId");
const winNumber = document.getElementById("winsId");
const lossNumber = document.getElementById("lossesId");
//    Captions if win or lose
const winCaption = [kidnappedPokemon] + ": Thanks for rescuing me!";
const lossCaption = [kidnappedPokemon] + ": Oh no, the sent me to the grinder!";

//  DOM reveals and hides
