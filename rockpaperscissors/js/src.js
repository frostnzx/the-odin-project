
const announce_label = document.querySelector("#announce-label");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btn_container = document.querySelector("#btn-container")

const game_label = document.querySelector("#game-label");
const player_label = document.querySelector("#player-label");
const computer_label = document.querySelector("#computer-label");

const choices = ["rock" , "paper" , "scissors"];
let gameCount = 1 , playerScore = 0 , computerScore = 0 , pScore = 0 , cScore = 0 ;
let playerChoice = "" ;


btn_container.addEventListener("click" , (e) => {
    playerChoice = e.target.id ;
    game();
});

function game() {
    gameCount++;
    let index = Math.floor(Math.random() * 3);
    let computerChoice = choices[index] ; 

    if(playerChoice == computerChoice){
        updateScore();
        return;
    }
    switch(playerChoice){
        case "rock" : 
            computerChoice == "paper" ? computerScore++ : playerScore++;
        break;
        case "paper" : 
            computerChoice == "scissors" ? computerScore++ : playerScore++;
        break;
        case "scissors" : 
            computerChoice == "rock" ? computerScore++ : playerScore++;
        break;
    }
    updateScore();
    if(playerScore == 5){
        confirm("Player won the match!");
        reset();
    }
    else if(computerScore == 5){
        confirm("Computer won the match!");
        reset();
    }
    updateScore();
}

function updateScore() {
    game_label.innerHTML = "Game : " + gameCount.toString();
    player_label.innerHTML = "Player : " + playerScore.toString();
    computer_label.innerHTML = "Computer : " + computerScore.toString();

    if(playerScore > pScore) {
        announce_label.innerHTML = "Player is winning!" ;
    }
    else if(computerScore > cScore) {
        announce_label.innerHTML = "Computer is winning!" ;
    }

    pScore = playerScore;
    cScore = computerScore;
}

function reset() {
    gameCount = 0 , playerScore = 0 , computerScore = 0 , pScore = 0 , cScore = 0 ;
    playerChoice = "" ;
    announce_label.innerHTML = "Who is winning" ;
    game_label = "Game : 0";
    player_label = "Player : 0";
    computer_label = "Computer : 0";
}
