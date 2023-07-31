// scoring
// 1. (each round wins and lose)
// 2. update roundWinner
// 3. when either party reach 5 wins, game will ends
// 4. restart game

// logic
// 1. randomize computer choice
// 2. getPlayerChoice

let playerScore = 0; // score may change hence LET
let computerScore = 0; // score may change hence LET

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const randomleh = Math.floor(Math.random() * choice.length);
  return choice[randomleh];
}

// connect to HTML's score-result thru eventListener (getElementById)

function displayResult(result) {
  const resultElement = document.getElementById("score-result");
  resultElement.textContent = result;
}

// modal for end of game
function showModal(message) {
  const modalElement = document.getElementById("modal-message");
  modalElement.textContent = message;

  const modal = document.getElementById("myModal");
  modal.style.display = "block";

  // close (x) btn
  const close = document.getElementById("close");
  close.addEventListener("click", function () {
    modal.style.display = "none";
    resetGame();
  });
}

// when game wins reach 5, activate modal
function game5() {
  if (playerScore === 5) {
    showModal("Congrats, massive W :)");
  } else if (computerScore === 5) {
    showModal("Game over, big L :(");
  }
}

// reset game

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const playerScoreElement = document.getElementById("playerScore");
  const computerScoreElement = document.getElementById("computerScore");

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

const restart = document.getElementById("restartBtn");
restart.addEventListener("click", function () {
  resetGame();
  console.log("click recorded! - restart");
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
});

// emoji for computer choice:
function getEmoji(choice) {
  if (choice === "rock") {
    return "✊";
  } else if (choice === "paper") {
    return "✋";
  } else if (choice === "scissor") {
    return "✌";
  } else {
    return "";
  }
}

// in this case, we don't need to care about case-sensitivity because
// the options for the users are the 3 buttons

function getPlayerChoice(playerChoice) {
  const computerSelection = getComputerChoice();
  const computerChoiceEmoji = document.getElementById("choice-result");
  const computerEmoji = getEmoji(computerSelection);
  const playerEmoji = getEmoji(playerChoice);

  computerChoiceEmoji.textContent = playerEmoji + " beats " + computerEmoji;

  if (playerChoice === computerSelection) {
    displayResult("tie, let's go again");
  } else if (
    (playerChoice === "rock" && computerSelection === "scissor") ||
    (playerChoice === "scissor" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock")
  ) {
    displayResult("u win!");
    playerScore++;
  } else if (
    (playerChoice === "scissor" && computerSelection === "rock") ||
    (playerChoice === "paper" && computerSelection === "scissor") ||
    (playerChoice === "rock" && computerSelection === "paper")
  ) {
    displayResult("u lose!");
    computerScore++;
  }

  // update scores thru link with HTML element's id
  const playerScoreElement = document.getElementById("playerScore");
  const comScoreElement = document.getElementById("computerScore");
  playerScoreElement.textContent = playerScore;
  comScoreElement.textContent = computerScore;

  game5(); // call the function every 1 round;
}

// connect to html via event listeners

const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");
const playerScore2 = document.getElementById("playerScore");
const computerScore2 = document.getElementById("computerScore");
const score = document.getElementById("score");

// update score

// when user click on the btns (link up with html)

rockButton.addEventListener("click", function () {
  getPlayerChoice("rock");
  console.log("you click on rock");
});

paperButton.addEventListener("click", function () {
  getPlayerChoice("paper");
  console.log("you click on paper");
});

scissorButton.addEventListener("click", function () {
  getPlayerChoice("scissor");
  console.log("you click on scissor");
});

// when game score of either party reach 5
