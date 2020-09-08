function computerPlay() {
  let array = ["Rock", "Paper", "Scissor"];
  let word = array[Math.floor(Math.random() * array.length)];
  console.log(word);
  return word;
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection.toUpperCase() === "ROCK"
  ) {
    playerScore++;
    alert("You Win! Paper beats Rock");
    alertWinner();
    updateScore();
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection.toUpperCase() === "SCISSOR"
  ) {
    computerScore++;
    alert("You Lose! Scissor beats rock");
    alertWinner();
    updateScore();
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection.toUpperCase() === "PAPER"
  ) {
    computerScore++;
    alert("You lose! Paper beats rock");
    alertWinner();
    updateScore();
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection.toUpperCase() === "SCISSOR"
  ) {
    playerScore++;
    alert("You win! Rock beats paper");
    alertWinner();
    updateScore();
  } else if (
    playerSelection.toUpperCase() === "SCISSOR" &&
    computerSelection.toUpperCase() === "PAPER"
  ) {
    playerScore++;
    alert("You win! Scissor beats paper");
    alertWinner();
    updateScore();
  } else if (
    playerSelection.toUpperCase() === "SCISSOR" &&
    computerSelection.toUpperCase() === "ROcK"
  ) {
    computerScore++;
    alert("You lose! Rock beats scissor");
    alertWinner();
    updateScore();
  } else {
    alert("There is a tie! The computer picked the same hand!");
    alertWinner();
    updateScore();
  }
}

let playerScore = 0;
let computerScore = 0;

let score = document.querySelector("#score");

function updateScore() {
  score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
}

/**Check to see if the player/computer has 5 points already */
function alertWinner() {
  if (playerScore === 5) {
    alert("You are the winner of the match!");
    resetGame();
  } else if (computerScore === 5) {
    alert("The computer wins the match, try again!");
    resetGame();
  }
}

//resets scores to 0 for a new game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

const playerSelection = "rock";

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
  playRound("scissor", computerPlay());
});

const computerSelection = computerPlay();
