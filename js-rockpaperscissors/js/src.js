let humanScore = 0 , computerScore = 0 ;

function getComputerChoice() {
    const choices = ["rock" , "paper" , "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}
function playRound(humanChoice , computerChoice) {
    let winner = "tied";
    if(humanChoice == "rock") {
        if(computerChoice == "scissors") {
            winner = "human"
        }
        else if(computerChoice == "paper") {
            winner = "computer"
        }
    }
    else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            winner = "human"
        }
        else if(computerChoice == "scissors") {
            winner = "computer"
        }
    }
    else if(humanChoice == "scissors") {
        if(computerChoice == "paper") {
            winner = "human"
        }
        else if(computerChoice == "rock") {
            winner = "computer"
        }
    }
    if(winner == "human") {
        humanScore++ ;
    }
    else if(winner == "computer"){
        computerScore++;
    }
    console.log("The winner is " , winner);
    console.log("human score : " , humanScore , "  ,  computer score : " , computerScore);
}
for(let i=1;i<=5;i++){
    let input = prompt("What is your choice?");
    playRound(input , getComputerChoice());
}