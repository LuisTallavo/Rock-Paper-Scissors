const selection = ["rock", "paper", "scissors"]



getComputerChoice = () => selection[Math.floor(Math.random() * 3)];


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let score;

    playerSelection == computerSelection ? score = 0: // draw 
    playerSelection == selection[0] && computerSelection == selection[1] ? score = -1: // player picks rock, computer picks paper
    playerSelection == selection[0] && computerSelection == selection[2] ? score = 1: // player picks rock, computer picks scissors
    playerSelection == selection[1] && computerSelection == selection[0] ? score = 1: // player picks paper, computer picks rock
    playerSelection == selection[1] && computerSelection == selection[2] ? score = -1: // player picks paper, computer picks scissors
    playerSelection == selection[2] && computerSelection == selection[0] ? score = -1: // player picks scissors, computer picks rock
    score = 1; // player picks scissors, computer picks paper (all other options are covered)

    return score;
  }

  function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let scoreUpdate = playRound(prompt("Choose your weapon: Rock, Paper, or Scissors").toLowerCase());
        score += scoreUpdate;
        scoreUpdate > 0 ? console.log("won round") : 
        scoreUpdate < 0 ? console.log("lost round") : console.log("Tied round")  
    }
    score > 0 ? console.log("Winner!") : console.log("Loser!")
  }

  game();