const selection = ["rock", "paper", "scissors"]

let computerplay = () => {
    return Math.floor(Math.random() * 3);
}

let playerplay = () => {
    let move = prompt("Please enter your move").toLowerCase();
    return move;
}

let checkmove = (move, compmove) => {
    let result = (move == compmove) ? "Tie" : 
             (move == "paper" && compmove == "rock") ? "Player Wins" :
             (move == "paper" && compmove == "scissors") ? "Computer Wins" :
             (move == "rock" && compmove == "paper") ? "Computer Wins" :
             (move == "rock" && compmove == "scissors") ? "Player Wins" :
             (move == "scissors" && compmove == "rock") ? "Computer Wins" :
             (move == "scissors" && compmove == "paper") ? "Player Wins" : null;
    return result;
} 

let games = prompt("How many games would you like to play?")

for (let i = 1; i <= games; i++) {
    let move = playerplay();
    console.log(checkmove(move, selection[computerplay()]));
}