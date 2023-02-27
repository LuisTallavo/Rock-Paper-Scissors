// Global Variables
const selection = ["rock", "paper", "scissors"]
let gameStatus = true;
let playerScore = 0;
let computerScore = 0;


// Random Computer Selection
getComputerChoice = () => selection[Math.floor(Math.random() * 3)];

// Simulate a round of rock-paper-scissors, update the global score and return the winner/loser
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let playerCurrentScore = playerScore;
    let computerCurrentScore = computerScore; 
    let scoreUpdate = 0;

    playerSelection == computerSelection ? playerScore += 0: // draw 
    playerSelection == selection[0] && computerSelection == selection[1] ? computerScore += 1: // player picks rock, computer picks paper
    playerSelection == selection[0] && computerSelection == selection[2] ? playerScore += 1: // player picks rock, computer picks scissors
    playerSelection == selection[1] && computerSelection == selection[0] ? playerScore += 1: // player picks paper, computer picks rock
    playerSelection == selection[1] && computerSelection == selection[2] ? computerScore += 1: // player picks paper, computer picks scissors
    playerSelection == selection[2] && computerSelection == selection[0] ? computerScore += 1: // player picks scissors, computer picks rock
    playerScore += 1; // player picks scissors, computer picks paper (all other options are covered)

    playerScore - playerCurrentScore > 0 ? scoreUpdate = 1 : 
    computerScore - computerCurrentScore > 0 ? scoreUpdate = -1:
    scoreUpdate = 0;

    return scoreUpdate;
  }
  
// Updates on-screen text with the current score
function updateText (playerScore, computerScore) {
  document.getElementById("playerScore").innerHTML = 'Player: ' + playerScore;
  document.getElementById("computerScore").innerHTML = 'Computer: ' + computerScore;
  }

// Function is called to start the game of rock-paper-scissors. Checks for round winner and game winner
function game(playerSelection) {
  let scoreUpdate = 0;

  if (gameStatus == true) {
      scoreUpdate = playRound(playerSelection);
      scoreUpdate > 0 ? document.getElementById("gameStatus").innerHTML = 'You won the round!': 
      scoreUpdate < 0 ? document.getElementById("gameStatus").innerHTML = 'You lost the round!': 
      document.getElementById("gameStatus").innerHTML = 'Tie!';
      updateText (playerScore, computerScore);
  }
  if ((playerScore == 3 || computerScore == 3) && gameStatus == true) {
      playAgainButton.style.display = "block";
      gameStatus = false;
      playerScore == 3 ? document.getElementById("gameStatus").innerHTML = 'You Won The Game!': 
      computerScore == 3 ? document.getElementById("gameStatus").innerHTML = 'You Lost The Game!': document.getElementById("gameStatus").innerHTML = 'Tie Game!';
      togglePlayAgainButton();
  }
}


// Restart game by setting global variables back to 0 and updating the onscreen text
restartGame = () => {
  gameStatus = true;
  playerScore = 0;
  computerScore = 0;
  updateText(playerScore, computerScore);
  document.getElementById("gameStatus").innerHTML = 'First to score 3 points wins the game!';
  playAgainButton.style.display = "none";
}

// Add event listener to all buttons on the screen
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id); 
    });
});


// Override event listener for play again button -> call the restartGame() function
const playAgainButton = document.querySelector('#playAgain');
playAgainButton.addEventListener('click', () => {restartGame()});



